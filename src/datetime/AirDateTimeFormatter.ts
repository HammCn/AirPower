/**
 * # 标准时间格式化
 *
 * @author Hamm.cn
 */
export enum AirDateTimeFormatter {
  /**
   * ### e.g. `2022-02-02 22:22:22`
   */
  FULL_DATE_TIME = 'YYYY-MM-DD HH:mm:ss',

  /**
   * ### e.g. `15061231312312`
   * 毫秒时间戳
   */
  TIMESTAMP = 'x',

  /**
   * ### e.g. `02-02 22:22`
   */
  SHORT_DATE_TIME = 'MM-DD HH:mm',

  /**
   * ### e.g. `2022-02-02`
   */
  FULL_DATE = 'YYYY-MM-DD',

  /**
   * ### e.g. `22:22:22`
   */
  FULL_TIME = 'HH:mm:ss',

  /**
   * ### e.g. `2022`
   */
  YEAR = 'YYYY',

  /**
   * ### e.g. `02`
   */
  MONTH = 'MM',

  /**
   * ### e.g. `02`
   */
  DAY = 'DD',

  /**
   * ### e.g. `22`
   */
  HOUR = 'HH',

  /**
   * ### e.g. `22`
   */
  MINUTE = 'mm',

  /**
   * ### e.g. `59`
   */
  SECOND = 'ss',
}
