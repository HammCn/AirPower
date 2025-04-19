import type { DecoratorTarget } from '../type/type'
import { DecoratorUtil } from '../transformer'

/**
 * ### KEY
 */
const KEY = `${DecoratorUtil.DecoratorKeyPrefix}[IgnorePrefix]`

/**
 * ### 属性忽略前缀
 */
export function IgnorePrefix() {
  return (target: DecoratorTarget, key: string) => DecoratorUtil.setFieldConfig(target, key, KEY, true)
}

/**
 * ### 获取属性是否忽略前缀
 * @returns 布尔
 * @param target 目标类
 * @param key 属性名
 */
export function getIgnorePrefix(target: DecoratorTarget, key: string): boolean {
  return !!DecoratorUtil.getFieldConfig(target, key, KEY)
}
