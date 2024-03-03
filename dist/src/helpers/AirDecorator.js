"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirDecorator = void 0;
const AirClassTransformer_1 = require("./AirClassTransformer");
class AirDecorator {
    static setProperty(target, key, value) {
        Reflect.defineProperty(target, key, {
            enumerable: false,
            value,
            writable: false,
            configurable: true,
        });
    }
    static setClassConfig(target, classConfigKey, classConfig) {
        this.setProperty(target.prototype, classConfigKey, classConfig);
    }
    static getClassConfig(target, classConfigKey, defaultValue = undefined, isObject = false) {
        let classConfig = Reflect.get(target, classConfigKey);
        if (!isObject) {
            if (classConfig === undefined) {
                const superClass = Reflect.getPrototypeOf(target);
                if (!superClass || superClass.constructor.name === 'AirModel') {
                    return undefined;
                }
                return this.getClassConfig(superClass, classConfigKey);
            }
            return classConfig;
        }
        classConfig = classConfig || {};
        const superClass = Reflect.getPrototypeOf(target);
        if (!superClass || superClass.constructor.name === 'AirModel') {
            return defaultValue;
        }
        return { ...this.getClassConfig(superClass, classConfigKey, defaultValue, isObject), ...classConfig };
    }
    static setFieldConfig(target, key, fieldConfigKey, fieldConfig, fieldListKey) {
        if (fieldListKey) {
            this.setFieldDecoration(target, key, fieldListKey);
        }
        this.setProperty(target, `${fieldConfigKey}[${key}]`, fieldConfig);
    }
    static setFieldDecoration(target, key, fieldListKey) {
        const list = Reflect.get(target, fieldListKey) || [];
        list.push(key);
        this.setProperty(target, fieldListKey, list);
    }
    static getFieldConfig(target, key, fieldConfigKey, isObject = false) {
        let fieldConfig = Reflect.get(target, `${fieldConfigKey}[${key}]`);
        if (!isObject) {
            if (fieldConfig !== undefined) {
                return fieldConfig;
            }
            const superClass = Reflect.getPrototypeOf(target);
            if (!superClass || superClass.constructor.name === 'AirModel') {
                return undefined;
            }
            return this.getFieldConfig(superClass, key, fieldConfigKey);
        }
        fieldConfig = fieldConfig || {};
        const superClass = Reflect.getPrototypeOf(target);
        if (!superClass || superClass.constructor.name === 'AirModel') {
            return {};
        }
        return { ...this.getFieldConfig(superClass, key, fieldConfigKey, true), ...fieldConfig };
    }
    static getFieldList(target, fieldConfigKey, list = []) {
        const fieldList = Reflect.get(target, fieldConfigKey) || [];
        fieldList.forEach((item) => list.includes(item) || list.push(item));
        const superClass = Reflect.getPrototypeOf(target);
        if (!superClass || superClass.constructor.name === 'AirModel') {
            return list;
        }
        return this.getFieldList(superClass, fieldConfigKey, list);
    }
    static getFieldConfigList(target, fieldListKey, fieldConfigKey, keyList, FieldConfigClass) {
        const fieldConfigList = [];
        if (keyList.length === 0) {
            keyList = this.getFieldList(target, fieldListKey);
        }
        for (const fieldName of keyList) {
            const config = this.getFieldConfig(target, fieldName, fieldConfigKey);
            if (config) {
                const defaultConfig = new FieldConfigClass();
                const result = {};
                Object.keys({ ...defaultConfig, config }).forEach((configKey) => {
                    if (configKey !== 'key') {
                        result[configKey] = this.getFieldConfigValue(target, fieldConfigKey, config.key, configKey) ?? defaultConfig[configKey];
                    }
                });
                result.key = config.key;
                result.label = config.label;
                fieldConfigList.push(result);
            }
        }
        return fieldConfigList;
    }
    static getFieldConfigValue(target, fieldConfigKey, key, configKey) {
        const fieldConfig = AirClassTransformer_1.AirClassTransformer.copyJson(Reflect.get(target, `${fieldConfigKey}[${key}]`));
        if (fieldConfig && fieldConfig[configKey] !== undefined) {
            return fieldConfig[configKey];
        }
        const superClass = Object.getPrototypeOf(target);
        if (!superClass || superClass.constructor.name === 'AirModel') {
            return undefined;
        }
        return this.getFieldConfigValue(superClass, fieldConfigKey, key, configKey);
    }
}
exports.AirDecorator = AirDecorator;
//# sourceMappingURL=AirDecorator.js.map