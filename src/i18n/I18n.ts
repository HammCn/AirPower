import type { I18nClassConstructor } from './type'
import { I18nDefault } from './I18nDefault'
import { Language } from './Language'

/**
 * # 语言国际化
 *
 * - #### 声明语言包实现类
 *
 * 实现一个继承 `I18n` 的类，加入属性作为语言包的 `Key`, 且可作为默认语言：
 *
 * ```ts
 * export class Strings extends I18n {
 *   Hello_World = '你好，世界！'
 * }
 * ```
 * - #### 声明一种新的语言包
 *
 * ```ts
 * const English: Strings = {
 *   language: Language.English,
 *   Hello_World = 'Hello World!'
 * }
 * ```
 *
 * - #### 添加语言包
 *
 * ```ts
 * Strings.addLanguage(English)
 * ```
 *
 * - #### 设置当前语言
 *
 * ```ts
 * I18n.setCurrentLanguage(Language.ChineseSimplified)
 * ```
 *
 * - #### 使用多语言
 *
 * ```ts
 * console.log(Strings.get().Hello_World)
 * ```
 *
 * @author Hamm.cn
 */
export class I18n extends I18nDefault {
  /**
   * ### 当前使用的语言
   */
  private static currentLanguage = Language.ChineseSimplified

  /**
   * ### 当前使用的语言包
   */

  private static currentLanguagePackage?: I18n

  /**
   * ### 语言列表
   */
  private static languages: Array<I18n> = []

  /**
   * ### 获取当前使用的语言
   * @returns 当前使用的语言
   */
  static getCurrentLanguage(): Language {
    return this.currentLanguage
  }

  /**
   * ### 获取支持的语言列表
   * @returns 语言列表
   */
  static getLanguages() {
    return this.languages
  }

  /**
   * ### 获取翻译后的字符串
   * @returns 翻译后的字符串
   */
  static get<T extends I18n>(
    this: I18nClassConstructor<T>,
  ): T {
    this.initDefaultLanguage()
    return (this.currentLanguagePackage || new I18n()) as T
  }

  /**
   * ### 添加国际化语言
   * @param languages 语言包列表
   */
  static addLanguage<T extends I18n>(this: I18nClassConstructor<T>, ...languages: T[]): void {
    if (languages.length === 0) {
      throw new Error('languages is empty')
    }
    // 添加语言
    this.initDefaultLanguage()
    languages.forEach((item) => {
      I18n.languages.push(item)
    })
    // 初始化语言包
    I18n.currentLanguagePackage = I18n.languages.find(item => item.language === I18n.currentLanguage) || I18n.languages[0]
  }

  /**
   * ### 设置当前使用的语言
   * @param language 语言
   */
  static setCurrentLanguage(language: Language): void {
    this.currentLanguage = language
    this.currentLanguagePackage = this.languages.find(item => item.language === this.currentLanguage) || this.languages[0]
  }

  /**
   * ### 初始化默认语言
   */
  private static initDefaultLanguage<T extends I18n>(this: I18nClassConstructor<T>) {
    if (this.languages.length === 0) {
      this.languages.push(JSON.parse(JSON.stringify(new this())))
      this.setCurrentLanguage(this.languages[0].language)
    }
  }
}
