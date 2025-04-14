import type { Enum } from './Enum'

/**
 * ### 枚举 `Key` 的类型
 */
export type EnumKey = string | number | boolean

/**
 * ### 枚举类
 */
export type EnumConstructor<K extends EnumKey = number, E extends Enum<K> = Enum<K>> = {
  new(key: K, label?: string): E
} & typeof Enum<K>
