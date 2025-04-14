import { Enum } from '../enum'
import { DesensitizeUtil } from './DesensitizeUtil'

/**
 * # 脱敏类型
 *
 * @author Hamm.cn
 */
export class DesensitizeType extends Enum<string> {
  /**
   * ### 座机号码
   */
  static TELEPHONE = new DesensitizeType('座机号码', 3, 4)

  /**
   * ### 手机号码
   */
  static MOBILE = new DesensitizeType('手机号码', 3, 4)

  /**
   * ### 身份证号
   */
  static ID_CARD = new DesensitizeType('身份证号', 6, 4)

  /**
   * ### 银行卡号
   */
  static BANK_CARD = new DesensitizeType('银行卡号', 4, 4)

  /**
   * ### 车牌号
   */
  static CAR_NUMBER = new DesensitizeType('车牌号', 2, 1)

  /**
   * ### 邮箱
   */
  static EMAIL = new DesensitizeType('邮箱', 2, 2)

  /**
   * ### 中文姓名
   */
  static CHINESE_NAME = new DesensitizeType('中文名', 1, 1)

  /**
   * ### 地址
   */
  static ADDRESS = new DesensitizeType('地址', 3, 0)

  /**
   * ### IPv4地址
   */
  static IP_V4 = new DesensitizeType('IPv4地址', 0, 0)

  /**
   * ### 自定义
   */
  static CUSTOM = new DesensitizeType('自定义', 0, 0)

  /**
   * ### 脱敏头部保留
   */
  head!: number

  /**
   * ### 脱敏尾部保留
   */
  tail!: number

  /**
   * ### 创建一个脱敏类型
   * @param label 脱敏类型
   * @param head `可选` 头部保留
   * @param tail `可选` 尾部保留
   */
  constructor(label: string, head: number, tail: number) {
    super(label, label)
    this.head = head
    this.tail = tail
  }

  /**
   * ### 使用这个方式脱敏
   * @param str 要脱敏的字符串
   * @param symbol 脱敏符号
   * @return 脱敏后的字符串
   */
  desensitize(str: string, symbol = DesensitizeUtil.DEFAULT_MASK): string {
    return DesensitizeUtil.desensitize(str, this, this.head, this.tail, symbol)
  }
}
