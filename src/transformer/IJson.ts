/**
 * # 标准的 `JSON` 数据
 *
 * @author Hamm.cn
 */
export interface IJson<V = any> {
  /**
   * ### `JSON` 的键
   */
  [x: string]: V
}
