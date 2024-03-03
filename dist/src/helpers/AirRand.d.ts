export declare class AirRand {
    private static readonly STRING_OF_NUMBER;
    private static readonly STRING_OF_LOWER_CHAR;
    private static readonly STRING_OF_UPPER_CHAR;
    private static readonly DEFAULT_RADIX;
    static getRandNumber(min: number, max: number): number;
    static getRandNumberString(length?: number): string;
    static getRandCharString(length?: number, isUpper?: boolean): string;
    static getRandMixedCharString(length?: number): string;
    static getRandNumberAndCharString(length?: number, isUpper?: boolean): string;
    static getRandNumberAndMixedCharString(length?: number): string;
}
