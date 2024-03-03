import { AirClassConstructor } from '../types/AirClassConstructor';
export declare function Type(Clazz: AirClassConstructor<any>, isArray?: boolean): Function;
export declare function IsArray(): Function;
export declare function getType(target: any, key: string): AirClassConstructor<unknown> | undefined;
export declare function getIsArray(target: any, key: string): boolean;
