"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirDateTime = void 0;
const AirDateTimeFormatter_1 = require("../enums/AirDateTimeFormatter");
class AirDateTime {
    static async sleep(milliSeconds) {
        return new Promise((success) => {
            setTimeout(() => {
                success();
            }, milliSeconds);
        });
    }
    static getUnixTimeStamps(date) {
        return Math.round(this.getMilliTimeStamps(date) / 1000);
    }
    static getMilliTimeStamps(date) {
        if (!date) {
            date = new Date();
        }
        switch (typeof date) {
            case 'string':
                return new Date(date).valueOf();
            case 'object':
                if (date instanceof Date) {
                    return date.valueOf();
                }
                break;
            default:
        }
        return 0;
    }
    static formatFromSecond(timeStamp, formateString) {
        return this.formatFromDate(new Date(timeStamp * 1000), formateString);
    }
    static formatFromMilliSecond(timeStamp, formateString) {
        return this.formatFromDate(new Date(timeStamp), formateString);
    }
    static formatFromDate(date, formateString) {
        if (!formateString) {
            formateString = AirDateTimeFormatter_1.AirDateTimeFormatter.YYYY_MM_DD_HH_mm_ss;
        }
        switch (typeof date) {
            case 'string':
                date = new Date(date);
                break;
            case 'object':
                if (!(date instanceof Date)) {
                    date = new Date();
                }
                break;
            default:
        }
        const dict = {
            YYYY: date.getFullYear(),
            M: date.getMonth() + 1,
            D: date.getDate(),
            H: date.getHours(),
            m: date.getMinutes(),
            s: date.getSeconds(),
            MM: (`${date.getMonth() + 101}`).substring(1),
            DD: (`${date.getDate() + 100}`).substring(1),
            HH: (`${date.getHours() + 100}`).substring(1),
            mm: (`${date.getMinutes() + 100}`).substring(1),
            ss: (`${date.getSeconds() + 100}`).substring(1),
        };
        return formateString.replace(/(YYYY|MM|DD|HH|ss|mm)/g, (arg) => dict[arg].toString());
    }
    static getFriendlyDateTime(date) {
        const nowTimeStamps = this.getUnixTimeStamps(new Date());
        let oldTimeStamp;
        if (typeof date === 'number') {
            oldTimeStamp = parseInt((date / 1000).toString(), 10);
        }
        else {
            oldTimeStamp = this.getUnixTimeStamps(date);
        }
        const diffTimeStamp = Math.abs(nowTimeStamps - oldTimeStamp);
        if (oldTimeStamp > nowTimeStamps) {
            if (diffTimeStamp > 86400 * 36500) {
                return `${Math.floor(diffTimeStamp / 86400 / 100 / 31)}世纪后`;
            }
            if (diffTimeStamp > 86400 * 365) {
                return `${Math.floor(diffTimeStamp / 86400 / 365)}年后`;
            }
            if (diffTimeStamp > 86400 * 31) {
                return `${Math.floor(diffTimeStamp / 86400 / 31)}月后`;
            }
            if (diffTimeStamp > 86400 * 7) {
                return `${Math.floor(diffTimeStamp / 86400 / 7)}周后`;
            }
            if (diffTimeStamp > 86400) {
                return `${Math.floor(diffTimeStamp / 86400)}天后`;
            }
            if (diffTimeStamp > 3600) {
                return `${Math.floor(diffTimeStamp / 3600)}小时后`;
            }
            if (diffTimeStamp > 60) {
                return `${Math.floor(diffTimeStamp / 60)}分钟后`;
            }
            if (diffTimeStamp > 0) {
                return `${diffTimeStamp}秒后`;
            }
        }
        else {
            if (diffTimeStamp > 86400 * 36500) {
                return `${Math.floor(diffTimeStamp / 86400 / 100 / 365)}世纪前`;
            }
            if (diffTimeStamp > 86400 * 365) {
                return `${Math.floor(diffTimeStamp / 86400 / 365)}年前`;
            }
            if (diffTimeStamp > 86400 * 30) {
                return `${Math.floor(diffTimeStamp / 86400 / 30)}月前`;
            }
            if (diffTimeStamp > 86400 * 7) {
                return `${Math.floor(diffTimeStamp / 86400 / 7)}周前`;
            }
            if (diffTimeStamp > 86400) {
                return `${Math.floor(diffTimeStamp / 86400)}天前`;
            }
            if (diffTimeStamp > 3600) {
                return `${Math.floor(diffTimeStamp / 3600)}小时前`;
            }
            if (diffTimeStamp > 60) {
                return `${Math.floor(diffTimeStamp / 60)}分钟前`;
            }
            if (diffTimeStamp >= 0) {
                return '刚刚';
            }
        }
        return '未知时间';
    }
}
exports.AirDateTime = AirDateTime;
//# sourceMappingURL=AirDateTime.js.map