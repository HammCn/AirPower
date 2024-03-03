"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirCrypto = void 0;
const tslib_1 = require("tslib");
const crypto_js_1 = tslib_1.__importDefault(require("crypto-js"));
const js_base64_1 = require("js-base64");
const AirConfig_1 = require("../configs/AirConfig");
class AirCrypto {
    static key = AirConfig_1.AirConfig.aesCryptoKey;
    static aesEncrypt(data, key = this.key, mode = crypto_js_1.default.mode.CBC, padding = crypto_js_1.default.pad.ZeroPadding) {
        const src = crypto_js_1.default.enc.Utf8.parse(data);
        const iv = crypto_js_1.default.enc.Utf8.parse(key);
        return crypto_js_1.default.AES.encrypt(src, iv, {
            iv,
            mode,
            padding,
        }).toString();
    }
    static aesDecrypt(data, key = this.key, mode = crypto_js_1.default.mode.CBC, padding = crypto_js_1.default.pad.ZeroPadding) {
        const iv = crypto_js_1.default.enc.Utf8.parse(key);
        return crypto_js_1.default.AES.decrypt(data, iv, {
            iv,
            mode,
            padding,
        }).toString(crypto_js_1.default.enc.Utf8);
    }
    static sha1(data) {
        return crypto_js_1.default.SHA1(data).toString();
    }
    static md5(data) {
        return crypto_js_1.default.MD5(data).toString();
    }
    static base64Encode(data) {
        return js_base64_1.Base64.encode(data);
    }
    static base64Decode(data) {
        return js_base64_1.Base64.decode(data);
    }
}
exports.AirCrypto = AirCrypto;
//# sourceMappingURL=AirCrypto.js.map