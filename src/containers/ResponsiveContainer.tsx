import {I18nProvider} from "../i18n/I18nContext";
import {isMobile} from "react-device-detect";
import MobileContainer from "./MobileContainer";
import RootContainer from "./RootContainer";
import {BrowserRouter} from "react-router-dom";
import {useShallowEqualSelector} from "../helpers/useShallowSelector";
import {appLanguageSelector} from "../reducers/AppReducer";

function ResponsiveContainer() {
    const language = useShallowEqualSelector(appLanguageSelector);
    return (
        <BrowserRouter>
            <I18nProvider data={{language}}>
                {isMobile ? <MobileContainer/> : <RootContainer/>}
            </I18nProvider>
        </BrowserRouter>
    );
}

export default ResponsiveContainer;