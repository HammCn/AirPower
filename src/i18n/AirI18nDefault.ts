import { AirLanguage } from './AirLanguage'

/**
 * # 内置的一些 `i18n` 文案
 *
 * @author Hamm.cn
 */
export class AirI18nDefault {
  /**
   * ### 语言名称
   */
  language = AirLanguage.ChineseSimplified

  /** ### 文件过大 */
  FileTooLarge?: string

  /** ### 未知的文件大小 */
  FileUnknownSize?: string
}
