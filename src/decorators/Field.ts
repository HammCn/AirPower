/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AirDecorator } from '../helpers'

/**
 * # 属性名Key
 */
const FIELD_NAME_KEY = 'FieldName'

/**
 * # 为属性标记可读名称
 * @param name 属性的可读名称
 */
export function Field(name: string): Function {
  return (target: any, key: string) => AirDecorator.setFieldConfig(target, key, FIELD_NAME_KEY, name)
}

/**
 * # 获取属性可读名称
 * @param target 目标对象
 * @param key 属性名
 */
export function getFieldName(target: any, key: string): string {
  return AirDecorator.getFieldConfig(target, key, FIELD_NAME_KEY) || key
}

/**
 * @deprecated
 * @see Field
 */
export function FieldName(fieldName: string): Function {
  return Field(fieldName)
}
