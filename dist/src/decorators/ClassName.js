"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassName = exports.ClassName = void 0;
const AirDecorator_1 = require("../helpers/AirDecorator");
const CLASS_NAME_KEY = 'ClassName';
function ClassName(className) {
    return (target) => AirDecorator_1.AirDecorator.setClassConfig(target, CLASS_NAME_KEY, className);
}
exports.ClassName = ClassName;
function getClassName(target) {
    return AirDecorator_1.AirDecorator.getClassConfig(target, CLASS_NAME_KEY);
}
exports.getClassName = getClassName;
//# sourceMappingURL=ClassName.js.map