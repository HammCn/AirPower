import type { ITransformerConstructor, Transformer } from '../transformer'
import type { DecoratorTarget } from '../type'
import { DecoratorUtil } from '../transformer'

/**
 * ### KEY
 */
const KEY = `${DecoratorUtil.DecoratorKeyPrefix}[Type]`
const KEY_ARRAY = `${DecoratorUtil.DecoratorKeyPrefix}[Array]`

/**
 * ### 为属性配置强制类型
 * @param type 强制转换的类型
 * @param array 是否固定数组
 */
export function Type<T extends Transformer>(type: ITransformerConstructor<T>, array = false) {
  return (target: DecoratorTarget, key: string) => {
    DecoratorUtil.setFieldConfig(target, key, KEY, type)
    if (array) {
      DecoratorUtil.setFieldConfig(target, key, KEY_ARRAY, array)
    }
  }
}

/**
 * ### 获取属性的强制类型
 * @returns 别名
 * @param target 目标类
 * @param key 属性名
 */
export function getType<T extends Transformer>(target: DecoratorTarget, key: string): ITransformerConstructor<T> | undefined {
  return DecoratorUtil.getFieldConfig(target, key, KEY) || undefined
}

/**
 * ### 获取属性是否强制数组
 * @returns 别名
 * @param target 目标类
 * @param key 属性名
 */
export function getArray(target: DecoratorTarget, key: string): boolean {
  return !!DecoratorUtil.getFieldConfig(target, key, KEY_ARRAY)
}
