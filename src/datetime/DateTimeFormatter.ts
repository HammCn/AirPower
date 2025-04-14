import { Enum } from '../enum'
import { DateTimeUtil } from './DateTimeUtil'

/**
 * # 标准时间格式化
 *
 * @author Hamm.cn
 */
export class DateTimeFormatter extends Enum<string> {
  /**
   * ### e.g. `2022-02-02 22:22:22`
   */
  static readonly FULL_DATE_TIME = DateTimeFormatter.key('YYYY-MM-DD HH:mm:ss')

  /**
   * ### e.g. `15061231312312`
   * 毫秒时间戳
   */
  static readonly TIMESTAMP = DateTimeFormatter.key('x')

  /**
   * ### e.g. `02-02 22:22`
   */
  static readonly SHORT_DATE_TIME = DateTimeFormatter.key('MM-DD HH:mm')

  /**
   * ### e.g. `2022-02-02`
   */
  static readonly FULL_DATE = DateTimeFormatter.key('YYYY-MM-DD')

  /**
   * ### e.g. `22:22:22`
   */
  static readonly FULL_TIME = DateTimeFormatter.key('HH:mm:ss')

  /**
   * ### e.g. `2022`
   */
  static readonly YEAR = DateTimeFormatter.key('YYYY')

  /**
   * ### e.g. `02`
   */
  static readonly MONTH = DateTimeFormatter.key('MM')

  /**
   * ### e.g. `02`
   */
  static readonly DAY = DateTimeFormatter.key('DD')

  /**
   * ### e.g. `22`
   */
  static readonly HOUR = DateTimeFormatter.key('HH')

  /**
   * ### e.g. `22`
   */
  static readonly MINUTE = DateTimeFormatter.key('mm')

  /**
   * ### e.g. `59`
   */
  static readonly SECOND = DateTimeFormatter.key('ss')

  /**
   * ### 使用这个模板格式化毫秒时间戳
   * @param milliSecond 毫秒时间戳
   * @returns 格式化后的时间字符串
   */
  formatMilliSecond(milliSecond: number): string {
    return DateTimeUtil.formatFromMilliSecond(milliSecond, this.key)
  }

  /**
   * ### 使用这个模板格式化秒时间戳
   * @param second 秒时间戳
   * @returns 格式化后的时间字符串
   */
  formatSecond(second: number): string {
    return DateTimeUtil.formatFromSecond(second, this.key)
  }

  /**
   * ### 使用这个模板格式化日期
   * @param date 日期
   * @returns 格式化后的时间字符串
   */
  formatDate(date: Date): string {
    return DateTimeUtil.formatFromDate(date, this.key)
  }

  /**
   * ### 使用这个模板格式化当前时间
   * @returns 格式化后的时间字符串
   */
  format(): string {
    return this.formatDate(new Date())
  }
}
