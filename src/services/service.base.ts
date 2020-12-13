import axios, { AxiosInstance, AxiosRequestConfig, CancelTokenSource } from "axios";
import { Setup } from "../config/setup";
import { IToken } from "../model/model.token";
import { action_set_token } from "../redux/action/token";
import { Store2 } from "../redux/store";
import { Utility } from "../script/utility";

export interface IAPI_ResponseList<T> {
  data: { result: T[] };
}
export interface IAPI_Response<T> {
  data: T;
}

export abstract class BaseService {
  baseURL = Setup.endpoint;
  private static token: IToken | null | undefined;
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create(this.axiosRequestConfig);
    this.set_store_interceptors(this.axiosInstance);
  }

  private _axiosRequestConfig: AxiosRequestConfig = {
    baseURL: this.baseURL,
    headers: { "Content-Type": "application/json" },
  };
  set axiosRequestConfig(config: AxiosRequestConfig) {
    if (config.headers) {
      config.headers = {
        ...this._axiosRequestConfig.headers,
        ...config.headers,
      };
    }
    this._axiosRequestConfig = { ...this._axiosRequestConfig, ...config };
  }
  get axiosRequestConfig() {
    return this._axiosRequestConfig;
  }

  get axiosTokenInstance(): AxiosInstance {
    let newAX_instance: AxiosInstance;

    let token = BaseService.token;
    if (!BaseService.token || !BaseService.token.id) {
      token = Store2.getState().token;
      if (token) BaseService.setToken(token);
    }
    if (token && token.id) {
      this.axiosRequestConfig = {
        headers: { authorization: "Bearer " + token.id },
      };
      newAX_instance = axios.create(this.axiosRequestConfig);
    } else {
      newAX_instance = this.axiosInstance;
    }
    this.set_401_interceptors(newAX_instance);
    this.set_store_interceptors(newAX_instance);
    return newAX_instance;
  }

  private static setToken(t: IToken) {
    BaseService.token = t;
  }

  static removeToken() {
    BaseService.token = undefined;
  }

  set_401_interceptors(ax_instance: AxiosInstance) {
    ax_instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const persistedAuth = Store2.getState().authentication;
        if (
          !error.response ||
          (error.response && error.response.status !== 401) ||
          !persistedAuth
        ) {
          return Promise.reject(error);
        }

        const authObj = Utility.get_decode_auth(persistedAuth);
        const tokenRes:
          | IAPI_Response<IToken>
          | undefined = await this.getTokenfromServer(authObj).catch(
          (error) => {
            return new Promise((resolve, reject) => {
              reject(error);
            });
          }
        );

        if (tokenRes) {
          Store2.dispatch(action_set_token(tokenRes.data));
          BaseService.setToken(tokenRes.data);

          const config = error.config;
          config.headers["authorization"] = `Bearer ${tokenRes.data.id}`;
          // config.baseURL = '';

          return new Promise((resolve, reject) => {
            axios
              .request(config)
              .then((response) => {
                resolve(response);
              })
              .catch((error) => {
                reject(error);
              });
          });
        }
      }
    );
  }

  getTokenfromServer(data: {
    username: string;
    password: string;
  }): Promise<IAPI_Response<IToken>> 
  {
    let username_password_str = data.username + ":" + data.password; // + 'test';
    let hash = btoa(unescape(encodeURIComponent(username_password_str)));
    let basic = "Basic " + hash;

    const instance = axios.create({
      baseURL: this.baseURL,
      headers: { "Content-Type": "application/json", Authorization: basic },
    });
    
        const mock: any = {
           data: {
            expiration_date: 1,
               username: data.username,
               id: '1',
           }
       };
       return Promise.resolve(mock); 
  }

  set_store_interceptors(ax_instance: AxiosInstance) {
  
    ax_instance.interceptors.response.use(
      (response) => {
        try {
        
        } catch (e) {
         
        }

        return response;
      },
      (error) => {
        // return error;
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    );
  }
  static msgRequestCanceled = "request-canceled";
  static cancelTokenSource(): CancelTokenSource {
    return axios.CancelToken.source();
  }
}
