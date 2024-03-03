export declare class AirFile {
    static readonly FILE_SIZE_CALCULATION_CONSTANT = 1024;
    static readonly FILE_UNIT_LIST: string[];
    static getFileSizeFriendly(size: number, fractionDigits?: number): string;
    static getAbsoluteFileUrl(url: string): string;
}
