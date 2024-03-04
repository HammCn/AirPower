<p align="center">
  .
</p>
<p align="center">
  <img width="300" src="./assets/airpower.svg"/>
</p>


[Gitee](https://gitee.com/air-power/AirPower) / [Github](https://github.com/HammCn/AirPower) / [CHANGELOG](./CHANGELOG.md)


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
  
  前端可以通过 `AirDictionaryArray.create()` 创建一个字典，然后将字典传入到 `@Dictionary` 的参数中，其他地方则可获取此属性配置的字典，然后做一些其他的操作（如渲染）。

  ```typescript
  enum UserStatus {
    ENABLED = 1,
    DISABLED = 2,
    UNVALID = 3
  }
  const UserStatusDictionary = AirDictionaryArray.create([
    {key: UserStatus.ENABLED, label: "已启用"},
    {key: UserStatus.DISABLED, label: "已禁用"},
    {key: UserStatus.UNVALID, label: "待验证"},
  ])

  class User extends AirModel{
    nickname!: string

    @Dictionary(UserStatus)
    status!: UserStatus
  }

  // 在其他的组件中，即可通过下面的方式来获取指定属性配置的字典

  const dict = getDictionary(User, "status")
  ```
  
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

- #### @Type 强制转换类型
    
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

  断言类是用于一些异常判断拦截，可传入一些断言条件后，断言类的方法将自动判断并抛出异常，然后可自行通过全局处理异常来实现一些异常提示：

  ```typescript
  AirAssert.when(a !== 1, "a不允许为1")
  AirAssert.whenNull(user, "用户信息不能为空")
  AirAssert.whenUndefined(user.role, "用户角色不能是undefined")
  ```

- #### AirClassTransformer 数据转换
  
  `AirClassTransformer` 是一个类似 `Java BeanUtils` 的数据转换类，提供了转换、复制等一系列方法：

  ```typescript
  // 简单深拷贝JSON数据
  AirClassTransformer.copyJson(json) 

  // 树结构的数组转为普通数组
  const list = AirClassTransformer.treeList2List(treeList)

  // 转换JSON数据到指定类的对象
  const userModel = AirClassTransformer.parse(userJson, UserModel)

  // 转换JSON数组数据到指定类的对象数组
  const userModelArray = AirClassTransformer.parseArray(userJsonArray, UserModel)

  // 复制一个实例
  const userModel = new UserModel()
  const userNewModel = AirClassTransformer.copy(userModel, UserModel)

  // 初始化一个指定类型的实例
  const userModel = AirClassTransformer.newInstance(UserModel)
  ```

  当然，`UserModel` 需要继承自 `AirModel`，也可以直接使用 `AirModel` 提供的系列静态方法，参考下文关于 `AirModel` 的文档：）

- #### AirCrypto 加解密与编解码
  
  > (有争议,可能会移除)
  
  内置了 `AES加解密`、`SHA1`、`MD5`、`Base64` 等前端常用算法，可直接使用。

  ```typescript
  AirCrypto.aesEncrypt()
  AirCrypto.aesDecrypt()
  AirCrypto.sha1()
  AirCrypto.md5()
  AirCrypto.base64Encode()
  AirCrypto.base64Decode()
  ```

- #### AirDateTime 时间与日期
  
  提供了日期时间在前端常用的一些转换方法：

  ```typescript
  // 休眠
  await AirDateTime.sleep(3000)

  // 格式化到Unix秒时间戳(默认当前时间)
  AirDateTime.getUnixTimeStamps("2022-02-02 23:59:59")

  // 格式化到毫秒时间戳(默认当前时间)
  AirDateTime.getMilliTimeStamps("2022-02-02 23:59:59")

  // 从秒时间戳格式化时间
  AirDateTime.formatFromSecond(12312314, AirDateTimeFormatter.YYYY_MM_DD_HH_mm_ss)

  // 从毫秒时间戳格式化时间
  AirDateTime.formatFromMilliSecond(12312311234, AirDateTimeFormatter.YYYY_MM_DD_HH_mm_ss)

  // 从字符串或对象格式化时间
  AirDateTime.formatFromDate("2022-02-02 23:59:59", AirDateTimeFormatter.YYYY_MM_DD_HH_mm_ss)

  // 格式化到友好字符串显示
  AirDateTime.getFriendlyDateTime("2022-02-02 23:59:59") // 三天前

  ```

- #### AirDecorator 装饰器

  装饰器助手类提供了一些设置和读取配置项的方法：

  ```typescript
  // 反射添加属性
  AirDecorator.setProperty()

  // 设置一个类配置项
  AirDecorator.setClassConfig()

  // 递归获取指定类的配置项
  AirDecorator.getClassConfig()

  // 设置一个字段配置项
  AirDecorator.setFieldConfig()

  // 获取类指定字段的指定类型的配置
  AirDecorator.getFieldConfig()

  // 获取类标记了装饰器的字段列表
  AirDecorator.getFieldList()

  // 获取目标类指定字段列表的配置项列表
  AirDecorator.getFieldConfigList()

  // 获取目标类上指定字段的某个配置的值
  AirDecorator.getFieldConfigValue()
  ```


- #### AirFile 文件

  提供了一些常用文件处理方法

  ```typescript
  // 字节数转可读文件大小
  AirFile.getFileSizeFriendly()

  // 获取静态文件的绝对地址
  AirFile.getAbsoluteFileUrl()
  ```

- #### AirRand 随机生成

  提供了一些常用随机生成方法

  ```typescript
  // 指定范围内获取随机整数
  AirRand.getRandNumber()

  // 获取随机数字字符串
  AirRand.getRandNumberString()

  // 获取随机字母字符串
  AirRand.getRandCharString()

  // 获取大小写混合随机字母字符串
  AirRand.getRandMixedCharString()

  // 获取字母加数字随机字符串
  AirRand.getRandNumberAndCharString()

  // 获取大小写字母加数字随机字符串
  AirRand.getRandNumberAndMixedCharString()
  ```

- #### AirString 字符串常见处理

  提供了一些字符串处理的常见方法

  ```typescript
  // 获取字符串可视化长度
  AirString.getLength()
  
  // 获取字符串可视化位置的内容
  AirString.get()

  // 字符串可视化截取
  AirString.slice()
  ```
  
### 三、 内置接口

- #### IDictionary.ts

  定义了字典的接口标准，可通过下面的 `AirDictionaryArray` 提供的一些方法来创建字典并使用，可参阅 `AirDictionaryArray` 的部分文档

- #### IEntity.ts

  定义实体标准，必须包含实体操作的唯一ID。

- #### IFieldConfig.ts

  定义可扩展字段配置的接口，可自行继承后扩展。扩展方法正在开发中：）

- #### IJson.ts

  提供标准JSON数据的结构，可替代 `Record<string,any>` 使用

- #### ITree.ts

  提供了标准树结构的要素，如 `parentId`,`children` 等。如需自定义名称，可自行实现后使用别名。

### 四、 内置模型

- #### AirModel
  
  `AirModel` 为全局模型的超类，所有模型应继承自 `AirModel`, 继承后默认拥有所有超类模型提供的下列方法。

  如声明了一个用户模型 `UserModel`

  ```typescript
  @ClassName("用户")
  class UserModel extends AirModel{
      @FieldName("昵称")
      nickname!: string
  }
  
  ```
  则 `UserModel` 可直接调用下列静态方法

  ```typescript

  // 从json强制转换到模型创建一个实例
  UserModel.fromJson(json)

  // 从json强制转换到模型创建一个实例的数组
  UserModel.fromJsonArray(jsonArray)

  // 创建一个当前类的实例 可选参数为JSON
  UserModel.newInstance() 

  // 创建一个当前类的实例 可选参数为JSON
  UserModel.newInstance() 

  // 获取类的可阅读名字
  UserModel.getClassName() // 用户

  // 获取属性的可阅读名字
  UserModel.getFieldName("nickname") // 昵称

  ```

  `UserModel` 创建的实例也会自带一些继承的方法：

  ```typescript
  const user = new UserModel()

  // 用指定的数据对当前实例进行覆盖
  user.recoverBy(obj)

  // 将当前实例复制到一个新实例上
  user.copy()

  // 暴露部分类的字段
  user.expose()

  // 排除部分类的字段
  user.exclude()

  // 转换到JSON
  user.toJson()
  ```

- #### AirDictionary

  内置的 `IDictionary` 实现类，如需扩展自定义字典，可分别继承 `IDictionary` 和 `AirDictionary` 即可。

- #### AirDictionaryArray

  提供了创建和查询字典的一些方法：


  ```typescript
  // 创建字典
  const dict = AirDictionaryArray.create([
    // ...
  ])

  // 创建自定义
  const dict = AirDictionaryArray.createCustom<ICustomDictionary>([
    // ...
  ])

  // 获取字典指定Key的Label 
  dict.getLabel()

  // 获取一个字典选项 
  dict.get()

  // 查找一个字典选项 可能找不到 
  dict.findByKey()

  // 查找一个字典选项 可能找不到 
  dict.findByKey()
  ```



### 五、 写在后面

如果有更多的需求和建议，欢迎通过本仓库的 `Issues` 提出，也欢迎加入 QQ群 555156313 与我们及时反馈。