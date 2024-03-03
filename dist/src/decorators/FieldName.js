"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFieldName = exports.FieldName = void 0;
const AirDecorator_1 = require("../helpers/AirDecorator");
const FIELD_NAME_KEY = 'FieldName';
function FieldName(fieldName) {
    return (target, key) => AirDecorator_1.AirDecorator.setFieldConfig(target, key, FIELD_NAME_KEY, fieldName);
}
exports.FieldName = FieldName;
function getFieldName(target, key) {
    return AirDecorator_1.AirDecorator.getFieldConfig(target, key, FIELD_NAME_KEY) || key;
}
exports.getFieldName = getFieldName;
//# sourceMappingURL=FieldName.js.map