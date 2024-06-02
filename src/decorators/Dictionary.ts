/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AirClassConstructor, AirEnumKey } from '../types'
import { AirEnum, AirDictionaryArray } from '../models'
import { AirDecorator } from '../helpers'
import { IDictionary } from '../interfaces'

/**
 * # 字典配置Key
 */
const DICTIONARY_KEY = 'Dictionary'

/**
 * # 标记属性的枚举字典
 * @param dictionary 字典数组
 * ---
 * ### 💡 如直接传入枚举类，该属性的类型则必须为对应枚举类`Key`的类型
 */
export function Dictionary<K extends AirEnumKey, E extends AirEnum<K>>(dictionary: AirDictionaryArray | AirClassConstructor<E>): Function {
  return (target: any, key: string) => {
    if (!(dictionary instanceof AirDictionaryArray)) {
      // 如果不是字典 转为字典
      dictionary = AirDictionaryArray.create((dictionary as any).toDictionary())
    }
    AirDecorator.setFieldConfig(target, key, DICTIONARY_KEY, dictionary)
  }
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
