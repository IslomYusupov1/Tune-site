import {ReactNode, useEffect} from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {RoutesEnum} from "../constants/Routes";
import logo from "../assets/logo.svg";
import logoBlack from "../assets/logo-black.svg";
import cosmoImage from "../assets/cosmo.svg";
import {useLocation} from "react-router";
import bgMain from "../assets/bg-main.jpg";

interface Props {
    readonly children: ReactNode;
    readonly bgVideo?: boolean;
    readonly bgImage: number;
}

function MainLayout({children, bgVideo = false, bgImage}: Props) {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === RoutesEnum.Main) {
            const timer = setTimeout(() => {
                const item = document.querySelector('.play_button') as HTMLButtonElement;
                if (item) {
                    item.click()
                }
            }, 1300)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [location])
    return (
        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className={`h-screen menu-main ${bgVideo ? "" : ""}`}>
            {bgVideo && <div className="fixed w-full h-full bg-black">
                <motion.img src={bgMain} alt="" className="w-full h-full" animate={{scale: [1, 1.06, 1]}}
                            // transition={{duration: 35, repeat: Infinity, repeatDelay: 0.1, repeatType: "loop"}}
                />
            </div>}
            {!bgVideo && <motion.img animate={{scale: [1, 0.7, 0.7, 1], y: [0, 125, 125, 0]}}
                                     // transition={{duration: 40, repeat: Infinity, repeatDelay: 0.1, repeatType: "loop"}}
                                     src={cosmoImage} alt=""
                                     className="absolute 2xl:w-[1000px] lg:w-[700px] xl:w-[800px] right-36 bottom-0 object-contain"/>}
            <div className="w-full h-full container mx-auto z-40">
                <motion.div
                    animate={{x: 1}}
                    initial={{x: -600}}
                    exit={{transition: {duration: 0.5, ease: "easeInOut"}}}
                    transition={{ease: "easeInOut", type: "tween", duration: 0.8}}
                    className="pt-[25px]">
                    <img src={bgImage === 1 ? logo : logoBlack} alt="" className="lg:w-[140px] xl:w-[180px] xl:mx-[40px] 2xl:w-[280px]"/>
                </motion.div>
                {children}
                <motion.ul
                    className={`${bgImage === 1 ? "text-white" : "text-black"}
                     z-40 text-end flex flex-col
                     w-11/12
                     xl:gap-4 xl:text-[16px]
                       2xl:gap-6 2xl:text-[19px] items-end absolute container
                       lg:gap-3 lg:text-[15px]
                         top-1/4 font-light ${bgImage === 2 ? "text-[#353535] font-light" : ""}`}>
                    <Link to={RoutesEnum.Main}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.1, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer 
                                   ${location.pathname === RoutesEnum.Main ? (bgImage === 1 ? "active text-[#34C924]" : "active-blue text-[#003ABC]") : ""}`}>Главная
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.About}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.2, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer
                                    ${location.pathname === RoutesEnum.About ? (bgImage === 1 ? "active text-[#34C924]" : "active-blue text-[#003ABC]") : ""}`}>О
                            нас
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Loan}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.25, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer 
                                   ${location.pathname === RoutesEnum.Loan ? (bgImage === 1 ? "active text-[#34C924]" : "active-blue text-[#003ABC]") : ""}`}>Кредиты
                            и Скоринг
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Bank}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.3, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer 
                                   ${location.pathname === RoutesEnum.Bank ? (bgImage === 1 ? "active text-[#34C924]" : "active-blue text-[#003ABC]") : ""}`}>Цифровой
                            банк
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Crm}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.35, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer
                                    ${location.pathname === RoutesEnum.Crm ? (bgImage === 1 ? "active text-[#34C924]" : "active-blue text-[#003ABC]") : ""}`}>CRM
                            и автоматизация
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Equaring}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.4, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer 
                                   ${location.pathname === RoutesEnum.Equaring ? (bgImage === 1 ? "active text-[#34C924]" : "active-blue text-[#003ABC]") : ""}`}>Онлайн
                            эквайринг
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
                                    ${location.pathname === RoutesEnum.Turkney ? (bgImage === 1 ? "active text-[#34C924]" : "active-blue text-[#003ABC]") : ""}`}>Под
                            ключ
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Solutions}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.55, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer 
                                   ${location.pathname === RoutesEnum.Solutions ? (bgImage === 1 ? "active text-[#34C924]" : "active-blue text-[#003ABC]") : ""}`}>
                            Наши решения
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Team}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.6, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"} cursor-pointer
                                    ${location.pathname === RoutesEnum.Team ? (bgImage === 1 ? "active text-[#34C924]" : "active-blue text-[#003ABC]") : ""}`}>Наша
                            команда
                        </motion.li>
                    </Link>
                    <Link to={RoutesEnum.Contact}>
                        <motion.li animate={{x: 10, opacity: 1}} initial={{x: 200, opacity: 0}}
                                   transition={{duration: 0.5, delay: 0.65, ease: "easeInOut"}}
                                   className={`${bgImage === 1 ? "hover:text-[#34C924] line-green" : "hover:text-[#003ABC] line-blue"}
                                   cursor-pointer
                                     ${location.pathname === RoutesEnum.Contact ? (bgImage === 1 ? "active text-[#34C924]" : "active-blue text-[#003ABC]") : ""}`}>Контакты
                        </motion.li>
                    </Link>
                </motion.ul>
            </div>
        </motion.div>
    );
}

export default MainLayout;