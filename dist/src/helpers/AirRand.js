"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirRand = void 0;
class AirRand {
    static STRING_OF_NUMBER = '0123456789';
    static STRING_OF_LOWER_CHAR = 'abcdefghijklmnopqrstuvwxyz';
    static STRING_OF_UPPER_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    static DEFAULT_RADIX = 10;
    static getRandNumber(min, max) {
        return parseInt((min + Math.random() * (max - min)).toString(), this.DEFAULT_RADIX);
    }
    static getRandNumberString(length = 6) {
        let str = '';
        for (let i = 0; i < length; i += 1) {
            str += this.STRING_OF_NUMBER[parseInt((Math.random() * this.STRING_OF_NUMBER.length).toString(), this.DEFAULT_RADIX)];
        }
        return str;
    }
    static getRandCharString(length = 32, isUpper = false) {
        let str = '';
        for (let i = 0; i < length; i += 1) {
            str += this.STRING_OF_LOWER_CHAR[parseInt((Math.random() * this.STRING_OF_LOWER_CHAR.length).toString(), this.DEFAULT_RADIX)];
        }
        return isUpper ? str.toLocaleUpperCase() : str;
    }
    static getRandMixedCharString(length = 32) {
        let str = '';
        const strStorage = this.STRING_OF_LOWER_CHAR + this.STRING_OF_UPPER_CHAR;
        for (let i = 0; i < length; i += 1) {
            str += strStorage[parseInt((Math.random() * strStorage.length).toString(), this.DEFAULT_RADIX)];
        }
        return str;
    }
    static getRandNumberAndCharString(length = 32, isUpper = false) {
        let str = '';
        const strStorage = this.STRING_OF_LOWER_CHAR + this.STRING_OF_NUMBER;
        for (let i = 0; i < length; i += 1) {
            str += strStorage[parseInt((Math.random() * strStorage.length).toString(), this.DEFAULT_RADIX)];
        }
        return isUpper ? str.toLocaleUpperCase() : str;
    }
    static getRandNumberAndMixedCharString(length = 32) {
        let str = '';
        const strStorage = this.STRING_OF_LOWER_CHAR + this.STRING_OF_NUMBER + this.STRING_OF_UPPER_CHAR;
        for (let i = 0; i < length; i += 1) {
            str += strStorage[parseInt((Math.random() * strStorage.length).toString(), this.DEFAULT_RADIX)];
        }
        return str;
    }
}
exports.AirRand = AirRand;
//# sourceMappingURL=AirRand.js.map