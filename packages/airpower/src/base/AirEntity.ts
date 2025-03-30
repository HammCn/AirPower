import { AirConstant } from '../config'
import { Field } from '../decorator'
import { AirModel } from './AirModel'

/**
 * # 实体超类
 * @author Hamm.cn
 */
export class AirEntity extends AirModel {
  /**
   * ### 主键 `ID`
   */
  @Field({
    label: 'ID',
    type: Number,
  })
  id!: number

  /**
   * ### 实例化一个实体
   * @param id `可选` 主键 `ID`
   */
  constructor(id?: number) {
    super()
    if (id) {
      this.id = id
    }
  }

  /**
   * ### 复制一个只包含 `ID` 的实体
   * @returns 仅包含ID的实体
   */
  copyExposeId(): this {
    return this.copy().exposeId()
  }

  /**
   * ### 只暴露 `ID`
   */
  exposeId(): this {
    return this.expose(AirConstant.STRING_ID)
  }

  /**
   * ### 排除 `ID`
   */
  excludeId(): this {
    return this.exclude(AirConstant.STRING_ID)
  }
}
