"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToJson = exports.ToJson = void 0;
const AirDecorator_1 = require("../helpers/AirDecorator");
const TO_JSON_KEY = 'ToJson';
function ToJson(func) {
    return (target, key) => AirDecorator_1.AirDecorator.setFieldConfig(target, key, TO_JSON_KEY, func);
}
exports.ToJson = ToJson;
function getToJson(target, key) {
    return AirDecorator_1.AirDecorator.getFieldConfig(target, key, TO_JSON_KEY);
}
exports.getToJson = getToJson;
//# sourceMappingURL=ToJson.js.map