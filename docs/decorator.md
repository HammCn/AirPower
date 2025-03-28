## 📖 装饰器文档

**AirPower** 提供了一些湿滑的装饰器，对数据转换、类和属性的扩展配置等提供了一些便捷的开发帮助。

### @Model 类配置

可以使用 `@Model()` 为类标记可读的 `label` 以及数据转换时候的统一前缀 `fieldPrefix`：

```typescript
@Model({
  label: "用户",
  fieldPrefix: "user_"
})
class User extends AirModel {
  nickname!: string;

  age!: number;
}

const config = User.getModelConfig();
console.log(config);
```

将正常打印配置的 `label` 和 `fieldPrefix`：

```json
{
  "label": "用户",
  "fieldPrefix": "user_"
}
```

- **label**: 类的标签，如 `用户`
- **fieldPrefix**: 统一属性的前缀，如 `user_`，将在 [数据转换](./transformer.md) 中使用到。



### @Field 属性配置

可以使用 `@Field` 对类的属性进行配置：

```typescript
class User extends AirModel {
  @Field({
    label: "昵称",
    alias: "name",
  })
  nickname!: string;

  @Field({
    type: Number,
  })
  age!: number;
}

const config = User.getFieldConfig("nickname");
console.log(config);
```

将正常打印：

```json
{
  "label": "昵称",
  "alias": "name"
}
```

```@Field()``` 中支持很多数据转换的配置，如：

- **alias**: 字段别名，用于数据转换时候的映射
- **label**: 字段描述
- **type**: 字段类型，如 `Number` `String` `RoleEntity` 等，将递归数据转换
- **array**: 是否是数组类型，将强制转换为数组类型
- **ignorePrefix**: 这个属性是否忽略类标记的 `fieldPrefix`
- **dictionary**: 字典配置，用于数据转换时候的映射

