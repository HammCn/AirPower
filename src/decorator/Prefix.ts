import type { ITransformerConstructor, Transformer } from '../transformer'
import type { DecoratorTarget } from '../type'
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
export function getPrefix<T extends Transformer>(target: ITransformerConstructor<T> | T): string {
  return DecoratorUtil.getClassConfig(target, KEY, '')
}
