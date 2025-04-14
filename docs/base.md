# 📖 基类

**AirPower** 提供了 `AirPower` `IEntity` 等基类与接口，其中：

## AirPower

`AirPower` 是所有参与数据转换类的基类，它提供了一些基础的属性和方法，如：

### 静态方法

- #### `fromJson` 从 `JSON` 转换到当前类的对象

    ```ts
    const user = User.fromJson({
      id: 1,
      nickName: "Hamm"
    })
    ```

- #### `fromJsonArray` 从 `JSON` 数组转换到当前类的对象数组

    ```ts
    const user = User.fromJsonArray([
      {
        id: 1,
        nickName: "Hamm"
      },
      // ...
    ])
    ```

- #### `parse` 转换 `JSON` 为实体

    ```ts
    const user = AirPower.parse(UserEntity, {
      id: 1,
    })
    ```
- #### `getModelConfig` 获取模型类配置项

    ```ts
    const modelConfig = UserEntity.getModelConfig()
    ```

- #### `getModelName` 获取模型类的可阅读名字

    ```ts
    // 用户
    const modelName = UserEntity.getModelName()
    ```

- #### `getFieldName` 获取属性的可阅读名字

    ```ts
    // 昵称
    const fieldName = UserEntity.getFieldName("nickName")
    ```

- #### `getFieldConfig` 获取属性的配置

    ```ts
    const fieldConfig = UserEntity.getFieldConfig("nickName")
    ```

- #### `newInstance` 创建一个当前类的实例

    ```ts
    const user = UserEntity.newInstance({})
    ```

### 实例方法

- #### `copy` 复制当前对象

    ```ts
    const user = new User()
    const user2 = user.copy()
    ```    

- #### `expose` 暴露指定的一些属性

    ```ts
    const user = new User()
    user.expose("id", "nickname")
    ```

- #### `exclude` 排除指定的一些属性

    ```ts
    const user = new User()
    user.exclude("password")
    ```

- #### `recoverBy` 使用 **JSON** 对象进行相同属性覆盖

    ```ts
    const user = new User()
    user.recoverBy({
        nickname: "Hamm"
    })
    ```    

- #### `toJson` 将当前对象转换为 **JSON** 对象

    ```ts
    const user = new User()
    const json = user.toJson()
    ```    

- #### `getModelConfig` 获取类标记的配置

    ```ts
    const user = new User()
    const modelConfig = user.getModelConfig()
    ```

- #### `getModelName` 获取类标记的名称

    ```ts
    const user = new User()
    const modelName = user.getModelName()
    ```

- #### `getFieldName` 获取类属性标记的名称

    ```ts
    const user = new User()
    const fieldName = user.getFieldName("nickName")
    ```

- #### `getFieldConfig` 获取类属性标记的配置

    ```ts
    const user = new User()
    const fieldConfig = user.getFieldConfig("nickName")
    ```

## `IEntity`

`IEntity` 指定包含 `id` 属性。
