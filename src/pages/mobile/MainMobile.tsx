import {useRef, useState} from 'react';
import {motion, useScroll} from "framer-motion";
import person from "../../assets/person.svg";
import down from "../../assets/down.svg";
import {useI18n} from "../../i18n/I18nContext";
import {Link} from "react-router-dom";
import {RoutesEnum} from "../../constants/Routes";

function MainMobile() {
    const { translate } = useI18n();
    const [bgImage, _] = useState(1)

    const ref = useRef<HTMLDivElement>(null);
    const { } = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    })

    // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

    return (
        <motion.div ref={ref}
                    className="h-screen bg-[url('../assets/bg-main.jpg')] object-cover bg-no-repeat bg-center w-full">
            <motion.div className="h-full relative custom-container mx-auto relative flex flex-col justify-center">
                <img
                    className="2xl:w-[800px] xl:w-[600px] mx-auto lg:w-[500px] md:w-[400px] w-full rotate-[35deg] lg:rotate-0"
                    src={person} alt=""/>
                <div
                    className="absolute md:absolute md:bottom-0 bottom-[30px] w-full md:w-auto md:mx-[100px] flex flex-col items-center">
                    <h3
                        className="text-start text-[22px] mb-5 md:text-[30px] px-[30px] text-white xl:text-[40px] 2xl:text-[48px] lg:text-[36px] ">{translate("TITLE_MAIN_PAGE_TEXT")}
                    </h3>
                    <img className="text-center md:hidden item-center" src={down} width={32} alt=""/>
                </div>
                <motion.ul
                    className={`text-white
                         z-40 flex-col
                         hidden lg:flex
                         right-0
                         absolute
                         xl:gap-4 xl:text-[18px]
                           2xl:gap-6 2xl:text-[24px]
                           lg:gap-3 lg:text-[16px]
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
            </motion.div>
        </motion.div>
    );
}

export default MainMobile;