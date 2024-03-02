/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AirDecorator } from '../helpers/AirDecorator'

/**
 * # 自定义到JSON转换Key
 */
const TO_JSON_KEY = 'ToJson'

/**
 * # 自定义转换到JSON的方法
 * @param func 方法
 */
export function ToJson(func: Function): Function {
  return (target: any, key: string) => AirDecorator.setFieldConfig(target, key, TO_JSON_KEY, func)
}

/**
 * # 获取自定义转换到JSON的方法
 * @param target 目标类
 * @param key 属性名
 */
export function getToJson(target: any, key: string): Function | undefined {
  return AirDecorator.getFieldConfig(target, key, TO_JSON_KEY)
}
