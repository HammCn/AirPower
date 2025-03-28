## 工具库

### AirCrypto 编码和加解密

内置了 `AES加解密`、`SHA1`、`MD5`、`Base64` 等前端常用算法，可直接使用。

```typescript
AirCrypto.aesEncrypt()
AirCrypto.aesDecrypt()
AirCrypto.sha1()
AirCrypto.md5()
AirCrypto.base64Encode()
AirCrypto.base64Decode()
```

### AirDateTime 时间与日期

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

### AirDecorator 装饰器

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


### AirFile 文件

提供了一些常用文件处理方法

```typescript
// 字节数转可读文件大小
AirFile.getFileSizeFriendly()

// 获取静态文件的绝对地址
AirFile.getAbsoluteFileUrl()
```

### AirRand 随机生成

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

### AirString 字符串常见处理

提供了一些字符串处理的常见方法

```typescript
// 获取字符串可视化长度
AirString.getLength()

// 获取字符串可视化位置的内容
AirString.get()

// 字符串可视化截取
AirString.slice()
```
