import {BrowserRouter} from "react-router-dom";
import RootContainer from "./RootContainer";
import MobileContainer from "./MobileContainer";
import {isMobile} from 'react-device-detect';

function AppContainer() {
    return (
        <BrowserRouter>
            {isMobile ? <MobileContainer/> : <RootContainer/>}
        </BrowserRouter>
    );
}

export default AppContainer;