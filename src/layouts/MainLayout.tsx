import {ReactNode, useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {RoutesEnum} from "../constants/Routes";
import logo from "../assets/logo.svg";
import logoBlack from "../assets/logo-black.svg";
import cosmoImage from "../assets/cosmo-web.svg";
import bgMain from "../assets/bg-main.jpg";
import LanguageSwitcher from "../helpers/LanguageSwitcher";
import {useI18n} from "../i18n/I18nContext";
import Weather from "../helpers/Weather";
// import AirQuality from "../helpers/AirQuality";

interface Props {
    readonly children: ReactNode;
    readonly bgVideo?: boolean;
    readonly bgImage: number;
}

function MainLayout({children, bgVideo = false, bgImage}: Props) {
    const { translate } = useI18n();
    const [coords, setCoords] = useState({long: 69.240562, lat: 41.311081});
    const [denied, setDenied] = useState(true);

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
    return (
        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className={`h-screen menu-main ${bgVideo ? "" : ""}`}>
            {bgVideo && <div className="fixed w-full h-full bg-black">
                <motion.img src={bgMain} alt="" className="w-full h-full object-cover md:object-center"
                            animate={{scale: [1, 1.06, 1]}}
                            exit={{opacity: 0, transition: {ease: "easeInOut"}}}
                            transition={{duration: 35, repeat: Infinity, repeatDelay: 0.1, repeatType: "loop"}}
                />
            </div>}
            {!bgVideo && <motion.img animate={{scale: [1, 0.7, 0.7, 1], y: [0, 125, 125, 0]}}
                                     transition={{duration: 40, repeat: Infinity, repeatDelay: 0.1, repeatType: "loop"}}
                                     src={cosmoImage} alt=""
                                     className="absolute 2xl:w-[1000px] lg:w-[700px] xl:w-[800px] md:right-36 md:bottom-0 object-contain"/>}
            <div className="w-full h-full container mx-auto z-40 overflow-hidden">
                <div className="flex text-center items-center justify-between pt-[25px]">
                    <motion.div
                        animate={{x: 1}}
                        initial={{x: -600}}
                        exit={{transition: {duration: 0.5, ease: "easeInOut"}}}
                        transition={{ease: "easeInOut", type: "tween", duration: 0.8}}
                    >
                        <img src={bgImage === 1 ? logo : logoBlack} alt=""
                             className="lg:w-[200px] xl:w-[180px] xl:mx-[40px] 2xl:w-[280px] w-[160px] md:w-[180px] mx-6 md:mx-2"/>
                    </motion.div>
                    <div className="flex items-center text-center gap-6">
                        <div className="flex items-center text-center gap-2">
                            <Weather coords={coords} denied={denied} bgImage={bgImage}/>
                            {/*<AirQuality coords={coords}/>*/}
                        </div>
                        <LanguageSwitcher bgImage={bgImage} />
                    </div>
                </div>
                {children}
                <motion.ul
                    className={`${bgImage === 1 ? "text-white" : "text-black"}
                     z-40 text-end flex flex-col
                     hidden md:flex
                     w-11/12
                     xl:gap-4 xl:text-[16px]
                       2xl:gap-6 2xl:text-[19px] items-end absolute container
                       lg:gap-3 lg:text-[15px]
                         top-1/4 font-light ${bgImage === 2 ? "text-[#353535] font-light" : ""}`}>
                    <Link to={RoutesEnum.Main}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.1, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer 
                                  `}>
                            {translate("TITLE_MENU_PAGE_TITLE_1")}
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.About}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.2, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer
                                   `}>
                            {translate("TITLE_MENU_PAGE_TITLE_2")}
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Loan}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.25, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer 
                                  `}>
                            {translate("TITLE_MENU_PAGE_TITLE_3")}
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Bank}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.3, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer 
                                  `}>
                            {translate("TITLE_MENU_PAGE_TITLE_4")}
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Crm}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.35, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer
                                   `}>
                            {translate("TITLE_MENU_PAGE_TITLE_5")}
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Equaring}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.4, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer 
                                  `}>
                            {translate("TITLE_MENU_PAGE_TITLE_6")}
                        </motion.li>
                    </Link>
                    {/*<Link to={RoutesEnum.Portfolio}>*/}
                    {/*    <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}*/}
                    {/*               transition={{duration: 0.5, delay: 0.45, ease: "easeInOut"}}*/}
                    {/*               className={`text-[16px] ${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} font-semibold cursor-pointer*/}
                    {/*                ${location.pathname === RoutesEnum.Portfolio ? ( bgImage === 1 ? "active text-[#34C924]" : "active-blue text-[#003ABC]") : ""}`}>Портфолию*/}
                    {/*    </motion.li>*/}
                    {/*</Link>*/}
                    <Link to={RoutesEnum.Turkney}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.5, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer
                                   `}>
                            {translate("TITLE_MENU_PAGE_TITLE_7")}
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Solutions}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.55, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer 
                                  `}>
                            {translate("TITLE_MENU_PAGE_TITLE_8")}
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Team}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.6, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer
                                   `}>
                            {translate("TITLE_MENU_PAGE_TITLE_9")}
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Contact}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.65, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"}
                                   cursor-pointer
                                    `}>{translate("TITLE_MENU_PAGE_TITLE_10")}
                        </motion.li>
                    </Link>
                </motion.ul>
            </div>
        </motion.div>
    );
}

export default MainLayout;