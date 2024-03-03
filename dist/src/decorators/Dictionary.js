"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDictionary = exports.Dictionary = void 0;
const AirDecorator_1 = require("../helpers/AirDecorator");
const AirDictionaryArray_1 = require("../models/AirDictionaryArray");
const DICTIONARY_KEY = 'Dictionary';
function Dictionary(dictionary) {
    return (target, key) => AirDecorator_1.AirDecorator.setFieldConfig(target, key, DICTIONARY_KEY, dictionary);
}
exports.Dictionary = Dictionary;
function getDictionary(target, key) {
    const config = AirDecorator_1.AirDecorator.getFieldConfig(target, key, DICTIONARY_KEY);
    if (config) {
        return AirDictionaryArray_1.AirDictionaryArray.create(config);
    }
    return undefined;
}
exports.getDictionary = getDictionary;
//# sourceMappingURL=Dictionary.js.map