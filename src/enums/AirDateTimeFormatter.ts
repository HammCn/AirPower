/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

/**
 * # 标准时间格式化
 * @author Hamm
 */
export enum AirDateTimeFormatter {
  /**
   * # e.g. ```2022-12-31 23:59:00```
   */
  YYYY_MM_DD_HH_mm_ss = 'YYYY-MM-DD HH:mm:ss',

  /**
   * # e.g. ```12-31 23:59```
   */
  MM_DD_HH_mm = 'MM-DD HH:mm',

  /**
   * # e.g. ```2022-12-31```
   */
  YYYY_MM_DD = 'YYYY-MM-DD',

  /**
   * # e.g. ```23:59:59```
   */
  HH_mm_ss = 'HH:mm:ss'
}
