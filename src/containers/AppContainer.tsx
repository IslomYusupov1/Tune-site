import {BrowserRouter} from "react-router-dom";
import RootContainer from "./RootContainer";
import {useMobileDetect} from "../helpers/useIsMobileDetect";
import MobileContainer from "./MobileContainer";

function AppContainer() {
    const isMobile = useMobileDetect();
    return (
        <BrowserRouter>
            {isMobile ? <MobileContainer/> : <RootContainer/>}
        </BrowserRouter>
    );
}

export default AppContainer;