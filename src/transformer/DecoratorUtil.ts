import type { DecoratorData, TransformerField } from '../type'
import type { ITransformerConstructor } from './index'
import { Transformer } from './index'

/**
 * # 装饰器工具类
 *
 * @author Hamm.cn
 */
export class DecoratorUtil {
  /**
   * ### 装饰器前缀
   */
  static readonly DecoratorKeyPrefix = '[AirPower]'

  /**
   * ### 设置一个类配置项
   * @param Class 目标类
   * @param classConfigKey 配置项索引键值
   * @param classConfig 配置的参数
   */
  static setClassConfig<
    T extends Transformer,
  >(
    Class: ITransformerConstructor<T>,
    classConfigKey: string,
    classConfig: unknown,
  ) {
    this.setProperty(Class.prototype, classConfigKey, classConfig)
  }

  /**
   * ### 递归获取指定类的配置项
   * @param Class 目标类
   * @param classConfigKey 配置项的Key
   * @param defaultValue `可选` 类装饰器请传入配置项实例
   * @param isObject `可选` 是否是对象配置
   */
  static getClassConfig<
    T extends Transformer,
  >(
    Class: ITransformerConstructor<T>,
    classConfigKey: string,
    defaultValue: unknown = undefined,
    isObject = false,
  ): DecoratorData {
    let classConfig = Reflect.get(Class, classConfigKey)
    if (!isObject) {
      // 普通配置
      if (classConfig) {
        return classConfig
      }
      const SuperClass = Reflect.getPrototypeOf(Class) as (ITransformerConstructor<T> | null)
      if (!SuperClass || SuperClass.prototype.constructor.name === Transformer.name) {
        return undefined
      }
      return this.getClassConfig(SuperClass, classConfigKey)
    }

    classConfig = classConfig || {}
    // 对象配置
    const SuperClass = Reflect.getPrototypeOf(Class)
    if (!SuperClass || SuperClass.constructor.name === Transformer.name) {
      return defaultValue
    }

    return {
      ...this.getClassConfig((SuperClass as ITransformerConstructor<T>), classConfigKey, defaultValue, isObject),
      ...classConfig,
    }
  }

  /**
   * ### 设置一个属性配置项
   * @param instance 目标实例
   * @param field 属性
   * @param fieldConfigKey 配置项索引键值
   * @param fieldConfig 配置的参数
   * @param fieldListKey `可选` 类配置项列表索引值
   */
  static setFieldConfig<
    T extends Transformer,
  >(
    instance: T,
    field: keyof T,
    fieldConfigKey: string,
    fieldConfig: unknown,
    fieldListKey?: string,
  ) {
    if (fieldListKey) {
      this.addFieldDecoratorKey(instance, field, fieldListKey)
    }
    this.setProperty(instance, `${fieldConfigKey}[${field.toString()}]`, fieldConfig)
  }

  /**
   * ### 获取类指定属性的指定类型的配置
   * @param Class 目标类
   * @param field 属性
   * @param fieldConfigKey FieldConfigKey
   * @param isObject `可选` 是否对象配置
   */
  static getFieldConfig<
    T extends Transformer,
  >(
    Class: ITransformerConstructor<T>,
    field: TransformerField<T>,
    fieldConfigKey: string,
    isObject = false,
  ): DecoratorData {
    let fieldConfig = Reflect.get(Class.prototype, `${fieldConfigKey}[${field.toString()}]`)
    const SuperClass = Reflect.getPrototypeOf(Class) as (ITransformerConstructor<T> | null)
    if (!isObject) {
      // 普通配置
      if (fieldConfig !== undefined) {
        return fieldConfig
      }
      // 没有查询到配置
      if (!SuperClass || SuperClass.prototype.constructor.name === Transformer.name) {
        return undefined
      }
      return this.getFieldConfig(SuperClass, field, fieldConfigKey)
    }

    // 对象配置
    fieldConfig = fieldConfig || {}
    // 没有查询到配置
    if (!SuperClass || SuperClass.prototype.constructor.name === Transformer.name) {
      return {}
    }
    return {
      ...this.getFieldConfig(SuperClass, field, fieldConfigKey, true),
      ...fieldConfig,
    }
  }

  /**
   * ### 获取类标记了装饰器的属性列表
   * @param Class 目标类
   * @param fieldConfigKey FieldConfigKey
   * @param list `递归参数` 无需传入
   */
  static getFieldList<
    T extends Transformer,
  >(
    Class: ITransformerConstructor<T>,
    fieldConfigKey: string,
    list: string[] = [],
  ): string[] {
    const fieldList: string[] = Reflect.get(Class.prototype, fieldConfigKey) || []
    fieldList.forEach(item => list.includes(item) || list.push(item))
    const SuperClass = Reflect.getPrototypeOf(Class) as (ITransformerConstructor<T> | null)
    if (!SuperClass || SuperClass.prototype.constructor.name === Transformer.name) {
      return list
    }
    return this.getFieldList((SuperClass as ITransformerConstructor<T>), fieldConfigKey, list)
  }

  /**
   * ### 反射添加属性
   * @param instance 目标属性
   * @param propertyKey 配置key
   * @param value 配置值
   */
  private static setProperty<
    T extends Transformer,
  >(
    instance: T,
    propertyKey: string,
    value: unknown,
  ) {
    Reflect.defineProperty(instance, propertyKey, {
      enumerable: false,
      value,
      writable: false,
      configurable: true,
    })
  }

  /**
   * ### 设置一个属性的包含装饰器索引
   * @param instance 目标类
   * @param field 属性
   * @param propertyKey 类配置项列表索引值
   */
  private static addFieldDecoratorKey<
    T extends Transformer,
  >(
    instance: T,
    field: keyof T,
    propertyKey: string,
  ) {
    const list: Array<keyof T> = (Reflect.get(instance, propertyKey) || []) as Array<keyof T>
    list.push(field)
    this.setProperty(instance, propertyKey, list)
  }
}
