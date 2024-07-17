import { Action } from "redux";
import { DELETE, update } from "immupdate";
import { PersistConfig } from "redux-persist";

import { AppStoreState } from "../store/RootReducer";
import { createReducer, createRootReducer, PerformAction } from "../utils/ReducerUtils";

export const authReducerPersistConfig: Partial<PersistConfig<AuthReducerState>> = {
  whitelist: ["token", "refreshToken", "authDate", "tokenTime"],
};

interface SetTokenMeta {
  readonly token: string;
}

interface SetRefreshTokenMeta {
  readonly refreshToken: string;
}

interface SetAuthDateMeta {
  readonly authDate: number;
}

interface SetTokenTimeMeta {
  readonly tokenTime: number;
}

interface SetAuthDateExpiredMeta {
  readonly state: boolean;
}

enum ReducerActions {
  SetToken = "Auth/SetToken",
  SetRefreshToken = "Auth/SetRefreshToken",
  ResetToken = "Auth/ResetToken",
  SetTokenTime = "Auth/SetTokenTime",
  SetAuthDate = "Auth/SetAuthDate",
  SetAuthDateExpired = "Auth/SetAuthDateExpired",
}

export interface AuthReducerState {
  readonly token?: string;
  readonly refreshToken?: string;
  readonly authDate?: number;
  readonly authDateExpired: boolean;
  readonly tokenTime?: number;
}

function getState(): AuthReducerState {
  return {
    authDateExpired: false,
  };
}

export const authReducer = createRootReducer<AuthReducerState>(
  getState(),

  createReducer([ReducerActions.SetToken], (state, { meta }) =>
    update(state, { token: meta.token, authDate: Date.now() }),
  ),
  createReducer([ReducerActions.SetRefreshToken], (state, { meta }) =>
    update(state, { refreshToken: meta.refreshToken }),
  ),

  createReducer([ReducerActions.ResetToken], (state) =>
    update(state, { token: DELETE, authDate: DELETE }),
  ),

  createReducer([ReducerActions.SetAuthDate], (state, { meta }) =>
    update(state, { authDate: meta.authDate }),
  ),
  createReducer([ReducerActions.SetTokenTime], (state, { meta }) =>
    update(state, { tokenTime: meta.tokenTime }),
  ),
  createReducer([ReducerActions.SetAuthDateExpired], (state, { meta }) =>
    update(state, { authDateExpired: meta.state }),
  ),
);

// ==================
// Selectors
// ==================

export function tokenSelector(state: AppStoreState): string | undefined {
  return state.auth.token;
}

export function refreshTokenSelector(state: AppStoreState): string | undefined {
  return state.auth.refreshToken;
}

export function authDateSelector(state: AppStoreState): number | undefined {
  return state.auth.authDate;
}

export function tokenTimeSelector(state: AppStoreState): number | undefined {
  return state.auth.tokenTime;
}

export const authDateExpiredSelector = ({ auth }: AppStoreState): boolean => auth.authDateExpired;

// ==================
// Actions
// ==================

export function setToken(meta: SetTokenMeta): PerformAction<SetTokenMeta> {
  return { meta, type: ReducerActions.SetToken };
}

export function setRefreshToken(meta: SetRefreshTokenMeta): PerformAction<SetRefreshTokenMeta> {
  return { meta, type: ReducerActions.SetRefreshToken };
}
export function setTokenTime(meta: SetTokenTimeMeta): PerformAction<SetTokenTimeMeta> {
  return { meta, type: ReducerActions.SetTokenTime };
}
export function resetToken(): Action {
  return { type: ReducerActions.ResetToken };
}

export function setAuthDate(meta: SetAuthDateMeta): PerformAction<SetAuthDateMeta> {
  return { meta, type: ReducerActions.SetAuthDate };
}

export function setAuthDateExpired(
  meta: SetAuthDateExpiredMeta,
): PerformAction<SetAuthDateExpiredMeta> {
  return { meta, type: ReducerActions.SetAuthDateExpired };
}
