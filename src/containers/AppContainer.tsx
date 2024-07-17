import {Provider} from "react-redux";
import {useMemo} from "react";
import {configureStore} from "../store/configureStore";
import ResponsiveContainer from "./ResponsiveContainer";

function AppContainer() {
    const store = useMemo(() => configureStore(), []);

    if (!store) {
        return null;
    }
    return (
        <Provider store={store.store}>
            <ResponsiveContainer/>
        </Provider>
    );
}

export default AppContainer;