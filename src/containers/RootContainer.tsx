import {Route, Routes, useLocation, useNavigate} from "react-router";
import {RoutesEnum} from "../constants/Routes";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import {AnimatePresence, motion} from "framer-motion";
import Loan from "../pages/Loan";
import {lazy, Suspense, useCallback, useEffect, useMemo, useState} from "react";
import Bank from "../pages/Bank";
import Crm from "../pages/Crm";
import Equaring from "../pages/Equaring";
import Turkney from "../pages/Turkney";
import Solutions from "../pages/Solutions";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import bgWhite from "../assets/bg-light.jpg";
import bgDark from "../assets/bg-dark.png";
import logo from "../assets/logo.svg";
import _ from "lodash";
import {preloadImages} from "../helpers/preloadImages";
import bgMain from "../assets/bg-main.jpg";

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
    const navigate = useNavigate();
    const [scrolling, setScrolling] = useState(false);
    const [loading, setLoading] = useState(true);
    const [touchStartY, setTouchStartY] = useState<number | null>(null);
    const [touchEndY, setTouchEndY] = useState<number | null>(null);

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

    const pages: string[] = [
        RoutesEnum?.Main,
        RoutesEnum.About,
        RoutesEnum.Loan,
        RoutesEnum.Bank,
        RoutesEnum.Crm,
        RoutesEnum.Equaring,
        RoutesEnum.Turkney,
        RoutesEnum.Solutions,
        RoutesEnum.Team,
        RoutesEnum.Contact
    ]

    const scrollCheck = useCallback((event: any) => {
        const currentIndex = pages.indexOf(location.pathname);

        if (event.key === "ArrowUp" && currentIndex > 0) {
                navigate(pages[currentIndex - 1])
        } else if (event.key === "ArrowDown" && currentIndex < pages.length - 1) {
            navigate(pages[currentIndex + 1])
        }
    }, [location.pathname])
    const handleScroll = _.throttle((e: any) => {
        if (scrolling) return;
        setScrolling(true);
        const currentIndex = pages.indexOf(location.pathname);
        if (e.deltaY > 0 && currentIndex < pages.length - 1) {
            navigate(pages[currentIndex + 1])
        } else if (e.deltaY < 0 && currentIndex > 0) {
            navigate(pages[currentIndex - 1])
        }
        const timer = setTimeout(() => setScrolling(false), 2000);
        return () => {
            clearTimeout(timer)
        }
    }, 1000)
    useEffect(() => {
        window.addEventListener("keydown", scrollCheck)
        return () => {
            window.removeEventListener("keydown", scrollCheck)
        }
    }, [scrollCheck])
    useEffect(() => {
        window.addEventListener('wheel', handleScroll)
        return () => {
            window.removeEventListener("wheel", handleScroll)
        }
    }, [location, handleScroll])

    useEffect(() => {
        preloadImages([bgWhite, bgDark, bgMain]).then((res) => res)
        const timer1 = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => {
            clearTimeout(timer1);
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            setTouchStartY(e.targetTouches[0].clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            setTouchEndY(e.targetTouches[0].clientY);
        };

        const handleTouchEnd = () => {
            if (!touchStartY || !touchEndY) return;
            const currentIndex = pages.indexOf(location.pathname);
            const distance = touchStartY - touchEndY;
            const isSwipe = Math.abs(distance) > 50;

            if (isSwipe) {
                if (distance > 0) {
                    navigate(pages[currentIndex + 1])
                } else {
                    navigate(pages[currentIndex - 1])
                }
            }

            setTouchStartY(null);
            setTouchEndY(null);
        };

        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [touchStartY, touchEndY])

    return (
            <>
            {loading ? <motion.div animate={{ opacity: 1 }}
                                   initial={{ opacity: 0 }}
                                   exit={{ opacity: 0 }}
                                   transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-black w-screen h-screen">
                <div className="w-full h-full justify-center flex items-center mx-auto">
                    <motion.img animate={{y: [10, -10, 10]}}
                                exit={{ opacity: 0 }}
                                width={200}
                                height={200}
                                transition={{duration: 3, repeat: Infinity, repeatDelay: 0.1, repeatType: "loop"}}
                                src={logo} alt=""/>
                </div>
            </motion.div> :
                <Suspense fallback={
                    <motion.div
                        className="bg-black w-screen h-screen">
                        <div className="w-full h-full justify-center flex items-center mx-auto">
                            <motion.img animate={{y: [10, -10, 10]}}
                                        transition={{duration: 2, repeat: Infinity, repeatDelay: 0.1, repeatType: "loop"}}
                                        src={logo} alt=""/>
                        </div>
                    </motion.div>}>
                    <MainLayout bgVideo={location.pathname === RoutesEnum.Main} bgImage={bgImage}>
                        <AnimatePresence mode="wait">
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
                </Suspense>}
       </>
    );
}

export default RootContainer;