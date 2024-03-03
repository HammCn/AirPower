"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirClassTransformer = void 0;
const AirModel_1 = require("../models/AirModel");
class AirClassTransformer {
    static copyJson(json) {
        if (!json) {
            return json;
        }
        return JSON.parse(JSON.stringify(json));
    }
    static treeList2List(treeList) {
        let list = [];
        treeList.forEach((item) => {
            list.push(item);
            if (item.children && item.children.length > 0) {
                list = list.concat(this.treeList2List(item.children));
            }
        });
        return list;
    }
    static parse(json, TargetClass) {
        return AirModel_1.AirModel.parse(new TargetClass(), json);
    }
    static parseArray(jsonArray, TargetClass) {
        return jsonArray.map((json) => this.parse(json, TargetClass));
    }
    static copy(from, TargetClass) {
        return this.parse(from.toJson(), TargetClass);
    }
    static newInstance(TargetClass) {
        return new TargetClass();
    }
}
exports.AirClassTransformer = AirClassTransformer;
//# sourceMappingURL=AirClassTransformer.js.map