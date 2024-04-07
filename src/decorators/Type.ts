/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AirDecorator } from '../helpers'
import { AirClassConstructor } from '../types'

/**
 * # 强制类型配置Key
 */
const TYPE_KEY = 'Type'

/**
 * # 标记为数组Key
 */
const IS_ARRAY_KEY = 'IsArray'

/**
 * # 标记属性强制转换类
 * @param Clazz 类型
 * @param isArray (可选)是否是数组
 */
export function Type(Clazz: AirClassConstructor<any>, isArray = false): Function {
  return (target: any, key: string) => {
    AirDecorator.setFieldConfig(target, key, TYPE_KEY, Clazz)
    AirDecorator.setFieldConfig(target, key, IS_ARRAY_KEY, isArray)
  }
}

/**
 * # 标记是数组
 * 可在此配置，但更建议在Type中直接配置第二个参数
 */
export function IsArray(): Function {
  return (target: any, key: string) => {
    AirDecorator.setFieldConfig(target, key, IS_ARRAY_KEY, true)
  }
}

/**
 * # 获取属性强制转换类
 * @param target 目标类
 * @param key 属性名
 */
export function getType(target: any, key: string): AirClassConstructor<unknown> | undefined {
  return AirDecorator.getFieldConfig(target, key, TYPE_KEY) || undefined
}

/**
 * # 获取属性是否数组
 * @param target 目标类
 * @param key 属性名
 */
export function getIsArray(target: any, key: string): boolean {
  return AirDecorator.getFieldConfig(target, key, IS_ARRAY_KEY)
}
