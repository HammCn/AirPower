/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { IDictionary } from '../interfaces'
import { AirEnumKey } from '../types'
import { AirDictionaryArray } from './AirDictionaryArray'

/**
 * # 枚举基类
 * @author Hamm
 */
export class AirEnum<K extends AirEnumKey = number> implements IDictionary {
  /**
   * # 枚举的值
   */
  key!: K

  /**
   * # 枚举的描述
   */
  label!: string

  /**
   * # 是否被禁用
   * ---
   * ### 💡  如禁用, 下拉选项中将显示但无法选中
   */
  disabled?: boolean

  /**
   * # 判断Key是否相等
   * @param key Key
   */
  equalsKey(key: K): boolean {
    return this.key === key
  }

  /**
   * # 判断Key是否不相等
   * @param key Key
   */
  notEqualsKey(key: K): boolean {
    return this.key !== key
  }

  /**
   * # 实例化创建一个枚举项目
   * @param key 枚举值
   * @param label 枚举描述
   * @param disable (可选)是否禁用
   */
  constructor(key: K, label: string, disable?: boolean) {
    this.key = key
    this.label = label
    this.disabled = disable
  }

  /**
   * # 获取枚举的Label
   * @param key Key
   * @param defaultLabel 默认Label
   */
  static getLabel(key: AirEnumKey, defaultLabel = '-'): string {
    return this.get(key)?.label || defaultLabel
  }

  /**
   * # 获取枚举的Disabled
   * @param key Key
   */
  static isDisabled(key: AirEnumKey): boolean | undefined {
    return (this as any).get(key).disabled
  }

  /**
   * # 查找一个枚举选项
   * @param key Key
   */
  static get<E extends AirEnum<AirEnumKey>>(this: new (...args: any[]) => E, key: AirEnumKey): E | null {
    return (this as any).toArray().find((item: E) => item.key === key) || null
  }

  /**
   * # 将枚举转为数组
   * @returns 枚举数组
   */
  static toArray<K extends AirEnumKey, E extends AirEnum<K>>(this: new (...args: any[]) => E): E[] {
    return Object.values(this)
      .filter((item) => item instanceof this)
  }

  /**
   * # 将枚举转为字典
   * @returns 枚举字典
   */
  static toDictionary<D extends IDictionary>(this: new (...args: any[]) => D): AirDictionaryArray<D> {
    return AirDictionaryArray.createCustom<D>(Object.values(this)
      .filter((item) => item instanceof this))
  }
}
