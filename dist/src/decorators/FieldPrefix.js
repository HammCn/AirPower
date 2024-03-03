"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFieldPrefix = exports.FieldPrefix = void 0;
const AirDecorator_1 = require("../helpers/AirDecorator");
const FIELD_PREFIX_KEY = 'FieldPrefix';
function FieldPrefix(prefix) {
    return (target) => AirDecorator_1.AirDecorator.setClassConfig(target, FIELD_PREFIX_KEY, prefix);
}
exports.FieldPrefix = FieldPrefix;
function getFieldPrefix(target) {
    return AirDecorator_1.AirDecorator.getClassConfig(target, FIELD_PREFIX_KEY) || '';
}
exports.getFieldPrefix = getFieldPrefix;
//# sourceMappingURL=FieldPrefix.js.map