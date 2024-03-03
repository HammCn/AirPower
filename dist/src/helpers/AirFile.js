"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirFile = void 0;
const AirConfig_1 = require("../configs/AirConfig");
class AirFile {
    static FILE_SIZE_CALCULATION_CONSTANT = 1024;
    static FILE_UNIT_LIST = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    static getFileSizeFriendly(size, fractionDigits = 2) {
        if (size <= 0) {
            return '未知大小';
        }
        for (let i = 0; i < this.FILE_UNIT_LIST.length; i += 1) {
            if (size < this.FILE_SIZE_CALCULATION_CONSTANT ** (i + 1)) {
                return `${(size / (this.FILE_SIZE_CALCULATION_CONSTANT ** i)).toFixed(fractionDigits)}${this.FILE_UNIT_LIST[i]}`;
            }
        }
        return '文件过大';
    }
    static getAbsoluteFileUrl(url) {
        if (!url) {
            return '';
        }
        if (url.includes('https://') || url.includes('http://')) {
            return url;
        }
        return AirConfig_1.AirConfig.absoluteUrl + url;
    }
}
exports.AirFile = AirFile;
//# sourceMappingURL=AirFile.js.map