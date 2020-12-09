import {
    combineReducers,
    createStore,
    ReducersMapObject,
    AnyAction,
    Reducer,
  } from "redux";
  import { reducer as UserReducer } from "./reducer/user";
  import { reducer as TokenReducer } from "./reducer/token";
  import { reducer as UsersReducer } from "./reducer/users";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { IUser } from "../model/model.user";
import { IToken } from "../model/model.token";

const reducers: ReducersMapObject<any, AnyAction> = {
  logged_in_user: UserReducer as Reducer<IUser | null, AnyAction>,
  token: TokenReducer as Reducer<IToken|null, AnyAction>,
  users: UsersReducer as Reducer<Array<IUser>, AnyAction>
  };
  
  export const main_reducer = combineReducers(reducers);
  
  const persistConfig = {
    key: "root",
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, main_reducer);
  
  export const Store2 = createStore(persistedReducer);
  export const persistor = persistStore(Store2);
  