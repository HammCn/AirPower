import { AirModel } from '../models/AirModel'

/**
 * # 标准实体接口
 * @author Hamm
 */
export interface IEntity extends AirModel{
  /**
   * # 主键ID
   */
  id: number
}
