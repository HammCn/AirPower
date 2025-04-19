import type { DecoratorTarget } from '../type/type'
import { DecoratorUtil } from '../transformer'

/**
 * ### KEY
 */
const KEY = `${DecoratorUtil.DecoratorKeyPrefix}[Prefix]`

/**
 * ### 标记类转换的前缀
 * @param prefix 转换前缀
 */
export function Prefix(prefix: string) {
  return (target: DecoratorTarget) => DecoratorUtil.setClassConfig(target, KEY, prefix)
}

/**
 * ### 获取类转换的前缀
 * @param target 目标类
 */
export function getPrefix(target: DecoratorTarget): string {
  return DecoratorUtil.getClassConfig(target, KEY, '')
}
