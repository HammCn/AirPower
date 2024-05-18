/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AirDecorator } from '../helpers'

/**
 * # 类名称Key
 */
const CLASS_NAME_KEY = 'ClassName'

/**
 * # 模型名称
 * @param name 模型可读名称
 */
export function Model(name: string): Function {
  return (target: any) => AirDecorator.setClassConfig(target, CLASS_NAME_KEY, name)
}

/**
 * # 获取模型名称
 * @param target 目标类
 */
export function getModelName(target: any): string {
  return AirDecorator.getClassConfig(target, CLASS_NAME_KEY)
}

/**
 * @deprecated
 * @see Model()
 */
export function ClassName(className: string): Function {
  return Model(className)
}

/**
 * @deprecated
 * @see getModelName()
 */
export function getClassName(target: any): string {
  return getModelName(target)
}
