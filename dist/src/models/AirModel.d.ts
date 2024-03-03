import { IJson } from '../interfaces/IJson';
export declare class AirModel {
    recoverBy(obj: IJson | AirModel): this;
    copy(): this;
    expose(...fields: string[]): this;
    exclude(...fields: string[]): this;
    toJson(): IJson;
    static fromJson<T extends AirModel>(this: new () => T, json?: IJson): T;
    static fromJsonArray<T extends AirModel>(this: new () => T, jsonArray?: IJson | IJson[]): T[];
    static parse<T extends AirModel>(instance: T, json?: IJson): T;
    static newInstance<T extends AirModel>(this: new () => T, recoverBy?: IJson): T;
    static getClassName(): string;
    static getFieldName(fieldKey: string): string;
    getClassName(): string;
    getFieldName(fieldKey: string): string;
}
