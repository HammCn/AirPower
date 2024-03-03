import { IDictionary } from '../interfaces/IDictionary';
export declare class AirDictionary implements IDictionary {
    key: number | string | boolean;
    label: string;
    disabled?: boolean;
    constructor(key?: number | string | boolean, label?: string);
    setKey(key: string | number | boolean): this;
    setLabel(label: any): this;
    setDisabled(disabled?: boolean): this;
}
