import {
    combineReducers,
    createStore,
    ReducersMapObject,
    AnyAction,
  } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers: ReducersMapObject<any, AnyAction> = {

  };
  
  export const main_reducer = combineReducers(reducers);
  
  const persistConfig = {
    key: "root",
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, main_reducer);
  
  export const Store2 = createStore(persistedReducer);
  export const persistor = persistStore(Store2);
  