import type { IModelConfig } from './interface'
import type { DecoratorTarget } from './type'
import { DecoratorUtil } from './DecoratorUtil'

/**
 * ### 类名称 `Key`
 */
export const MODEL_CONFIG_KEY = 'Model'

/**
 * ### 为模型类标记配置项
 * @param config 配置项
 */
export function Model<M extends IModelConfig = IModelConfig>(config: M = {} as M) {
  return (target: DecoratorTarget) => DecoratorUtil.setClassConfig(target, MODEL_CONFIG_KEY, config)
}

/**
 * ### 获取模型类配置项
 * @param target 目标类
 */
export function getModelConfig<M extends IModelConfig = IModelConfig>(target: DecoratorTarget): M {
  return DecoratorUtil.getClassConfig(target, MODEL_CONFIG_KEY, {}, true) as M
}
