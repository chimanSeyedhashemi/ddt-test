import { IToken } from "../model/model.token";
import { IUser } from "../model/model.user";


export interface IReduxState {
  logged_in_user: IUser | null;
  token:IToken|null,
  users:Array<IUser>
}
