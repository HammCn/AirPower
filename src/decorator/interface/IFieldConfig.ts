import type { EnumConstructor } from '../../enum'
import type { ClassConstructor } from '../../transformer'
import type { IField } from './IField'

/**
 * # 字段配置
 *
 * @author Hamm.cn
 */
export interface IFieldConfig extends IField {
  /**
   * ### 配置字典
   */
  enums?: EnumConstructor

  /**
   * ### 是否忽略类上的前缀
   */
  ignorePrefix?: boolean

  /**
   * ### 转换别名
   */
  alias?: string

  /**
   * ### 是否是数组
   */
  array?: boolean

  /**
   * ### 强制类型转换的目标类
   */
  type?: ClassConstructor
}
