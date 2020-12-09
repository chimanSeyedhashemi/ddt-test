import { BaseModel } from "./model.base";
import { IUser } from "./model.user";

export interface IToken extends BaseModel{
    expiration_date: number;
    username: string;
}