# 📖 枚举和字典

**AirPower** 提供了 `IEnum` `Enum`  类和接口：

## `IEnum`

`IEnum` 定义了标准接口的属性：

- `key` 字典的值
- `label` [可选]字典的描述

## `Enum`

`Enum` 是一个枚举类，提供了一些枚举封装方法

### 静态方法

- `key` 创建一个只有 Key 的字典数组
- `label` 创建一个字符串类型 label和key 一样的字典数组
- `get` 查找枚举值
- `getLabel` 获取枚举的标签
- `toArray` 将枚举转为数组

### 属性方法

- `equalsKey` 判断 `Key` 是否相等
- `notEqualsKey` 判断 `Label` 是否不相等

## 声明枚举

```typescript
export class GenderEnum extends Enum {
  static MALE = new GenderEnum(1, '男')
  static FEMALE = new GenderEnum(2, '女')
}

export class GenderEnum extends Enum<string> {
  static MALE = GenderEnum.label('男')
  static FEMALE = GenderEnum.label('女')
}

export class GenderEnum extends Enum {
  static MALE = GenderEnum.key(1)
  static FEMALE = GenderEnum.key(2)
}
```

## 配合装饰器使用

枚举和字典都支持标记到 `@Field` 装饰器的 `enums` 属性上。
