import { AirLanguage } from "./AirLanguage";

/**
 * # 内置的一些 `i18n` 文案
 * @author Hamm.cn
 */
export class AirI18nDefault {
  /**
   * ### 缓存 `Key`
   */
  protected static readonly languageCacheKey = "air-language";

  /**
   * ### 语言名称
   */
  language = AirLanguage.ChineseSimplified;

  /** ### 序号 */
  ID?: string;

  /** ### 文件过大 */
  FileTooLarge?: string;

  /** ### 未知的文件大小 */
  FileUnknownSize?: string;
}
