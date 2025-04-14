import type { AirEnum } from './AirEnum'

/**
 * ### 枚举 `Key` 的类型
 */
export type AirEnumKey = string | number | boolean

/**
 * ### 枚举类
 */
export type AirEnumClass<E extends AirEnum<K>, K extends AirEnumKey = number> = {
  new(key?: K, label?: string): E
} & typeof AirEnum<K>
