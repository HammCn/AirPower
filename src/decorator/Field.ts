import type { AirPower } from '../base'
import type { IJson } from '../transformer'
import type { IFieldConfig } from './interface'
import type { DecoratorTarget } from './type'
import { DecoratorUtil } from './DecoratorUtil'

/**
 * ### 属性参数配置
 */
export const FIELD_CONFIG_KEY = 'Field'

/**
 * ### 为属性标记配置
 * @param config 配置项
 */
export function Field(config: IFieldConfig = {}) {
  return (target: DecoratorTarget, key: string) => DecoratorUtil.setFieldConfig(target, key, FIELD_CONFIG_KEY, config)
}

/**
 * ### 获取属性的配置
 * @returns 配置对象
 * @param target 目标类
 * @param key 属性名
 */
export function getFieldConfig(target: DecoratorTarget, key: string): IFieldConfig {
  return (DecoratorUtil.getFieldConfig(target, key, FIELD_CONFIG_KEY, true) || {}) as IFieldConfig
}

/**
 * ### 自定义到 `JSON` 转换 `Key`
 */
const TO_JSON_KEY = 'ToJson'

/**
 * ### 自定义转换到 `JSON` 的方法
 * @param func 方法
 */

export function ToJson<M extends AirPower>(func: (model: M) => unknown) {
  return (target: DecoratorTarget, key: string) => DecoratorUtil.setFieldConfig(target, key, TO_JSON_KEY, func)
}

/**
 * ### 获取自定义转换到 `JSON` 的方法
 * @param target 目标类
 * @param key 属性名
 */

export function getToJson<M extends AirPower>(target: DecoratorTarget, key: string): (model: M) => unknown {
  return DecoratorUtil.getFieldConfig(target, key, TO_JSON_KEY)
}

/**
 * ### 自定义到模型转换 `Key`
 */
const TO_MODEL_KEY = 'ToModel'

/**
 * ### 自定义转换到 `Model` 的方法
 * @param func 方法
 */

export function ToModel(func: (json: IJson) => unknown) {
  return (target: DecoratorTarget, key: string) => DecoratorUtil.setFieldConfig(target, key, TO_MODEL_KEY, func)
}

/**
 * ### 获取自定义转换到 `Model` 的方法
 * @param target 目标类
 * @param key 属性名
 */

export function getToModel(target: DecoratorTarget, key: string): (json: IJson) => unknown {
  return DecoratorUtil.getFieldConfig(target, key, TO_MODEL_KEY)
}
