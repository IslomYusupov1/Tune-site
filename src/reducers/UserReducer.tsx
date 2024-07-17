import { Action } from "redux";
import { DELETE, update } from "immupdate";
import { PersistConfig } from "redux-persist";
import { AppStoreState } from "../store/RootReducer";
import { createReducer, createRootReducer, PerformAction } from "../utils/ReducerUtils";
import { userInfo } from "../api/auth/AuthDTO";

export const userReducerPersistConfig: Partial<PersistConfig<UserReducerState>> = {
  whitelist: ["userId", "position", "exclusions", "userInformation", "perPage"],
};

interface SetUserMeta {
  readonly userId: string;
}

interface SetPerPageMeta {
  readonly perPage: string;
}

interface SetUserInformationMeta {
  readonly userInformation: userInfo;
}

interface SetUserTableColumnPositionMeta {
  readonly position: any;
}

interface SetUserTableColumnExclusionsMeta {
  readonly exclusions: any[];
}

enum ReducerActions {
  SetUserId = "User/SetUserId",
  ClearUserId = "User/ClearUserId",
  SetUserTableColumnPosition = "User/SetUserTableColumnPosition",
  ClearUserTableColumnPosition = "User/ClearUserTableColumnPosition",
  SetUserTableColumnExclusions = "User/SetUserTableColumnExclusions",
  SetUserInformation = "User/SetUserInformation",
  SetUserPerPage = "User/SetUserPage",
}

export interface UserReducerState {
  readonly userId?: string;
  readonly position?: any;
  readonly exclusions: any;
  readonly userInformation?: userInfo;
  readonly perPage?: number;
}

function getState(): UserReducerState {
  return {
    exclusions: [],
  };
}

export const userReducer = createRootReducer<UserReducerState>(
  getState(),

  createReducer([ReducerActions.SetUserId], (state, { meta }) =>
    update(state, { userId: meta.userId }),
  ),

  createReducer([ReducerActions.ClearUserId], (state) => update(state, { userId: DELETE })),

  createReducer([ReducerActions.SetUserTableColumnPosition], (state, { meta }) =>
    update(state, { position: meta.position }),
  ),

  createReducer([ReducerActions.ClearUserTableColumnPosition], (state) =>
    update(state, { position: DELETE }),
  ),

  createReducer([ReducerActions.SetUserTableColumnExclusions], (state, { meta }) =>
    update(state, { exclusions: meta.exclusions }),
  ),
  createReducer([ReducerActions.SetUserInformation], (state, { meta }) =>
    update(state, { userInformation: meta.userInformation }),
  ),
  createReducer([ReducerActions.SetUserPerPage], (state, { meta }) =>
    update(state, { perPage: meta.perPage }),
  ),
);

// ==================
// Selectors
// ==================

export const userSelector = ({ user }: AppStoreState): string | undefined | any => user?.userId;

export const userTableColumnPositionSelector = ({
  user,
}: AppStoreState): string | undefined | any => user?.position;

export const userTableColumnExclusionsSelector = ({
  user,
}: AppStoreState): string | undefined | any => user?.exclusions;

export const userInformationSelector = ({ user }: AppStoreState): userInfo | undefined =>
  user?.userInformation;

export const userPerPageSelector = ({ user }: AppStoreState): number | undefined => user?.perPage;
// ==================
// Actions
// ==================

export function setUser(meta: SetUserMeta): PerformAction<SetUserMeta> {
  return { type: ReducerActions.SetUserId, meta };
}

export function clearUser(): Action {
  return { type: ReducerActions.ClearUserId };
}

export function setUserTablePosition(
  meta: SetUserTableColumnPositionMeta,
): PerformAction<SetUserTableColumnPositionMeta> {
  return { type: ReducerActions.SetUserTableColumnPosition, meta };
}
export function clearUserTablePosition(): Action {
  return { type: ReducerActions.ClearUserTableColumnPosition };
}

export function setUserTableExclusions(
  meta: SetUserTableColumnExclusionsMeta,
): PerformAction<SetUserTableColumnExclusionsMeta> {
  return { type: ReducerActions.SetUserTableColumnExclusions, meta };
}

export function setUserInformation(
  meta: SetUserInformationMeta,
): PerformAction<SetUserInformationMeta> {
  return { type: ReducerActions.SetUserInformation, meta };
}
export function setUserPerPage(meta: SetPerPageMeta): PerformAction<SetPerPageMeta> {
  return { type: ReducerActions.SetUserPerPage, meta };
}
