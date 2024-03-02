/**
 * # 标准字典
 * @author Hamm
 */
export interface IDictionary {
  /**
   * # 字典的值
   */
  key: number | string | boolean,

  /**
   * # 字典的显示标题
   */
  label: string

  /**
   * # 是否被禁用
   */
  disabled?: boolean
}
