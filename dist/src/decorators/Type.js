"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsArray = exports.getType = exports.IsArray = exports.Type = void 0;
const AirDecorator_1 = require("../helpers/AirDecorator");
const TYPE_KEY = 'Type';
const IS_ARRAY_KEY = 'IsArray';
function Type(Clazz, isArray = false) {
    return (target, key) => {
        AirDecorator_1.AirDecorator.setFieldConfig(target, key, TYPE_KEY, Clazz);
        AirDecorator_1.AirDecorator.setFieldConfig(target, key, IS_ARRAY_KEY, isArray);
    };
}
exports.Type = Type;
function IsArray() {
    return (target, key) => {
        AirDecorator_1.AirDecorator.setFieldConfig(target, key, IS_ARRAY_KEY, true);
    };
}
exports.IsArray = IsArray;
function getType(target, key) {
    return AirDecorator_1.AirDecorator.getFieldConfig(target, key, TYPE_KEY) || undefined;
}
exports.getType = getType;
function getIsArray(target, key) {
    return AirDecorator_1.AirDecorator.getFieldConfig(target, key, IS_ARRAY_KEY);
}
exports.getIsArray = getIsArray;
//# sourceMappingURL=Type.js.map