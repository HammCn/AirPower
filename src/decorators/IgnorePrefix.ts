/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AirDecorator } from '../helpers/AirDecorator'

/**
 * # 忽略字段前缀Key
 */
const FIELD_IGNORE_KEY = 'IgnorePrefix'

/**
 * # 标记属性忽略类的别名前缀
 */
export function IgnorePrefix(): Function {
  return (target: any, key: string) => AirDecorator.setFieldConfig(target, key, FIELD_IGNORE_KEY, true)
}

/**
 * # 获取属性是否忽略别名前缀
 * @param target 目标类
 * @param key 属性名称
 */
export function getIgnorePrefix(target: any, key: string): boolean {
  return AirDecorator.getFieldConfig(target, key, FIELD_IGNORE_KEY) || false
}
