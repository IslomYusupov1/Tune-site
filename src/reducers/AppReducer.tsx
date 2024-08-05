import {update} from "immupdate";
import {PersistConfig} from "redux-persist";
import {AppLanguage, getDefaultLanguage} from "../i18n/I18nContext";
import {createReducer, createRootReducer, PerformAction} from "../utils/ReducerUtils";
import {AppStoreState} from "../store/RootReducer";

export const appReducerPersistConfig: Partial<PersistConfig<AppReducerState>> = {
    whitelist: ["language", "bgImage"],
};

interface SwitchLanguageMeta {
    readonly language: AppLanguage;
}
interface SwitchBgImageMeta {
    readonly bgImage: number;
}

enum ReducerActions {
    SwitchLanguage = "App/SwitchLanguage",
    SwitchBgImage = "App/SwitchBgImage",
}

export interface AppReducerState {
    readonly language: AppLanguage;
    readonly bgImage: number;
}

function getState(): AppReducerState {
    return {
        language: getDefaultLanguage(),
        bgImage: 1,
    };
}

export const appReducer = createRootReducer<AppReducerState>(
    getState(),

    createReducer([ReducerActions.SwitchLanguage], (state, {meta}) =>
        update(state, {language: meta.language}),
    ),
    createReducer([ReducerActions.SwitchBgImage], (state, {meta}) =>
        update(state, {bgImage: meta.bgImage}),
    ),
);

// ==================
// Selectors
// ==================

export const appLanguageSelector = ({app}: AppStoreState): AppLanguage => app.language;

export const appBgImageSelector = ({app}: AppStoreState): number => app.bgImage;


// ==================
// Actions
// ==================

export function switchLanguage(meta: SwitchLanguageMeta): PerformAction<SwitchLanguageMeta> | any {
    return {type: ReducerActions.SwitchLanguage, meta};
}
export function switchBgImage(meta: SwitchBgImageMeta): PerformAction<SwitchBgImageMeta> | any {
    return {type: ReducerActions.SwitchBgImage, meta};
}