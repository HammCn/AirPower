import type { DecoratorTarget } from '../type'
import { DecoratorUtil } from '../transformer'

/**
 * ### KEY
 */
const KEY = `${DecoratorUtil.DecoratorKeyPrefix}[Alias]`

/**
 * ### 为属性配置别名
 * @param alias 别名
 */
export function Alias(alias: string) {
  return (target: DecoratorTarget, key: string) => DecoratorUtil.setFieldConfig(target, key, KEY, alias)
}

/**
 * ### 获取属性的别名
 * @returns 别名
 * @param target 目标类
 * @param key 属性名
 */
export function getAlias(target: DecoratorTarget, key: string): string {
  return (DecoratorUtil.getFieldConfig(target, key, KEY) || '').toString()
}
