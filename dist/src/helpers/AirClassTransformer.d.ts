import { IJson } from '../interfaces/IJson';
import { ITree } from '../interfaces/ITree';
import { AirModel } from '../models/AirModel';
import { AirClassConstructor } from '../types/AirClassConstructor';
export declare class AirClassTransformer {
    static copyJson<T extends IJson>(json: T): T;
    static treeList2List<E extends ITree>(treeList: E[]): E[];
    static parse<T extends AirModel>(json: IJson, TargetClass: AirClassConstructor<T>): T;
    static parseArray<T extends AirModel>(jsonArray: IJson[], TargetClass: AirClassConstructor<T>): T[];
    static copy<F extends AirModel, M extends AirModel>(from: F, TargetClass: AirClassConstructor<M>): M;
    static newInstance<T extends AirModel>(TargetClass: AirClassConstructor<T>): T;
}
