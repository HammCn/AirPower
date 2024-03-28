/* eslint-disable no-unused-vars */
import { log } from 'console'
import {
  AirAssert,
  AirDictionaryArray, AirModel, Dictionary, getDictionary,
} from 'src'

enum UserStatus {
  ENABLED = 1,
  DISABLED = 2,
  UNVALID = 3
}
const UserStatusDictionary = AirDictionaryArray.create([
  { key: UserStatus.ENABLED, label: '已启用' },
  { key: UserStatus.DISABLED, label: '已禁用' },
  { key: UserStatus.UNVALID, label: '待验证' },
])

class User extends AirModel {
  nickname!: string

  @Dictionary(UserStatusDictionary)
    status!: UserStatus
}

export function testDictionary() {
  const dict1 = getDictionary(User.prototype, 'status')
  AirAssert.when(dict1.length !== UserStatusDictionary.length, 'Get dictionary from prototype error')
  const dict2 = getDictionary(User, 'status')
  AirAssert.when(dict2.length !== UserStatusDictionary.length, 'Get dictionary from class error')
  const dict3 = User.getDictionary('status')
  AirAssert.when(dict3.length !== UserStatusDictionary.length, 'Get dictionary from static method error')
  log('Dictionary get and set success!')
}
