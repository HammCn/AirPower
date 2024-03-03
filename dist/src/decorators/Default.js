"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefault = exports.Default = void 0;
const AirDecorator_1 = require("../helpers/AirDecorator");
const DEFAULT_KEY = 'Default';
function Default(value) {
    return (target, key) => AirDecorator_1.AirDecorator.setFieldConfig(target, key, DEFAULT_KEY, value);
}
exports.Default = Default;
function getDefault(target, key) {
    return AirDecorator_1.AirDecorator.getFieldConfig(target, key, DEFAULT_KEY);
}
exports.getDefault = getDefault;
//# sourceMappingURL=Default.js.map