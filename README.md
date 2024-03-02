<p align="center">
  .
</p>
<p align="center">
  <img width="300" src="./assets/airpower.svg"/>
</p>


[Gitee](https://gitee.com/hamm/AirPower) / [Github](https://github.com/HammCn/AirPower) / [CHANGELOG](./CHANGELOG.md)


## 🎉 这是个什么项目

**AirPower**, 一个基于TypeScript的开发工具包, 内置了数据转换、装饰器、时间日期处理、加解密与散列、文件处理、常用枚举和字典、常见数据结构处理等工具。

> 此项目是独立的 **工具包** ，如需体验我们开源的 **Vue3+TypeScript+ElementPlus+Vite** 的 **Web开发工具包**， 请查看 [AirPower4T](https://github.com/HammCn/AirPower4T)

## 💻 如何使用(初始化)?

```shell
npm install airpower
# or
yarn add airpower
# or
cnpm install airpower
# or ...
```

## ⏰ Enjoy it

如有疑问，可以通过本仓库的 **Issues** 与我们联系，如果你有一些代码贡献，可以通过 **Pull Request** 将代码贡献，为这个项目添砖加瓦。

> 高司令：“嗯？Java? 什么Java?”


## 📖 食用文档

### 一、 装饰器

**AirPower** 提供了一些湿滑的装饰器，对数据转换、类和属性的扩展配置等提供了一些便捷的开发帮助。

- #### @Alias 字段别名

  在数据转换时提供别名服务。如后端返回的**JSON**提供的是 `username`, 而前端期望为 `nickname`, 可使用下面的别名方式, 前端其他代码中均可直接使用期望的 `nickname`, 如后端再次修改, 则前端只需要修改 `@Alias()` 的参数即可。

  ```typescript
  class User extends AirModel{
    @Alias("username") nickname!: string
  }
  ```
  此时，下面的JSON就可以直接转为目标类的实例了：
  ```typescript
  JSON {
    "username": "Hamm"
  }
  ```
  转换后:
  ```typescript
  User {
    nickname: "Hamm"
  }
  ```

- #### @ClassName 类的文案
  
  日常开发中，我们一般会声明一个 `Account` 类作为账号信息的数据结构载体，使用 `账号` 作为文案在系统里显示，所以我们使用下面的方式来声明：

  ```typescript
  @ClassName('账号')
  class Account extends AirModel{
      username!: string
      password!: string
      // more...
  }
  ```

  然后通过 ```getClassName()``` 方法来获取配置的名称。

  >  但可能因为需求原因，需要将系统里显示的 `账号` 全局修改为 `账户`。传统方式我们会全局的搜索替换，但很容易造成过度替换后的其他问题。于是我们只需要修改为 `@ClassName("账户")` 即可。

- #### @FieldName 属性的文案

  与上面的 `@ClassName` 类似的需求，我们将 `username` 作为 `用户名` 的字段：

  ```typescript
  @ClassName('账号')
  class Account extends AirModel{
      @FieldName('用户名') 
      username!: string

      @FieldName('密码') 
      password!: string
      // more...
  }
  ```

  > 当需要将 `密码` 修改为 `口令` 时，我们也只需要去修改为 `@FieldName('口令')` 即可。

- #### @Default 属性默认值
  
  当我们通过发起请求获取到后端数据后，我们期望后端部分数据缺失时，我们能提供一些默认值：

    ```typescript
  class User extends AirModel{
      nickname!: string

      @Default("这个人很懒，一句话也没留下")
      bio!: string
      // more...
  }
  ```
  后端传递来的用户JSON格式如下：
  
  ```typescript
  const json = {
    "nickname": "Hamm",
  }

  const user = User.fromJson(json)

  console.log(user.bio) // 打印 这个人很懒，一句话也没留下
  ```

- #### @Dictionary
  
  > Comming soom...

- #### @FieldPrefix 标记类所有属性的前缀
  
  如果后端在某些规范下，习惯给字段加上统一的前缀，如 `用户信息` 都带上了 `user_` 的前缀：

  ```typescript
  const userJson = {
    user_name: "Hamm",
    user_age: 18,
    user_bio: "这个人很懒，一句话也没留下",
  }

  // 为了接收后端来的数据，我们声明了 User 类，使用 @FieldPrefix("user_") 标记前缀
  @FieldPrefix("user_")
  class User extends AirModel{
    name!: string
    age!: number
    bio!: string
  }
  
  // 然后进行数据转换
  const user = User.fromJson(userJson)
  
  console.log(user.name) // 打印 Hamm
  console.log(user.user_name) // 报错，没有这个属性
  ``` 
  
  于是我们的代码中就不会出现大量的 `user_` 前缀了（不因为后端的规范，让前端代码看着拉垮）

- #### @IgnorePrefix 属性忽略类配置的前缀
  
  在上面的示例中，后端某一天不按照规范加了个新的字段 `registerIp`:

  ```typescript
  const userJson = {
    user_name: "Hamm",
    user_age: 18,
    user_bio: "这个人很懒，一句话也没留下",
    registerIp: "127.0.0.1"
  }

  // 此时前端声明属性会获取不到数据，于是我们声明一个同样的属性，忽略掉前缀即可
  @FieldPrefix("user_")
  class User extends AirModel{
    name!: string
    age!: number
    bio!: string

    @IgnorePrefix() // 忽略前缀
    registerIp!: string
  }
  
  // 然后进行数据转换
  const user = User.fromJson(userJson)
  
  console.log(user.registerIp) // 打印 127.0.0.1
  ``` 

- #### @ToModel fromJson自定义转换
  
  某些场景下，我们使用上面的装饰器都已经无法满足需求了，或者我们有一些自定义的转换规则（如后端给的时间戳，前端需要直接显示）， 此时 `@ToModel` 和 `@ToJson` 就派上了用场：

  ```typescript
  const userJson = {
    nickname: "Hamm",
    lastLoginTime: 124564654465465 // 毫秒时间戳
  }

  
  class User extends AirModel{
    @ToModel((json: IJson)=>{ // 参数为原始对象
      return AirDateTime.formatFromMilSecond(json.lastLoginTime)
    })
    lastLoginTime!: number
  }

  const user = User.fromJson(userJson)

  console.log(user.lastLoginTime) // 打印上面转换后的 "2022-02-02 23:59:59"
  ```

- #### @ToJson toJson自定义转换

  与上面的 `@ToModel` 相反，当我们将 `类的实例对象` 转为后端需要的 `JSON` 时，可以这么使用：

   ```typescript
  
  class User extends AirModel{
    @ToModel((user: User)=>{ // 参数为类的实例对象
      return AirDateTime.getMilTimeStamp(user.lastLoginTime)
    })
    lastLoginTime!: number
  }

  const user = new User()
  user.lastLoginTime = "2022-02-02 23:59:59"

  const userJson = user.toJson() // 调用内置的 tojson方法

  console.log(userJson.lastLoginTime) // 打印毫秒时间戳 1231824291746591
  ```

- #### @Type
    
  后端可能在某些情况下将包含错误数据类型的JSON进行返回，如将 `金额` 的数字类型转换为了 `string`:

  ```typescript
  const userJson{
      nickname: "Hamm",
      money: "123.02"
  }

  // 上面的数据直接进行运算会得到错误的数据，于是我们使用 `@Type` 强制标记为 `Number`:
  class User extends AirModel{
    nickname!: string

    @Type(Number)
    money!: number
  }

  const user = User.fromJson(userJson)

  console.log(user.money + 1) // 打印 124.02 可以安心计算
  console.log(userJson.money + 1) // 打印 123.021 错误的字符串拼接
  ```
  

  
### 二、 工具类

- #### AirAssert 断言
- #### AirClassTransformer 数据转换
- #### AirCrypto 加解密与编解码
- #### AirDateTime 时间与日期
- #### AirDecorator 装饰器
- #### AirFile 文件
- #### AirRand 随机生成
  
### 三、 内置接口

- #### IDictionary.ts
- #### IEntity.ts
- #### IFieldConfig.ts
- #### IJson.ts
- #### ITree.ts

### 四、 内置模型

- #### AirModel
- #### AirDictionary
- #### AirDictionaryArray
