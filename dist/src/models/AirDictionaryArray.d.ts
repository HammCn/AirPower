import { IDictionary } from '../interfaces/IDictionary';
export declare class AirDictionaryArray<T extends IDictionary = IDictionary> extends Array<T> {
    getLabel(key: boolean | number | string, defaultLabel?: string): string;
    get(key: boolean | number | string): T;
    findByKey(key: boolean | number | string): T | undefined;
    static createCustom<T extends IDictionary>(list: T[]): AirDictionaryArray<T>;
    static create(list: IDictionary[]): AirDictionaryArray<IDictionary>;
}
