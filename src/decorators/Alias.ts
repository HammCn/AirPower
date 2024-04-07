/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AirDecorator } from '../helpers'
import { getFieldPrefix } from './FieldPrefix'

/**
 * # 别名Key
 */
const ALIAS_KEY = 'Alias'

/**
 * # 为标记属性的转换别名
 * @param alias 属性的转换别名
 */
export function Alias(alias: string) {
  return (target: any, key: string) => AirDecorator.setFieldConfig(target, key, ALIAS_KEY, getFieldPrefix(target) + alias)
}

/**
 * # 获取对象的属性转换别名
 * @param target 目标对象
 * @param key 属性名
 */
export function getAlias(target: any, key: string): string {
  return AirDecorator.getFieldConfig(target, key, ALIAS_KEY) || ''
}
