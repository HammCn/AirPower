/**
 * ### 类包装
 */
export interface ClassConstructor<T = unknown> {
  new(...args: unknown[]): T
}
