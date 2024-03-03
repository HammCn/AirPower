"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToModel = exports.ToModel = void 0;
const AirDecorator_1 = require("../helpers/AirDecorator");
const TO_MODEL_KEY = 'ToModel';
function ToModel(func) {
    return (target, key) => AirDecorator_1.AirDecorator.setFieldConfig(target, key, TO_MODEL_KEY, func);
}
exports.ToModel = ToModel;
function getToModel(target, key) {
    return AirDecorator_1.AirDecorator.getFieldConfig(target, key, TO_MODEL_KEY);
}
exports.getToModel = getToModel;
//# sourceMappingURL=ToModel.js.map