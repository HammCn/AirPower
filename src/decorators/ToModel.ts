/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AirDecorator } from '../helpers/AirDecorator'

/**
 * # 自定义到模型转换Key
 */
const TO_MODEL_KEY = 'ToModel'

/**
 * # 自定义转换到Model的方法
 * @param func 方法
 */
export function ToModel(func: Function): Function {
  return (target: any, key: string) => AirDecorator.setFieldConfig(target, key, TO_MODEL_KEY, func)
}

/**
 * # 获取自定义转换到Model的方法
 * @param target 目标类
 * @param key 属性名
 */
export function getToModel(target: any, key: string): Function | undefined {
  return AirDecorator.getFieldConfig(target, key, TO_MODEL_KEY)
}
