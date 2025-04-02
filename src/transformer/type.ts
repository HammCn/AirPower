import type { AirAny } from '../type'

/**
 * ### 类包装
 * @author Hamm.cn
 */
export interface ClassConstructor<T = AirAny> {
  new(...args: AirAny[]): T
}
