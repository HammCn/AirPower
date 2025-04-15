import type { IEnum } from './IEnum'
import type { EnumConstructor, EnumKey } from './type'

/**
 * # 枚举基类
 *
 * @author Hamm.cn
 */
export class Enum<K extends EnumKey = number> implements IEnum<K> {
  /**
   * ### 枚举的值
   */
  key!: K

  /**
   * ### 枚举的描述
   */
  label?: string

  /**
   * ### 实例化创建一个枚举项目
   * @param key 枚举值
   * @param label 枚举描述
   */
  constructor(key: K, label?: string) {
    this.key = key
    if (label) {
      this.label = label
    }
  }

  /**
   * ### 创建一个只包含 `key` 的枚举
   * @param key `Key`
   */
  static key<K extends EnumKey = number, E extends Enum<K> = Enum<K>>(this: EnumConstructor<K, E>, key: K): E {
    return new this(key)
  }

  /**
   * ### 创建一个 `key` 和 `label` 相同的字符串枚举
   * @param label 标签
   */
  static label<E extends Enum<string> = Enum<string>>(this: EnumConstructor<string, E>, label: string): E {
    return new this(label, label)
  }

  /**
   * ### 查找一个枚举选项
   * @param key `Key`
   */
  static get<K extends EnumKey = number, E extends Enum<K> = Enum<K>>(this: EnumConstructor<K, E>, key: K): E | null {
    return this.toArray().find((item: E) => item.key === key) || null
  }

  /**
   * ### 获取一个枚举的标签
   * @param key `Key`
   * @param defaultLabel 默认标签
   */
  static getLabel<K extends EnumKey = number, E extends Enum<K> = Enum<K>>(this: EnumConstructor<K, E>, key: K, defaultLabel = '-'): string {
    const item = this.get(key)
    return item?.label || defaultLabel
  }

  /**
   * ### 将枚举转为数组
   * @returns 枚举数组
   */
  static toArray<K extends EnumKey = number, E extends Enum<K> = Enum<K>>(this: EnumConstructor<K, E>): E[] {
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
