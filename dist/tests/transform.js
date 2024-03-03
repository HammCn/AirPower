"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
const tslib_1 = require("tslib");
const console_1 = require("console");
const decorators_1 = require("src/decorators");
const AirAssert_1 = require("src/helpers/AirAssert");
const AirDateTime_1 = require("src/helpers/AirDateTime");
const AirModel_1 = require("src/models/AirModel");
const DEFAULT_PHONE_NUMBER = '13888888888';
const DEFAULT_AGE = 18;
const DEFAULT_REG_TIME = AirDateTime_1.AirDateTime.getUnixTimeStamps();
const DEFAULT_WEIGHT = 150;
const DEFAULT_CLASS_NAME = '用户';
const DEFAULT_FIELD_NAME = '注册时间';
const DEFAULT_ROLE_NAME = '游客';
class BaseModel extends AirModel_1.AirModel {
    id;
}
class RoleModel extends BaseModel {
    name;
}
tslib_1.__decorate([
    (0, decorators_1.Alias)('roleName'),
    tslib_1.__metadata("design:type", String)
], RoleModel.prototype, "name", void 0);
let UserModel = class UserModel extends BaseModel {
    nickname;
    age;
    phone;
    roleList;
    idcard;
    weight;
    regTime;
};
tslib_1.__decorate([
    (0, decorators_1.Type)(Number),
    tslib_1.__metadata("design:type", Number)
], UserModel.prototype, "age", void 0);
tslib_1.__decorate([
    (0, decorators_1.Alias)('phoneNumber'),
    tslib_1.__metadata("design:type", String)
], UserModel.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, decorators_1.Type)(RoleModel, true),
    tslib_1.__metadata("design:type", Array)
], UserModel.prototype, "roleList", void 0);
tslib_1.__decorate([
    (0, decorators_1.IgnorePrefix)(),
    tslib_1.__metadata("design:type", String)
], UserModel.prototype, "idcard", void 0);
tslib_1.__decorate([
    (0, decorators_1.Default)(DEFAULT_WEIGHT),
    tslib_1.__metadata("design:type", Number)
], UserModel.prototype, "weight", void 0);
tslib_1.__decorate([
    (0, decorators_1.ToJson)((user) => AirDateTime_1.AirDateTime.formatFromSecond(user.regTime)),
    (0, decorators_1.ToModel)((user) => AirDateTime_1.AirDateTime.getUnixTimeStamps(user.regTime)),
    (0, decorators_1.FieldName)(DEFAULT_FIELD_NAME),
    tslib_1.__metadata("design:type", Number)
], UserModel.prototype, "regTime", void 0);
UserModel = tslib_1.__decorate([
    (0, decorators_1.FieldPrefix)('user_'),
    (0, decorators_1.ClassName)(DEFAULT_CLASS_NAME)
], UserModel);
function transform() {
    (0, console_1.clear)();
    const userModel = new UserModel();
    userModel.id = 1;
    userModel.nickname = 'Hamm';
    userModel.age = DEFAULT_AGE;
    userModel.phone = DEFAULT_PHONE_NUMBER;
    userModel.idcard = '50000000000000000';
    userModel.regTime = DEFAULT_REG_TIME;
    const role = new RoleModel();
    role.name = DEFAULT_ROLE_NAME;
    userModel.roleList = [role];
    (0, console_1.log)(userModel);
    const userJson = userModel.toJson();
    AirAssert_1.AirAssert.when(userJson.user_phoneNumber !== userModel.phone, 'tranform alias faild');
    AirAssert_1.AirAssert.when(userJson.idcard !== userModel.idcard, 'tranform prefix faild');
    AirAssert_1.AirAssert.when(userJson.user_idcard === userModel.idcard, 'transform prefix faild');
    AirAssert_1.AirAssert.when(userJson.user_regTime !== AirDateTime_1.AirDateTime.formatFromSecond(userModel.regTime), 'tranform toJson faild');
    userJson.user_age = userJson.user_age.toString();
    (0, console_1.log)(userJson);
    const newUserModel = UserModel.fromJson(userJson);
    (0, console_1.log)(newUserModel);
    AirAssert_1.AirAssert.when(userJson.user_roleList[0].roleName !== DEFAULT_ROLE_NAME, 'tranform model props error');
    AirAssert_1.AirAssert.when(newUserModel.weight !== DEFAULT_WEIGHT, 'transform default value faild');
    AirAssert_1.AirAssert.when(newUserModel.regTime !== userModel.regTime, 'tranform toModel faild');
    AirAssert_1.AirAssert.when(newUserModel.age !== userModel.age, 'transform type faild');
    AirAssert_1.AirAssert.when(UserModel.getClassName() !== DEFAULT_CLASS_NAME, 'decorator class name error!');
    AirAssert_1.AirAssert.when(UserModel.getFieldName('regTime') !== DEFAULT_FIELD_NAME, 'decorator field name error!');
    AirAssert_1.AirAssert.when(userModel.roleList[0].name !== newUserModel.roleList[0].name, 'tranform model props error');
    (0, console_1.log)('Transform test success!');
}
exports.transform = transform;
//# sourceMappingURL=transform.js.map