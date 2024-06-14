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
import imageBg from "../assets/bg-image-back.png";

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
        <div className="flex flex-col lg:w-9/12 2xl:w-10/12 text-start mx-auto mt-20">
            <motion.img animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <motion.div variants={headerVariant} initial="hidden" animate="visible" exit="exit" className="flex flex-col text-start">
                <h3 className="2xl:text-[40px] lg:text-[32px] leading-10 mb-3">Платформа онлайн эквайринга</h3>
                <ul className="list-disc mx-8 2xl:text-[20px] lg:text-[18px]">
                    <li>6 проектов работающих напрямую с процессинговыми центрами</li>
                    <li>1 проект на стадии разработки</li>
                    <li>Доступны для онлайн и оффлайн эквайринга через QR коды</li>
                    <li>2 проекта раздают эквайринг API для третьих сторон платежным организациям и агентам</li>
                    <li>Мерчанты и партнеры банка работают через собственные кабинеты</li>
                </ul>
            </motion.div>
            <motion.div variants={footerVariant} initial="hidden" animate="visible" exit="exit" className="mt-16 w-10/12">
                <motion.div animate={{ width: "100%" }} initial={{ width: 0 }} transition={{ duration: 1, delay: 1.2}} className="border-b border-white" />
                <div className="flex gap-x-8 gap-y-4 mt-3 flex-wrap">
                    <img src={mkb} alt=""/>
                    <img src={davr} alt=""/>
                    <img src={kapital} alt=""/>
                    <img src={anorBank} alt=""/>
                    <img src={joyda} alt=""/>
                    <img src={asia} alt=""/>
                    <img src={agat} alt=""/>
                    <img src={uzum} alt=""/>
                </div>
            </motion.div>
            <motion.div variants={imageVariant} initial="hidden" animate="visible" exit="exit" className="mt-16 w-10/12">
                <motion.div animate={{ width: "100%" }} initial={{ width: 0 }} transition={{ duration: 1, delay: 1.5}} className="border-b border-white" />
                <div className="flex gap-x-8 gap-y-4 mt-3 flex-wrap">
                    <img src={uzacrd} alt=""/>
                    <img src={union} alt=""/>
                    <img src={humo} alt=""/>
                    <img src={visa} alt=""/>
                    <img src={masterCard} alt=""/>
                </div>
            </motion.div>
        </div>
    );
}

export default Equaring;