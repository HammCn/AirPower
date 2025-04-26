import type { ITransformerConstructor, Transformer } from '../transformer'
import type { TransformerField } from '../type'
import { DecoratorUtil } from '../transformer'

/**
 * ### KEY
 */
const KEY = '[Alias]'

/**
 * ### 为属性配置别名
 * @param alias 别名
 */
export function Alias<
  T extends Transformer,
>(alias: string) {
  return (instance: T, field: keyof T) => {
    DecoratorUtil.setFieldConfig(instance, field, KEY, alias)
  }
}

/**
 * ### 获取属性的别名
 * @returns 别名
 * @param Class 目标类
 * @param field 属性名
 */
export function getAlias<T extends Transformer>(
  Class: ITransformerConstructor<T>,
  field: TransformerField<T>,
): string {
  return (DecoratorUtil.getFieldConfig(Class, field, KEY) || '').toString()
}
