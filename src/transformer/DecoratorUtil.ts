import type { DecoratorData, DecoratorTarget } from '../type'
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
   * @param target 目标实体类
   * @param classConfigKey 配置项索引键值
   * @param classConfig 配置的参数
   */
  static setClassConfig(target: DecoratorTarget, classConfigKey: string, classConfig: unknown) {
    this.setProperty(target.prototype, classConfigKey, classConfig)
  }

  /**
   * ### 递归获取指定类的配置项
   * @param target 目标类
   * @param classConfigKey 配置项的Key
   * @param defaultValue `可选` 类装饰器请传入配置项实例
   * @param isObject `可选` 是否是对象配置
   */
  static getClassConfig(
    target: DecoratorTarget,
    classConfigKey: string,
    defaultValue: unknown = undefined,
    isObject = false,
  ): DecoratorData {
    if (typeof target !== 'object') {
      target = target.prototype
    }
    let classConfig = Reflect.get(target, classConfigKey)
    if (!isObject) {
      // 普通配置
      if (classConfig) {
        return classConfig
      }
      const superClass = Reflect.getPrototypeOf(target)
      if (!superClass || superClass.constructor.name === Transformer.name) {
        return undefined
      }
      return this.getClassConfig(superClass, classConfigKey)
    }

    classConfig = classConfig || {}
    // 对象配置
    const superClass = Reflect.getPrototypeOf(target)
    if (!superClass || superClass.constructor.name === Transformer.name) {
      return defaultValue
    }

    return {
      ...this.getClassConfig(superClass, classConfigKey, defaultValue, isObject),
      ...classConfig,
    }
  }

  /**
   * ### 设置一个属性配置项
   * @param target 目标类
   * @param key 属性
   * @param fieldConfigKey 配置项索引键值
   * @param fieldConfig 配置的参数
   * @param fieldListKey `可选` 类配置项列表索引值
   */
  static setFieldConfig(
    target: DecoratorTarget,
    key: string,
    fieldConfigKey: string,
    fieldConfig: unknown,
    fieldListKey?: string,
  ) {
    if (fieldListKey) {
      this.addFieldDecoratorKey(target, key, fieldListKey)
    }
    this.setProperty(target, `${fieldConfigKey}[${key}]`, fieldConfig)
  }

  /**
   * ### 获取类指定属性的指定类型的配置
   * @param target 目标类
   * @param key 属性
   * @param fieldConfigKey FieldConfigKey
   * @param isObject `可选` 是否对象配置
   */
  static getFieldConfig(
    target: DecoratorTarget,
    key: string,
    fieldConfigKey: string,
    isObject = false,
  ): DecoratorData {
    if (typeof target !== 'object') {
      target = target.prototype
    }
    let fieldConfig = Reflect.get(target, `${fieldConfigKey}[${key}]`)
    if (!isObject) {
      // 普通配置
      if (fieldConfig !== undefined) {
        return fieldConfig
      }
      // 没有查询到配置
      const superClass = Reflect.getPrototypeOf(target)
      if (!superClass || superClass.constructor.name === Transformer.name) {
        return undefined
      }
      return this.getFieldConfig(superClass, key, fieldConfigKey)
    }

    // 对象配置
    fieldConfig = fieldConfig || {}
    // 没有查询到配置
    const superClass = Reflect.getPrototypeOf(target)
    if (!superClass || superClass.constructor.name === Transformer.name) {
      return {}
    }
    return {
      ...this.getFieldConfig(superClass, key, fieldConfigKey, true),
      ...fieldConfig,
    }
  }

  /**
   * ### 获取类标记了装饰器的属性列表
   * @param target 目标类
   * @param fieldConfigKey FieldConfigKey
   * @param list `递归参数` 无需传入
   */
  static getFieldList(target: DecoratorTarget, fieldConfigKey: string, list: string[] = []): string[] {
    if (typeof target !== 'object') {
      target = target.prototype
    }
    const fieldList: string[] = Reflect.get(target, fieldConfigKey) || []
    fieldList.forEach(item => list.includes(item) || list.push(item))
    const superClass = Reflect.getPrototypeOf(target)
    if (!superClass || superClass.constructor.name === Transformer.name) {
      return list
    }
    return this.getFieldList(superClass, fieldConfigKey, list)
  }

  /**
   * ### 反射添加属性
   * @param target 目标类
   * @param key 配置key
   * @param value 配置值
   */
  private static setProperty(target: DecoratorTarget, key: string, value: unknown) {
    if (typeof target !== 'object') {
      target = target.prototype
    }
    Reflect.defineProperty(target, key, {
      enumerable: false,
      value,
      writable: false,
      configurable: true,
    })
  }

  /**
   * ### 设置一个属性的包含装饰器索引
   * @param target 目标类
   * @param key 属性
   * @param fieldListKey 类配置项列表索引值
   */
  private static addFieldDecoratorKey(target: DecoratorTarget, key: string, fieldListKey: string) {
    if (typeof target !== 'object') {
      target = target.prototype
    }
    const list: string[] = Reflect.get(target, fieldListKey) || []
    list.push(key)
    this.setProperty(target, fieldListKey, list)
  }
}
