/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AirDecorator } from '../helpers'

/**
 * # 类名称Key
 */
const CLASS_NAME_KEY = 'ClassName'

/**
 * # 为类标记可读名称
 * @param className 类的可读名称
 */
export function ClassName(className: string): Function {
  return (target: any) => AirDecorator.setClassConfig(target, CLASS_NAME_KEY, className)
}

/**
 * # 获取类的可读名称
 * @param target 目标类
 */
export function getClassName(target: any): string {
  return AirDecorator.getClassConfig(target, CLASS_NAME_KEY)
}
