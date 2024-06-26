import {Route, Routes, useLocation, useNavigate} from "react-router";
import {RoutesEnum} from "../constants/Routes";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import {AnimatePresence} from "framer-motion";
import Loan from "../pages/Loan";
import {lazy, Suspense, useEffect, useMemo} from "react";
import Bank from "../pages/Bank";
import Crm from "../pages/Crm";
import Equaring from "../pages/Equaring";
import Turkney from "../pages/Turkney";
import Solutions from "../pages/Solutions";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import {motion} from "framer-motion";
import bgWhite from "../assets/bg-light.jpg";
import bgDark from "../assets/bg-dark.png";
import logo from "../assets/logo.svg";

const MainLazy = lazy(() => import('../pages/Main'));
// const AboutLazy = lazy(() => import('../pages/About'));
// const LoanLazy = lazy(() => import('../pages/Loan'));
// const BankLazy = lazy(() => import('../pages/Bank'));
// const CrmLazy = lazy(() => import('../pages/Crm'));
// const EquiringLazy = lazy(() => import('../pages/Equaring'));
// const TurnkeyLazy = lazy(() => import('../pages/Turkney'));
// const SolutionLazy = lazy(() => import('../pages/Solutions'));
// const TeamLazy = lazy(() => import('../pages/Team'));
// const ContactLazy = lazy(() => import('../pages/Contact'));

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

    const navigate = useNavigate();
    const scrollCheck = (event: any) => {
        if (event.key === "ArrowUp") {
            if (location.pathname === RoutesEnum.About) {
                navigate(RoutesEnum.Main)
            } else if (location.pathname === RoutesEnum.Loan) {
                navigate(RoutesEnum.About)
            } else if (location.pathname === RoutesEnum.Bank) {
                navigate(RoutesEnum.Loan)
            } else if (location.pathname === RoutesEnum.Crm) {
                navigate(RoutesEnum.Bank)
            } else if (location.pathname === RoutesEnum.Equaring) {
                navigate(RoutesEnum.Crm)
            } else if (location.pathname === RoutesEnum.Turkney) {
                navigate(RoutesEnum.Equaring)
            } else if (location.pathname === RoutesEnum.Solutions) {
                navigate(RoutesEnum.Turkney)
            } else if (location.pathname === RoutesEnum.Team) {
                navigate(RoutesEnum.Solutions)
            } else if (location.pathname === RoutesEnum.Contact) {
                navigate(RoutesEnum.Team)
            }
        } else if (event.key === "ArrowDown") {
            if (location.pathname === RoutesEnum.Main) {
                navigate(RoutesEnum.About)
            } else if (location.pathname === RoutesEnum.About) {
                navigate(RoutesEnum.Loan)
            } else if (location.pathname === RoutesEnum.Loan) {
                navigate(RoutesEnum.Bank)
            } else if (location.pathname === RoutesEnum.Bank) {
                navigate(RoutesEnum.Crm)
            } else if (location.pathname === RoutesEnum.Crm) {
                navigate(RoutesEnum.Equaring)
            } else if (location.pathname === RoutesEnum.Equaring) {
                navigate(RoutesEnum.Turkney)
            } else if (location.pathname === RoutesEnum.Turkney) {
                navigate(RoutesEnum.Solutions)
            } else if (location.pathname === RoutesEnum.Solutions) {
                navigate(RoutesEnum.Team)
            } else if (location.pathname === RoutesEnum.Team) {
                navigate(RoutesEnum.Contact)
            }
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", scrollCheck)
        return () => {
            window.removeEventListener("keydown", scrollCheck)
        }
    })

    useEffect(() => {
        const imageList = [bgWhite, bgDark]
        imageList.forEach((image) => {
            new Image().src = image
        });
    }, [])
    return (
        <Suspense fallback={
            <motion.div
                className="bg-black w-screen h-screen">
                <div className="w-full h-full justify-center flex items-center mx-auto">
                    <motion.img animate={{y: [10, -10, 10]}}
                                transition={{duration: 2, repeat: Infinity, repeatDelay: 0.1, repeatType: "loop"}}
                                src={logo} alt=""/></div>
            </motion.div>}>
            <MainLayout bgVideo={location.pathname === RoutesEnum.Main} bgImage={bgImage}>
                <AnimatePresence>
                    <Routes location={location} key={location.key}>
                        <Route element={<MainLazy/>} path={RoutesEnum.Main}/>
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
        </Suspense>
    );
}

export default RootContainer;