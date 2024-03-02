/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AirDecorator } from '../helpers/AirDecorator'

/**
 * # 默认值Key
 */
const DEFAULT_KEY = 'Default'

/**
 * # 标记JSON转换到模型时属性的默认值
 * ---
 * ### 💡 如标记了 ```@Type(?, true)``` 则默认值为 ```[]```, 但仍可以通过此装饰器覆盖
 *
 * @param value 默认值
 */
export function Default(value: any): Function {
  return (target: any, key: string) => AirDecorator.setFieldConfig(target, key, DEFAULT_KEY, value)
}

/**
 * # 获取类的属性默认值
 * @param target 目标类
 * @param key 属性名
 */
export function getDefault(target: any, key: string): any {
  return AirDecorator.getFieldConfig(target, key, DEFAULT_KEY)
}
