import { BaseService } from "../services/service.base";
import { BaseModel } from "./model.base";

export interface IMessage extends BaseModel {
    randomId: number;
    name: string
    randomHeghth:string
  }