import { I18n } from '../i18n'

/**
 * # 文件工具类
 *
 * @author Hamm.cn
 */
export class FileUtil {
  /**
   * ### 文件大小进制
   */
  static readonly RADIX_FILE_SIZE = 1024

  /**
   * ### 静态文件地址
   */
  static staticUrl = ''

  /**
   * ### `http://`
   */
  static readonly PREFIX_HTTP = 'http://'

  /**
   * ### `https://`
   */
  static readonly PREFIX_HTTPS = 'https://'

  /**
   * ### 文件单位列表
   */
  static readonly FILE_UNIT_LIST = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  /**
   * ### 字节数转可读文件大小
   * @param size 字节数
   * @param fractionDigits 小数位数
   */
  static getFileSizeFriendly(size: number, fractionDigits = 2): string {
    if (size <= 0) {
      return I18n.get().FileUnknownSize
    }
    for (let i = 0; i < this.FILE_UNIT_LIST.length; i += 1) {
      if (size < this.RADIX_FILE_SIZE ** (i + 1)) {
        return `${(size / this.RADIX_FILE_SIZE ** i).toFixed(fractionDigits)}${this.FILE_UNIT_LIST[i]}`
      }
    }
    return I18n.get().FileTooLarge
  }

  /**
   * ### 获取静态文件的绝对地址
   * @param url 地址
   */
  static getStaticFileUrl(url: string): string {
    if (!url) {
      throw new Error('URL is required!')
    }
    if (url.includes(this.PREFIX_HTTP) || url.includes(this.PREFIX_HTTPS)) {
      return url
    }
    return FileUtil.staticUrl + url
  }
}
