import logoWhite from "../assets/logo.svg";
import logoBlack from "../assets/logo-black.svg";
import MainMobile from "../pages/mobile/MainMobile";
import AboutMobile from "../pages/mobile/AboutMobile";
import LoanMobile from "../pages/mobile/LoanMobile";
import BankMobile from "../pages/mobile/BankMobile";
import CrmMobile from "../pages/mobile/CrmMobile";
import EquaringMobile from "../pages/mobile/EquaringMobile";
import TurkneyMobile from "../pages/mobile/TurkneyMobile";
import SolutionsMobile from "../pages/mobile/SolutionsMobile";
import TeamMobile from "../pages/mobile/TeamMobile";
import ContactsMobile from "../pages/mobile/ContactsMobile";
import {useEffect, useState} from "react";
import LanguageSwitcher from "../helpers/LanguageSwitcher";
import Weather from "../helpers/Weather";
import {useShallowEqualSelector} from "../helpers/useShallowSelector";
import {appBgImageSelector} from "../reducers/AppReducer";


function MobileContainer() {
    const [scroll, setScroll] = useState(false);
    const [coords, setCoords] = useState({long: 69.240562, lat: 41.311081});
    const [denied, setDenied] = useState(true);
    const bgImage = useShallowEqualSelector(appBgImageSelector);
    useEffect(() => {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position) {
                setDenied(false);
                setCoords({lat: position.coords.latitude, long:position.coords.longitude});
                // выводит координаты местоположения пользователя
            }, function(error) {
                if (error.code) {
                    setDenied(true)
                }
            });
        }
    }, [navigator.geolocation])

    const addClass = () => {
        if (window.scrollY === 0) {
            setScroll(false)
        } else {
            setScroll(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', addClass);
        return () => {
            window.removeEventListener("scroll", addClass)
        }
    }, [])
    return (
        <div className="flex flex-col relative">
            <div id="header"
                 className={`fixed header w-full left-0 h-[65px] 2xl:h-[80px] ${scroll ?  (bgImage === 1 ? "black top-0" : "white top-0") : "top-2"} flex`}
                 style={{zIndex: 100}}>
                <div className="mx-auto custom-container w-full flex justify-between text-center items-center">
                    <a href="#main"><img src={bgImage === 1 ? logoWhite : logoBlack} alt=""
                         className="w-[140px] lg:w-[200px] 2xl:w-[250px] items-center text-center mx-6 md:mx-2 top-0"/>
                    </a>
                    <div className="flex items-center text-center gap-6 mx-4 lg:mx-0">
                        <div className="hidden lg:flex items-center text-center gap-2">
                            <Weather coords={coords} denied={denied} bgImage={bgImage}/>
                            {/*<AirQuality coords={coords}/>*/}
                        </div>
                        <LanguageSwitcher bgImage={bgImage} />
                    </div>
                </div>
            </div>
            {/*<motion.ul*/}
            {/*    className={`${bgImage === 1 ? "text-white" : "text-black"}*/}
            {/*         z-40 text-end flex flex-col*/}
            {/*         hidden md:flex*/}
            {/*         md:fixed*/}
            {/*         w-11/12*/}
            {/*         xl:gap-4 xl:text-[16px]*/}
            {/*           2xl:gap-6 2xl:text-[19px] items-end absolute container*/}
            {/*           lg:gap-3 lg:text-[15px]*/}
            {/*             top-1/4 font-light ${bgImage === 2 ? "text-[#353535] font-light" : ""}`}>*/}
            {/*    <Link to={RoutesEnum.Main}>*/}
            {/*        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}*/}
            {/*                   transition={{duration: 0.5, delay: 0.1, ease: "easeInOut"}}*/}
            {/*                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer */}
            {/*                      `}>*/}
            {/*            {translate("TITLE_MENU_PAGE_TITLE_1")}*/}
            {/*        </motion.li>*/}
            {/*    </Link>*/}
            {/*    <Link to={RoutesEnum.About}>*/}
            {/*        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}*/}
            {/*                   transition={{duration: 0.5, delay: 0.2, ease: "easeInOut"}}*/}
            {/*                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer*/}
            {/*                       `}>*/}
            {/*            {translate("TITLE_MENU_PAGE_TITLE_2")}*/}
            {/*        </motion.li>*/}
            {/*    </Link>*/}
            {/*    <Link to={RoutesEnum.Loan}>*/}
            {/*        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}*/}
            {/*                   transition={{duration: 0.5, delay: 0.25, ease: "easeInOut"}}*/}
            {/*                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer */}
            {/*                      `}>*/}
            {/*            {translate("TITLE_MENU_PAGE_TITLE_3")}*/}
            {/*        </motion.li>*/}
            {/*    </Link>*/}
            {/*    <Link to={RoutesEnum.Bank}>*/}
            {/*        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}*/}
            {/*                   transition={{duration: 0.5, delay: 0.3, ease: "easeInOut"}}*/}
            {/*                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer */}
            {/*                      `}>*/}
            {/*            {translate("TITLE_MENU_PAGE_TITLE_4")}*/}
            {/*        </motion.li>*/}
            {/*    </Link>*/}
            {/*    <Link to={RoutesEnum.Crm}>*/}
            {/*        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}*/}
            {/*                   transition={{duration: 0.5, delay: 0.35, ease: "easeInOut"}}*/}
            {/*                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer*/}
            {/*                       `}>*/}
            {/*            {translate("TITLE_MENU_PAGE_TITLE_5")}*/}
            {/*        </motion.li>*/}
            {/*    </Link>*/}
            {/*    <Link to={RoutesEnum.Equaring}>*/}
            {/*        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}*/}
            {/*                   transition={{duration: 0.5, delay: 0.4, ease: "easeInOut"}}*/}
            {/*                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer */}
            {/*                      `}>*/}
            {/*            {translate("TITLE_MENU_PAGE_TITLE_6")}*/}
            {/*        </motion.li>*/}
            {/*    </Link>*/}
            {/*    /!*<Link to={RoutesEnum.Portfolio}>*!/*/}
            {/*    /!*    <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}*!/*/}
            {/*    /!*               transition={{duration: 0.5, delay: 0.45, ease: "easeInOut"}}*!/*/}
            {/*    /!*               className={`text-[16px] ${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} font-semibold cursor-pointer*!/*/}
            {/*    /!*                ${location.pathname === RoutesEnum.Portfolio ? ( bgImage === 1 ? "active text-[#34C924]" : "active-blue text-[#003ABC]") : ""}`}>Портфолию*!/*/}
            {/*    /!*    </motion.li>*!/*/}
            {/*    /!*</Link>*!/*/}
            {/*    <Link to={RoutesEnum.Turkney}>*/}
            {/*        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}*/}
            {/*                   transition={{duration: 0.5, delay: 0.5, ease: "easeInOut"}}*/}
            {/*                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer*/}
            {/*                       `}>*/}
            {/*            {translate("TITLE_MENU_PAGE_TITLE_7")}*/}
            {/*        </motion.li>*/}
            {/*    </Link>*/}
            {/*    <Link to={RoutesEnum.Solutions}>*/}
            {/*        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}*/}
            {/*                   transition={{duration: 0.5, delay: 0.55, ease: "easeInOut"}}*/}
            {/*                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer */}
            {/*                      `}>*/}
            {/*            {translate("TITLE_MENU_PAGE_TITLE_8")}*/}
            {/*        </motion.li>*/}
            {/*    </Link>*/}
            {/*    <Link to={RoutesEnum.Team}>*/}
            {/*        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}*/}
            {/*                   transition={{duration: 0.5, delay: 0.6, ease: "easeInOut"}}*/}
            {/*                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer*/}
            {/*                       `}>*/}
            {/*            {translate("TITLE_MENU_PAGE_TITLE_9")}*/}
            {/*        </motion.li>*/}
            {/*    </Link>*/}
            {/*    <Link to={RoutesEnum.Contact}>*/}
            {/*        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}*/}
            {/*                   transition={{duration: 0.5, delay: 0.65, ease: "easeInOut"}}*/}
            {/*                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"}*/}
            {/*                       cursor-pointer*/}
            {/*                        `}>{translate("TITLE_MENU_PAGE_TITLE_10")}*/}
            {/*        </motion.li>*/}
            {/*    </Link>*/}
            {/*</motion.ul>*/}
            <MainMobile/>
            <AboutMobile/>
            <LoanMobile/>
            <BankMobile/>
            <CrmMobile/>
            <EquaringMobile/>
            <TurkneyMobile/>
            <SolutionsMobile/>
            <TeamMobile/>
            <ContactsMobile/>
        </div>
    );
}

export default MobileContainer;