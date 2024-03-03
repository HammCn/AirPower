import { AirClassConstructor } from '../types/AirClassConstructor';
import { IFieldConfig } from '../interfaces/IFieldConfig';
export declare class AirDecorator {
    private static setProperty;
    static setClassConfig(target: any, classConfigKey: string, classConfig: any): void;
    static getClassConfig(target: any, classConfigKey: string, defaultValue?: any, isObject?: boolean): any;
    static setFieldConfig(target: any, key: string, fieldConfigKey: string, fieldConfig: any, fieldListKey?: string): void;
    private static setFieldDecoration;
    static getFieldConfig(target: any, key: string, fieldConfigKey: string, isObject?: boolean): any;
    static getFieldList(target: any, fieldConfigKey: string, list?: string[]): string[];
    static getFieldConfigList<T extends IFieldConfig>(target: any, fieldListKey: string, fieldConfigKey: string, keyList: string[], FieldConfigClass: AirClassConstructor<T>): T[];
    static getFieldConfigValue(target: any, fieldConfigKey: string, key: string, configKey: string): any;
}
