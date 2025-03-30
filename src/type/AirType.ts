import type { AirColor } from '../dictionary'

/**
 * ### 😡 慎用 Any
 * @deprecated
 */
export type AirAny = any

/**
 * ### 枚举 `Key` 的类型
 */
export type AirEnumKey = string | number | boolean

/**
 * ### 颜色值
 */
export type AirColorString = AirColor | string

/**
 * ### 装饰器目标类
 */
export type AirDecoratorTarget = AirAny

/**
 * ### 装饰器存储的数据类型
 */
export type AirDecoratorData = AirAny

/**
 * ### 类包装
 * @author Hamm.cn
 */
export interface ClassConstructor<T = AirAny> {
  new(...args: AirAny[]): T
}
