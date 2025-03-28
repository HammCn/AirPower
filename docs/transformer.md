## 📖 数据转换

这一篇是需要重点讲的部分。

### 强制类型和数组

可以通过为 `@Field` 标记 `type` 来强制类型转换。

```typescript
class User extends AirModel {
  @Field({
    type: Number // 强制转换为数字类型
  })
  age!: number

  @Field({
    type: Role // 强制是Role类型
  })
  role!: Role

  @Field({
    type: Department, // 强制是Department类型
    array: true // 指定是数组
  })
  departmentList: Department[] = []
}
```

那么，如果使用 `User.fromJson(json)`，那么 `json` 中的数据就会按照标记的装饰器类型进行类型转换。

**请注意，如果非简单类型，一定要标记 `type`，否则无法进行递归转换**

### 别名转换

别名转换适用于突然属性名称的变更，如 `nickname` -> `nickName`

```typescript
class User extends AirModel {
  @Field({
    alias: 'nickName'
  })
  nickname!: string
}
```

### 固定前缀

有时候，后端提供的数据都带了统一的属性前缀：

```json
{
  "user_id": 123,
  "user_name": "userName",
  "user_age": 18
}
```

此时，我们可以通过类的装饰器 `@Model` 来配置属性前缀：

```typescript
@Model({
  prefix: 'user_'
})
class User extends AirModel {
  id!: number
  name!: string
  age!: number
}
```

如果，其中的某个属性不需要前缀，可以通过 `@Field` 的 `ignorePrefix` 来忽略：

```typescript
@Model({
  prefix: 'user_'
})
class User extends AirModel {
  // 其他需要前缀的属性
  @Field({
    ignorePrefix: true
  })
  bio!: string
}
```

### 自定义转换

`@ToJson` `@ToModel` 可完成自定义转换
