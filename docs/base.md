## 📖 基类

**AirPower** 提供了 `AirModel` `AirEntity` 等基类，其中：

### `AirModel`

`AirModel` 是所有参与数据转换类的基类，它提供了一些基础的属性和方法，如：

#### 静态方法

- `fromJson` 将 json 转换为对应类型的对象
- `fromJsonArray` 将 json 数组转换为对应类型的对象数组
- `parse` 将 json 字符串转换为对应类型的对象
- `getModelConfig` 获取类标记的配置
- `getModelName` 获取类标记的名称
- `getFieldName` 获取类属性标记的名称
- `getFieldConfig` 获取类属性标记的配置

#### 实例方法

- `copy` 复制当前对象
- `expose` 暴露指定的一些属性
- `exclude` 排除指定的一些属性
- `recoverBy` 使用 **JSON** 对象进行相同属性覆盖
- `toJson` 将当前对象转换为 **JSON** 对象
- `getModelConfig` 获取类标记的配置
- `getModelName` 获取类标记的名称
- `getFieldName` 获取类属性标记的名称
- `getFieldConfig` 获取类属性标记的配置

### `AirEntity`

`AirEntity` 指定包含 `id` 属性，继承来自 `AirModel`。 
