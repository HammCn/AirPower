## 📖 枚举和字典

**AirPower** 提供了 `IDictionary` `AirDictionary` `AirDictionaryArray` `AirEnum`  类和接口：

### `IDictionary`

`IDictionary` 定义了标准接口的属性：

- `key` 字典的值
- `label` 字典的描述
- `color` [可选] 字典的颜色配置，可使用 `AirColor` 枚举和字符串颜色
- `disabled` [可选] 字典是否禁用
- `children` [可选] 字典的子集数组

### `AirDictionary`

`AirDictionary` 是 `IDictionary` 的实现类，提供了一些常用方法：

- `constructor` 初始化构造函数
- `setKey` 设置字典的属性值
- `setLabel` 设置字典的描述
- `setDisabled` 设置字典是否被禁用
- `setChildren` 设置字典的子集数组

### `AirDictionaryArray`

`AirDictionaryArray` 继承来自 `Array` 类，提供了字典数组的一些操作方法：

#### 静态方法

- create 创建一个字典数组
- createCustom 创建一个自定义字典数组

#### 实例方法

- `getLabel` 获取字典的描述
- `getColor` 获取字典的颜色
- `get` 通过字典的值获取字典
- `findByKey` 通过字典的值查找字典，可能找不到

### `AirEnum`

`AirEnum` 是一个枚举类，提供了一些枚举封装方法

#### 静态方法

- `getColor` 获取枚举的颜色
- `getLabel` 获取枚举的描述
- `isDisabled` 获取枚举是否被禁用
- `get` 查找枚举值

#### 声明枚举

```typescript
export class UserGenderEnum extends AirEnum {
  static MALE = new UserGenderEnum(1, '男');
  static FEMALE = new UserGenderEnum(2, '女');
}
```

### 配合装饰器使用

枚举和字典都支持标记到 `@Field` 装饰器的 `dictionary` 属性上。
