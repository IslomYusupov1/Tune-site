import {BrowserRouter} from "react-router-dom";
import RootContainer from "./RootContainer";

function AppContainer() {

    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', () => {
    //         navigator.serviceWorker.register('/service-worker.js')
    //             .then((registration) => {
    //                 console.log('SW registered: ', registration);
    //             })
    //             .catch((registrationError) => {
    //                 console.log('SW registration failed: ', registrationError);
    //             });
    //     });
    // }
    return (
        <BrowserRouter>
            <RootContainer/>
        </BrowserRouter>
    );
}

export default AppContainer;