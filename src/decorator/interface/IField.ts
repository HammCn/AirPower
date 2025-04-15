/**
 * # 属性根接口
 *
 * @author Hamm.cn
 */
export interface IField {
  /**
   * ### 属性key
   * 无需传入, 将自动从被标记类的属性上读取
   * @deprecated
   */
  key?: string

  /**
   * ### 属性的标签
   */
  label?: string
}
