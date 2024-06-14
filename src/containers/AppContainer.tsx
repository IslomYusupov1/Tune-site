import {BrowserRouter} from "react-router-dom";
import RootContainer from "./RootContainer";

function AppContainer() {
    return (
        <BrowserRouter>
            <RootContainer />
        </BrowserRouter>
    );
}

export default AppContainer;