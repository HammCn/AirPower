/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AirDecorator } from '../helpers'

/**
 * # 忽略字段前缀Key
 */
const FIELD_IGNORE_KEY = 'NoPrefix'

/**
 * # 标记属性忽略类的别名前缀
 */
export function NoPrefix(): Function {
  return (target: any, key: string) => AirDecorator.setFieldConfig(target, key, FIELD_IGNORE_KEY, true)
}

/**
 * # 获取属性是否忽略别名前缀
 * @param target 目标类
 * @param key 属性名称
 */
export function getNoPrefix(target: any, key: string): boolean {
  return AirDecorator.getFieldConfig(target, key, FIELD_IGNORE_KEY) || false
}

/**
 * @deprecated
 * @see NoPrefix
 */
export function IgnorePrefix(): Function {
  return NoPrefix()
}

/**
 * @deprecated
 * @see getNoPrefix
 */
export function getIgnorePrefix(target: any, key: string): boolean {
  return getNoPrefix(target, key)
}
