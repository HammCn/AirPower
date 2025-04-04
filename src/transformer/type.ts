import type { AirAny } from '../type'

/**
 * ### 类包装
 */
export interface ClassConstructor<T = AirAny> {
  new(...args: AirAny[]): T
}
