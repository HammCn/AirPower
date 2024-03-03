"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirAssert = void 0;
class AirAssert {
    static when(condition, message, title) {
        if (condition) {
            throw new Error(`\n\n[AirAssert Faild]: ${title || ''}\n${message}\n\n\n`);
        }
    }
    static whenNull(value, message, title) {
        return this.when(value === null, message, title);
    }
    static whenUndefined(value, message, title) {
        return this.when(value === undefined, message, title);
    }
}
exports.AirAssert = AirAssert;
//# sourceMappingURL=AirAssert.js.map