## 📖 枚举和字典

**AirPower** 提供了 `IEnum` `Enum`  类和接口：

### `IEnum`

`IEnum` 定义了标准接口的属性：

- `key` 字典的值
- `label` 字典的描述

### `Enum`

`Enum` 是一个枚举类，提供了一些枚举封装方法

#### 静态方法

- `create` 创建一个字典数组
- `createCustom` 创建一个自定义字典数组
- `getLabel` 获取枚举的描述
- `get` 查找枚举值

#### 声明枚举

```typescript
export class GenderEnum extends Enum {
  static MALE = new GenderEnum(1, '男')
  static FEMALE = new GenderEnum(2, '女')
}
```

### 配合装饰器使用

枚举和字典都支持标记到 `@Field` 装饰器的 `enums` 属性上。
