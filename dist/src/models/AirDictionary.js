"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirDictionary = void 0;
class AirDictionary {
    key;
    label;
    disabled = false;
    constructor(key, label) {
        if (key) {
            this.key = key;
        }
        if (label) {
            this.label = label;
        }
    }
    setKey(key) {
        this.key = key;
        return this;
    }
    setLabel(label) {
        this.label = label;
        return this;
    }
    setDisabled(disabled = true) {
        this.disabled = disabled;
        return this;
    }
}
exports.AirDictionary = AirDictionary;
//# sourceMappingURL=AirDictionary.js.map