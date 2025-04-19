import type { Transformer } from './Transformer'

/**
 * # 类构造接口
 *
 * @author Hamm.cn
 */
export interface ITransformerConstructor<T extends Transformer = Transformer> {
  new(): T
}
