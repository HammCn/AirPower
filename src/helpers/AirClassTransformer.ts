import { IJson, ITree } from '../interfaces'
import { AirModel } from '../models'
import { AirClassConstructor } from '../types'

/**
 * # 转换类型助手
 * @author Hamm
 */
export class AirClassTransformer {
  /**
   * # 复制一个新的JSON对象
   * @param json JSON
   */
  static copyJson<T extends IJson>(json: T): T {
    if (!json) {
      return json
    }
    return JSON.parse(JSON.stringify(json))
  }

  /**
   * # 树结构的数组转为普通数组
   * @param treeList 树结构的数组
   */
  static treeList2List<E extends ITree>(treeList: E[]): E[] {
    let list: E[] = []
    treeList.forEach((item) => {
      list.push(item)
      if (item.children && item.children.length > 0) {
        list = list.concat(this.treeList2List(item.children))
      }
    })
    return list
  }

  /**
   * # 转换JSON数据到指定类的对象
   * @param json JSON
   * @param TargetClass 目标类
   */
  // eslint-disable-next-line class-methods-use-this
  static parse<T extends AirModel>(json: IJson, TargetClass: AirClassConstructor<T>): T {
    return AirModel.parse(new TargetClass(), json)
  }

  /**
   * # 转换JSON数组数据到指定类的对象数组
   * @param jsonArray JSON数组
   * @param TargetClass 目标类
   */
  static parseArray<T extends AirModel>(jsonArray: IJson[], TargetClass: AirClassConstructor<T>): T[] {
    return jsonArray.map((json) => this.parse(json, TargetClass))
  }

  /**
   * # 复制一个实例
   * @param from 来源类对象实例
   * @param TargetClass 目标类
   */
  static copy<F extends AirModel, M extends AirModel>(from: F, TargetClass: AirClassConstructor<M>): M {
    return this.parse(from.toJson(), TargetClass)
  }

  /**
   * # 初始化一个指定类型的实例
   *
   * @param TargetClass 目标类
   */
  static newInstance<T extends AirModel>(TargetClass: AirClassConstructor<T>): T {
    return new TargetClass()
  }
}
