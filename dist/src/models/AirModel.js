"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirModel = void 0;
const decorators_1 = require("../decorators");
class AirModel {
    recoverBy(obj) {
        return Object.assign(this, obj);
    }
    copy() {
        const newModel = Object.create(Object.getPrototypeOf(this));
        return Object.assign(newModel, this);
    }
    expose(...fields) {
        const fieldList = Object.keys(this);
        for (const field of fieldList) {
            if (!fields.includes(field)) {
                this[field] = undefined;
            }
        }
        return this;
    }
    exclude(...fields) {
        const fieldList = Object.keys(this);
        for (const field of fieldList) {
            if (fields.includes(field)) {
                this[field] = undefined;
            }
        }
        return this;
    }
    toJson() {
        const fieldKeyList = Object.keys(this);
        const json = {};
        for (const fieldKey of fieldKeyList) {
            const fieldData = this[fieldKey];
            let fieldAliasName = (0, decorators_1.getAlias)(this, fieldKey) || fieldKey;
            if (!(0, decorators_1.getIgnorePrefix)(this, fieldKey) && (0, decorators_1.getFieldPrefix)(this)) {
                fieldAliasName = (0, decorators_1.getFieldPrefix)(this) + fieldAliasName;
            }
            const toJsonFunction = (0, decorators_1.getToJson)(this, fieldKey);
            json[fieldAliasName || fieldKey] = fieldData;
            if (toJsonFunction !== undefined) {
                try {
                    json[fieldAliasName || fieldKey] = toJsonFunction(this);
                }
                catch (e) {
                    console.warn('ToJson Function Error', e);
                }
                continue;
            }
            if (typeof fieldData === 'object') {
                if (Array.isArray(fieldData)) {
                    const jsonList = [];
                    for (let i = 0; i < fieldData.length; i += 1) {
                        if (typeof fieldData[i] === 'object') {
                            jsonList[i] = fieldData[i].toJson();
                            continue;
                        }
                        jsonList[i] = fieldData[i];
                    }
                    json[fieldAliasName || fieldKey] = jsonList;
                    continue;
                }
                json[fieldAliasName || fieldKey] = fieldData.toJson();
            }
        }
        return json;
    }
    static fromJson(json = {}) {
        const instance = Object.assign(new this());
        return AirModel.parse(instance, json);
    }
    static fromJsonArray(jsonArray = []) {
        const instanceList = [];
        if (Array.isArray(jsonArray)) {
            for (let i = 0; i < jsonArray.length; i += 1) {
                const instance = Object.assign(new this());
                instanceList.push(AirModel.parse(instance, jsonArray[i]));
            }
        }
        else {
            const instance = Object.assign(new this());
            instanceList.push(AirModel.parse(instance, jsonArray));
        }
        return instanceList;
    }
    static parse(instance, json = {}) {
        const fieldKeyList = Object.keys(instance);
        for (const fieldKey of fieldKeyList) {
            const defaultValue = (0, decorators_1.getDefault)(instance, fieldKey);
            const FieldTypeClass = (0, decorators_1.getType)(instance, fieldKey);
            const fieldAliasName = (0, decorators_1.getAlias)(instance, fieldKey);
            let fieldData = json[(!(0, decorators_1.getIgnorePrefix)(instance, fieldKey)
                ? (0, decorators_1.getFieldPrefix)(instance)
                : '')
                + (fieldAliasName || fieldKey)];
            if (fieldData === undefined) {
                fieldData = (0, decorators_1.getDefault)(instance, fieldKey);
            }
            instance[fieldKey] = fieldData;
            const toModelFunction = (0, decorators_1.getToModel)(instance, fieldKey);
            if (toModelFunction !== undefined) {
                try {
                    instance[fieldKey] = toModelFunction(json);
                }
                catch (e) {
                    console.warn('ToModel Function Error', e);
                    continue;
                }
            }
            if ((0, decorators_1.getIsArray)(instance, fieldKey)) {
                const fieldValueList = [];
                if (typeof fieldData === 'object' && Array.isArray(fieldData)) {
                    for (let i = 0; i < fieldData.length; i += 1) {
                        if (FieldTypeClass) {
                            fieldValueList[i] = this.parse(new FieldTypeClass(), fieldData[i]);
                        }
                    }
                }
                instance[fieldKey] = fieldValueList;
                continue;
            }
            if (defaultValue !== undefined) {
                instance[fieldKey] = defaultValue;
            }
            if (!FieldTypeClass || fieldData === undefined || fieldData === null) {
                continue;
            }
            if (!FieldTypeClass) {
                continue;
            }
            switch (FieldTypeClass.name) {
                case 'String':
                    instance[fieldKey] = fieldData.toString();
                    break;
                case 'Number':
                    instance[fieldKey] = (Number.isNaN(parseFloat(fieldData)) ? undefined : parseFloat(fieldData));
                    break;
                case 'Boolean':
                    instance[fieldKey] = !!fieldData;
                    break;
                default:
                    instance[fieldKey] = this.parse(new FieldTypeClass(), fieldData);
            }
        }
        for (const fieldKey of fieldKeyList) {
            const fieldAliasName = (0, decorators_1.getAlias)(instance, fieldKey);
            if (fieldAliasName && fieldAliasName !== fieldKey) {
                delete instance[fieldAliasName];
            }
        }
        return instance;
    }
    static newInstance(recoverBy) {
        const instance = (Object.assign(new this(), null));
        if (recoverBy) {
            return instance.recoverBy(recoverBy);
        }
        return instance;
    }
    static getClassName() {
        return this.newInstance().getClassName();
    }
    static getFieldName(fieldKey) {
        return this.newInstance().getFieldName(fieldKey);
    }
    getClassName() {
        return (0, decorators_1.getClassName)(this) || this.constructor.name;
    }
    getFieldName(fieldKey) {
        return (0, decorators_1.getFieldName)(this, fieldKey);
    }
}
exports.AirModel = AirModel;
//# sourceMappingURL=AirModel.js.map