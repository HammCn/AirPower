import { IEntity } from './IEntity';
export interface ITree extends IEntity {
    name: string;
    children: this[];
    parentId?: number;
}
