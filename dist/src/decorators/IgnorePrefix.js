"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIgnorePrefix = exports.IgnorePrefix = void 0;
const AirDecorator_1 = require("../helpers/AirDecorator");
const FIELD_IGNORE_KEY = 'IgnorePrefix';
function IgnorePrefix() {
    return (target, key) => AirDecorator_1.AirDecorator.setFieldConfig(target, key, FIELD_IGNORE_KEY, true);
}
exports.IgnorePrefix = IgnorePrefix;
function getIgnorePrefix(target, key) {
    return AirDecorator_1.AirDecorator.getFieldConfig(target, key, FIELD_IGNORE_KEY) || false;
}
exports.getIgnorePrefix = getIgnorePrefix;
//# sourceMappingURL=IgnorePrefix.js.map