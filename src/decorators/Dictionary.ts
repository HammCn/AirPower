/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AirDecorator } from '../helpers/AirDecorator'
import { IDictionary } from '../interfaces/IDictionary'
import { AirDictionaryArray } from '../models/AirDictionaryArray'

/**
 * # 字典配置Key
 */
const DICTIONARY_KEY = 'Dictionary'

/**
 * # 标记属性的枚举字典
 * @param dictionary 字典数组
 */
export function Dictionary(dictionary: AirDictionaryArray<IDictionary>): Function {
  return (target: any, key: string) => AirDecorator.setFieldConfig(target, key, DICTIONARY_KEY, dictionary)
}

/**
 * # 获取属性枚举字典
 * @param target 目标类
 * @param key 属性名
 */
export function getDictionary<T extends IDictionary>(target: any, key: string): AirDictionaryArray<T> | undefined {
  const config = AirDecorator.getFieldConfig(target, key, DICTIONARY_KEY)
  if (config) {
    return AirDictionaryArray.createCustom<T>(config)
  }
  return undefined
}
