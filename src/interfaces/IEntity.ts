import { AirModel } from '../models'

/**
 * # 标准实体接口
 * @author Hamm
 */
export interface IEntity extends AirModel {
  /**
   * # 主键ID
   */
  id: number
}
