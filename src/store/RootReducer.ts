import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AnyAction } from "../utils/ReducerUtils";
import { appReducer, appReducerPersistConfig, AppReducerState } from "../reducers/AppReducer";

export interface AppStoreState {
  readonly app: AppReducerState;
}

export const rootReducer = combineReducers<any>({
  app: persistReducer<AppReducerState, AnyAction>(
    {
      ...appReducerPersistConfig,
      key: "app",
      storage,
    },
    appReducer,
  ),
});
