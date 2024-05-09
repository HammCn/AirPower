/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import { clear, log } from 'console'
import {
  Alias, Default, Field, FieldPrefix, Model, NoPrefix, ToJson, ToModel, Type,
} from 'src/decorators'
import { AirAssert } from 'src/helpers/AirAssert'
import { AirDateTime } from 'src/helpers/AirDateTime'
import { IJson } from 'src/interfaces/IJson'
import { AirModel } from 'src/models/AirModel'

const DEFAULT_PHONE_NUMBER = '13888888888'
const DEFAULT_AGE = 18
const DEFAULT_REG_TIME = AirDateTime.getUnixTimeStamps()
const DEFAULT_WEIGHT = 150
const DEFAULT_CLASS_NAME = '用户'
const DEFAULT_FIELD_NAME = '注册时间'
const DEFAULT_ROLE_NAME = '游客'

class BaseModel extends AirModel {
  id!: number
}

class RoleModel extends BaseModel {
  @Alias('roleName') name!: string
}

@FieldPrefix('user_')
@Model(DEFAULT_CLASS_NAME)
class UserModel extends BaseModel {
  nickname!: string

  @Type(Number) age!: number

  @Alias('phoneNumber') phone!: string

  @Type(RoleModel, true) roleList: RoleModel[]

  @NoPrefix() idcard!: string

  @Default(DEFAULT_WEIGHT) weight!: number

  @ToJson((user: UserModel) => AirDateTime.formatFromSecond(user.regTime))
  @ToModel((user: IJson) => AirDateTime.getUnixTimeStamps(user.regTime as unknown as string))
  @Field(DEFAULT_FIELD_NAME) regTime!: number
}

export function testTransform() {
  clear()
  const userModel = new UserModel()
  userModel.id = 1
  userModel.nickname = 'Hamm'
  userModel.age = DEFAULT_AGE
  userModel.phone = DEFAULT_PHONE_NUMBER
  userModel.idcard = '50000000000000000'
  userModel.regTime = DEFAULT_REG_TIME

  const role = new RoleModel()
  role.name = DEFAULT_ROLE_NAME
  userModel.roleList = [role]

  // tojson
  const userJson = userModel.toJson()
  AirAssert.when(userJson.user_phoneNumber !== userModel.phone, 'transform alias failed')
  AirAssert.when(userJson.idcard !== userModel.idcard, 'transform prefix failed')
  AirAssert.when(userJson.user_idcard === userModel.idcard, 'transform prefix failed')
  AirAssert.when(userJson.user_regTime !== AirDateTime.formatFromSecond(userModel.regTime), 'transform toJson failed')

  // change age to string
  userJson.user_age = userJson.user_age.toString()

  // toModel
  let newUserModel = UserModel.fromJson(userJson)

  AirAssert.when(userJson.user_roleList[0].roleName !== DEFAULT_ROLE_NAME, 'transform model props error')

  AirAssert.when(newUserModel.weight !== DEFAULT_WEIGHT, `transform 1 default value failed ${newUserModel.weight} ${userJson.weight}`)
  userJson.user_weight = 200
  newUserModel = UserModel.fromJson(userJson)

  AirAssert.when(newUserModel.weight !== 200, `transform 2 default value failed ${newUserModel.weight} ${userJson.user_weight}`)

  AirAssert.when(newUserModel.regTime !== userModel.regTime, 'transform toModel failed')
  AirAssert.when(newUserModel.age !== userModel.age, 'transform type failed')

  AirAssert.when(UserModel.getModelName() !== DEFAULT_CLASS_NAME, 'decorator class name error!')
  AirAssert.when(UserModel.getFieldName('regTime') !== DEFAULT_FIELD_NAME, 'decorator field name error!')
  AirAssert.when(userModel.roleList[0].name !== newUserModel.roleList[0].name, 'transform model props error')
  log('Transform test success!')
}
