"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlias = exports.Alias = void 0;
const AirDecorator_1 = require("../helpers/AirDecorator");
const FieldPrefix_1 = require("./FieldPrefix");
const ALIAS_KEY = 'Alias';
function Alias(alias) {
    return (target, key) => AirDecorator_1.AirDecorator.setFieldConfig(target, key, ALIAS_KEY, (0, FieldPrefix_1.getFieldPrefix)(target) + alias);
}
exports.Alias = Alias;
function getAlias(target, key) {
    return AirDecorator_1.AirDecorator.getFieldConfig(target, key, ALIAS_KEY) || '';
}
exports.getAlias = getAlias;
//# sourceMappingURL=Alias.js.map