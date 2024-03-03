import { IDictionary } from '../interfaces/IDictionary';
import { AirDictionaryArray } from '../models/AirDictionaryArray';
export declare function Dictionary(dictionary: AirDictionaryArray<IDictionary>): Function;
export declare function getDictionary(target: any, key: string): AirDictionaryArray<IDictionary> | undefined;
