/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AirDecorator } from '../helpers'

/**
 * # 字段前缀Key
 */
const FIELD_PREFIX_KEY = 'FieldPrefix'

/**
 * # 标记属性别名前缀
 * @param prefix 类的属性别名前缀
 */
export function FieldPrefix(prefix: string) {
  return (target: any) => AirDecorator.setClassConfig(target, FIELD_PREFIX_KEY, prefix)
}

/**
 * # 获取属性别名前缀
 * @param target 目标类
 */
export function getFieldPrefix(target: any): string {
  return AirDecorator.getClassConfig(target, FIELD_PREFIX_KEY) || ''
}
