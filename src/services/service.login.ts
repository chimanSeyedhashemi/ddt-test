import { BaseService, IAPI_Response } from "./service.base";
import { IToken } from "../model/model.token";
import { IUser } from "../model/model.user";

export class LoginService extends BaseService {

  login(data: {
    username: string;
    password: string;
  }): Promise<IAPI_Response<IToken>> {
    return this.getTokenfromServer(data);
  }

  profile(): Promise<IAPI_Response<IUser>> {
    const mock: any = {
      data: {
        name: "قلی",
        username: "gholi",
        id: "1",
        phone: "0912345678",
      },
    };
    return Promise.resolve(mock);
  }
}
