import type { IEnum } from './IEnum'
import type { AirEnumClass, AirEnumKey } from './type'
import { AirConstant } from '../config'

/**
 * # 枚举基类
 *
 * @author Hamm.cn
 */
export class AirEnum<K extends AirEnumKey = number> implements IEnum<K> {
  /**
   * ### 枚举的值
   */
  key!: K

  /**
   * ### 枚举的描述
   */
  label!: string

  /**
   * ### 实例化创建一个枚举项目
   * @param key 枚举值
   * @param label 枚举描述
   */
  constructor(key?: K, label?: string) {
    if (key) {
      this.key = key
    }
    if (label) {
      this.label = label
    }
  }

  /**
   * ### 创建字典
   * @param list 字典数组
   */
  static create<K extends AirEnumKey = number>(list: IEnum<K>[]): AirEnum<K>[] {
    return this.createCustom<K>(list)
  }

  /**
   * ### 创建自定义字典
   * @param list 字典数组
   */
  static createCustom<K extends AirEnumKey>(list: IEnum<K>[]): Array<AirEnum<K>> {
    const items: AirEnum<K>[] = []
    list.forEach((json: IEnum<K>) => {
      const item: AirEnum<K> = Object.assign(new AirEnum<K>(), json)
      items.push(item)
    })
    return items
  }

  /**
   * ### 获取枚举的 `Label`
   * @param key `Key`
   * @param defaultLabel `可选` 默认的标签
   */
  static getLabel(key: AirEnumKey, defaultLabel = AirConstant.STRING_LINE): string {
    return this.get(key)?.label || defaultLabel
  }

  /**
   * ### 查找一个枚举选项
   * @param key `Key`
   */
  static get<K extends AirEnumKey = number, E extends AirEnum<K> = AirEnum<K>>(this: AirEnumClass<K, E>, key: K): E | null {
    return this.toArray().find((item: E) => item.key === key) || null
  }

  /**
   * ### 将枚举转为数组
   * @returns 枚举数组
   */
  static toArray<K extends AirEnumKey = number, E extends AirEnum<K> = AirEnum<K>>(this: AirEnumClass<K, E>): E[] {
    return Object.values(this).filter((item): item is E => item instanceof this)
  }

  /**
   * ### 判断 `Key` 是否相等
   * @param key `Key`
   */
  equalsKey(key: K): boolean {
    return this.key === key
  }

  /**
   * ### 判断 `Key` 是否不相等
   * @param key `Key`
   */
  notEqualsKey(key: K): boolean {
    return this.key !== key
  }
}
