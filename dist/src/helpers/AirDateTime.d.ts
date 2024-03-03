import { AirDateTimeFormatter } from '../enums/AirDateTimeFormatter';
export declare class AirDateTime {
    static sleep(milliSeconds: number): Promise<void>;
    static getUnixTimeStamps(date?: Date | string): number;
    static getMilliTimeStamps(date?: Date | string): number;
    static formatFromSecond(timeStamp: number, formateString?: AirDateTimeFormatter | string): string;
    static formatFromMilliSecond(timeStamp: number, formateString?: AirDateTimeFormatter | string): string;
    static formatFromDate(date: Date | string, formateString?: AirDateTimeFormatter | string): string;
    static getFriendlyDateTime(date: Date | string | number): string;
}
