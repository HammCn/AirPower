import type { IJson, ITransformerConstructor, Transformer } from '../transformer'
import type { DecoratorTarget, TransformerField } from '../type'
import { DecoratorUtil } from '../transformer'

const KEY = `${DecoratorUtil.DecoratorKeyPrefix}[ToClass]`

/**
 * ### 自定义转换到 `Class` 的方法
 * @param func 方法
 */

export function ToClass(func: (json: IJson) => unknown) {
  return (target: DecoratorTarget, key: string) => DecoratorUtil.setFieldConfig(target, key, KEY, func)
}

/**
 * ### 获取自定义转换到 `Class` 的方法
 * @param target 目标类
 * @param key 属性名
 */

export function getToClass<T extends Transformer>(
  target: ITransformerConstructor<T> | T,
  key: TransformerField<T>,
): (json: IJson) => unknown {
  return DecoratorUtil.getFieldConfig(target, key.toString(), KEY)
}
