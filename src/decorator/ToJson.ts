import type { Transformer } from '../transformer'
import type { DecoratorTarget } from '../type/type'
import { DecoratorUtil } from '../transformer'

const KEY = `${DecoratorUtil.DecoratorKeyPrefix}[ToJson]`

/**
 * ### 自定义转换到 `JSON` 的方法
 * @param func 方法
 */

export function ToJson<M extends Transformer>(func: (instance: M) => unknown) {
  return (target: DecoratorTarget, key: string) => DecoratorUtil.setFieldConfig(target, key, KEY, func)
}

/**
 * ### 获取自定义转换到 `JSON` 的方法
 * @param target 目标类
 * @param key 属性名
 */

export function getToJson<M extends Transformer>(target: DecoratorTarget, key: string): (instance: M) => unknown {
  return DecoratorUtil.getFieldConfig(target, key, KEY)
}
