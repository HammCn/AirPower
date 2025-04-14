import type { AirEnum } from './AirEnum'

/**
 * ### 枚举 `Key` 的类型
 */
export type AirEnumKey = string | number | boolean

/**
 * ### 枚举类
 */
export type AirEnumClass<K extends AirEnumKey = number, E extends AirEnum<K> = AirEnum<K>> = {
  new(key?: K, label?: string): E
} & typeof AirEnum<K>
