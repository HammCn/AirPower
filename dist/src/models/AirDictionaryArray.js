"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirDictionaryArray = void 0;
const AirDictionary_1 = require("./AirDictionary");
class AirDictionaryArray extends Array {
    getLabel(key, defaultLabel = '-') {
        return this.get(key).label || defaultLabel;
    }
    get(key) {
        return this.findByKey(key) || {};
    }
    findByKey(key) {
        return this.find((item) => item.key === key);
    }
    static createCustom(list) {
        const dictionary = new AirDictionaryArray();
        list.forEach((json) => {
            const item = Object.assign(new AirDictionary_1.AirDictionary(), json);
            dictionary.push(item);
        });
        return dictionary;
    }
    static create(list) {
        return this.createCustom(list);
    }
}
exports.AirDictionaryArray = AirDictionaryArray;
//# sourceMappingURL=AirDictionaryArray.js.map