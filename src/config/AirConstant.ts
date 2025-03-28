/**
 * # `AirPower` 内置常量
 *
 * @author Hamm.cn
 */
export class AirConstant {
  /**
   * ### `id`
   */
  static readonly STRING_ID = "id";

  /**
   * ### `http://`
   */
  static readonly PREFIX_HTTP = "http://";

  /**
   * ### `https://`
   */
  static readonly PREFIX_HTTPS = "https://";

  /**
   * ### 空字符串
   */
  static readonly STRING_EMPTY = "";

  /**
   * ### 星号 `*`
   */
  static readonly STRING_ASTERISK = "*";

  /**
   * ### `AirModel`
   */
  static readonly AIR_MODEL = "AirModel";

  /**
   * ### 默认进制
   */
  static readonly DEFAULT_RADIX = 10;

  /**
   * ### `.` 点
   */
  static readonly STRING_DOT = ".";

  /**
   * ### `children`
   */
  static readonly STRING_CHILDREN = "children";

  /**
   * ### `'0'`
   */
  static readonly STRING_ZERO = "0";

  /**
   * ### 横线 `-`
   */
  static readonly STRING_LINE = "-";

  /**
   * ### 时间进制
   */
  static readonly SECOND_PER_MINUTE = 60;

  /**
   * ### 每小时的秒数
   */
  static readonly SECOND_PER_HOUR = AirConstant.SECOND_PER_MINUTE ** 2;

  /**
   * ### 每秒的毫秒数
   */
  static readonly MILLISECONDS_PER_SECOND = 1000;

  /**
   * ### 文件大小进制
   * 😄
   */
  static readonly RADIX_FILE_SIZE = 1024;

  /**
   * ### 每天小时
   */
  static readonly HOUR_PER_DAY = 24;

  /**
   * ### 每月天数
   */
  static readonly DAY_PER_MONTH = 30;

  /**
   * ### 每年月份
   */
  static readonly MONTH_PER_YEAR = 12;

  /**
   * ### 每年天数
   */
  static readonly DAY_PER_YEAR = 365;

  /**
   * ### 每天秒数
   */
  static readonly SECOND_PER_DAY = this.SECOND_PER_HOUR * this.HOUR_PER_DAY;

  /**
   * ### 每周天数
   */
  static readonly DAY_PER_WEEK = 7;

  /**
   * ### 每年平均周
   */
  static readonly WEEK_PER_YEAR = 52;

  /**
   * ### 每月平均周
   */
  static readonly WEEK_PER_MONTH = 4;

  /**
   * ### 每天秒数
   */
  static readonly SECONDS_PER_DAY = this.HOUR_PER_DAY * this.SECOND_PER_HOUR;
}
