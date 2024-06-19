import {Route, Routes, useLocation} from "react-router";
import Main from "../pages/Main";
import {RoutesEnum} from "../constants/Routes";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import {AnimatePresence} from "framer-motion";
import Loan from "../pages/Loan";
import {useMemo} from "react";
import Bank from "../pages/Bank";
import Crm from "../pages/Crm";
import Equaring from "../pages/Equaring";
import Turkney from "../pages/Turkney";
import Solutions from "../pages/Solutions";
import Team from "../pages/Team";
import Contact from "../pages/Contact";

function RootContainer() {
    const location = useLocation();
    const bgImage = useMemo(() => {
        return (location.pathname === RoutesEnum.Main) || (location.pathname === RoutesEnum.About)
        || (location.pathname === RoutesEnum?.Bank)
        || (location.pathname === RoutesEnum.Equaring) || (location.pathname === RoutesEnum.Turkney)
        || (location.pathname === RoutesEnum.Team)
            ? 1 :
            (location.pathname === RoutesEnum.Loan) || (location.pathname === RoutesEnum.Crm) ||
            (location.pathname === RoutesEnum.Portfolio) || (location.pathname === RoutesEnum.Solutions)
            || (location.pathname === RoutesEnum.Contact)
                ? 2 : 0;
    }, [location])
    return (
        <MainLayout bgVideo={location.pathname === RoutesEnum.Main} bgImage={bgImage}>
            <AnimatePresence>
                <Routes location={location} key={location.key}>
                    <Route element={<Main/>} path={RoutesEnum.Main}/>
                    <Route element={<About/>} path={RoutesEnum.About}/>
                    <Route element={<Loan/>} path={RoutesEnum.Loan}/>
                    <Route element={<Bank/>} path={RoutesEnum.Bank}/>
                    <Route element={<Crm/>} path={RoutesEnum.Crm}/>
                    <Route element={<Equaring/>} path={RoutesEnum.Equaring}/>
                    {/*<Route element={<Portfolio/>} path={RoutesEnum.Portfolio}/>*/}
                    <Route element={<Turkney/>} path={RoutesEnum.Turkney}/>
                    <Route element={<Solutions/>} path={RoutesEnum.Solutions}/>
                    <Route element={<Team/>} path={RoutesEnum.Team}/>
                    <Route element={<Contact/>} path={RoutesEnum.Contact}/>
                </Routes>
            </AnimatePresence>
        </MainLayout>
    );
}

export default RootContainer;