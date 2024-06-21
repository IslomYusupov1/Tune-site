import mkb from "../assets/mkb-light.svg";
import davr from "../assets/davr-light.svg";
import kapital from "../assets/kapital-light.svg";
import anorBank from "../assets/anor-light.svg";
import joyda from "../assets/joyda-light.svg";
import asia from "../assets/asia-light.svg";
import agat from "../assets/agat-light.svg";
import uzum from "../assets/uzum-light.svg";
import uzacrd from "../assets/uzcard.svg";
import humo from "../assets/humo.svg";
import union from "../assets/union.svg";
import visa from "../assets/visa.svg";
import masterCard from "../assets/mastercard.svg";

import {motion} from "framer-motion";
import imageBg from "../assets/bg-dark.png";
import ContentLayout from "../layouts/ContentLayout";

const headerVariant = {
    hidden: {
        y: 900,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 40, delay: 0.3}
    },
    exit: {
        y: 900,
        transition: {ease: "easeInOut"}
    }
}

const footerVariant = {
    hidden: {
        y: 900,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 40, delay: 0.3}
    },
    exit: {
        y: 900,
        transition: {ease: "easeInOut"}
    }
}
const imageVariant = {
    hidden: {
        y: 900,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 40, delay: 0.3}
    },
    exit: {
        y: 900,
        transition: {ease: "easeInOut"}
    }
}

function Equaring() {
    return (
        <div className="flex flex-col lg:w-9/12 2xl:w-10/12 text-start mx-auto">
            <motion.img animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout>
                <motion.div variants={headerVariant} initial="hidden" animate="visible" exit="exit"
                            className="flex text-white flex-col text-start">
                    <h3 className="2xl:text-[40px] lg:text-[32px] 3xl:text-[48px] leading-10 mb-3">Платформа онлайн эквайринга</h3>
                    <ul className="list-disc mx-8 2xl:text-[20px] 3xl:text-[30px] lg:text-[18px] font-light">
                        <li>6 проектов работающих напрямую с процессинговыми центрами</li>
                        <li>1 проект на стадии разработки</li>
                        <li>Доступны для онлайн и оффлайн эквайринга через QR коды</li>
                        <li>2 проекта раздают эквайринг API для третьих сторон платежным организациям и агентам</li>
                        <li>Мерчанты и партнеры банка работают через собственные кабинеты</li>
                    </ul>
                </motion.div>
                <motion.div variants={footerVariant} initial="hidden" animate="visible" exit="exit"
                            className="mt-16 w-10/12">
                    <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 1.2}}
                                className="border-b border-white"/>
                    <div className="flex gap-x-8 gap-y-4 3xl:gap-y-2 mt-2 flex-wrap">
                        <img src={mkb} alt="" className="3xl:w-[170px] 3xl:h-[100px]"/>
                        <img src={davr} alt="" className="3xl:w-[170px] 3xl:h-[100px]"/>
                        <img src={kapital} alt="" className="3xl:w-[170px] 3xl:h-[100px]"/>
                        <img src={anorBank} alt="" className="3xl:w-[170px] 3xl:h-[100px]"/>
                        <img src={joyda} alt="" className="3xl:w-[170px] 3xl:h-[100px]"/>
                        <img src={asia} alt="" className="3xl:w-[170px] 3xl:h-[100px]"/>
                        <img src={agat} alt="" className="3xl:w-[170px] 3xl:h-[100px]"/>
                        <img src={uzum} alt="" className="3xl:w-[170px] 3xl:h-[100px]"/>
                    </div>
                </motion.div>
                <motion.div variants={imageVariant} initial="hidden" animate="visible" exit="exit"
                            className="mt-16 w-10/12">
                    <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 1.5}}
                                className="border-b border-white"/>
                    <div className="flex gap-x-8 gap-y-4 mt-3 flex-wrap">
                        <img src={uzacrd} alt="" className="3xl:w-[150px] 3xl:h-[100px]"/>
                        <img src={union} alt="" className="3xl:w-[150px] 3xl:h-[100px]"/>
                        <img src={humo} alt="" className="3xl:w-[150px] 3xl:h-[100px]"/>
                        <img src={visa} alt="" className="3xl:w-[150px] 3xl:h-[100px]"/>
                        <img src={masterCard} alt="" className="3xl:w-[150px] 3xl:h-[100px]"/>
                    </div>
                </motion.div>
            </ContentLayout>
        </div>
    );
}

export default Equaring;