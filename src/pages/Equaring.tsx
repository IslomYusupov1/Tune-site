import sello from "../assets/sello.svg";
import asia from "../assets/asia-light.svg";
import uzum from "../assets/uzum-light.svg";
import uzacrd from "../assets/uzcard.svg";
import humo from "../assets/humo.svg";
import union from "../assets/union.svg";
import visa from "../assets/visa.svg";
import masterCard from "../assets/mastercard.svg";
import tenge from "../assets/tenge-light.svg";
import orient from "../assets/orient-light.svg";
import milliy from "../assets/milliy-light.svg";

import {motion} from "framer-motion";
import imageBg from "../assets/bg-dark.png";
import ContentLayout from "../layouts/ContentLayout";
import {useI18n} from "../i18n/I18nContext";

const headerVariant = {
    hidden: {
        y: 900,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 30,  ease: "easeInOut"}
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
        transition: {type: "spring", stiffness: 30, ease: "easeInOut"}
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
        transition: {type: "spring", stiffness: 30,  ease: "easeInOut"}
    },
    exit: {
        y: 900,
        transition: {ease: "easeInOut"}
    }
}

function Equaring() {
    const { translate } = useI18n();

    return (
        <div className="flex flex-col lg:w-9/12 xl:w9/12 2xl:w-10/12 text-start mx-[100px] 2xl:mx-[150px]">
            <motion.img animate={{opacity: 1}} exit={{ opacity: 0, transition: {ease: "easeInOut"} }} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout>
                <motion.div variants={headerVariant} initial="hidden" animate="visible" exit="exit"
                            className="flex text-white flex-col text-start">
                    <h3 className="2xl:text-[40px] lg:text-[24px] xl:text-[28px] leading-10 mb-3">{translate("TITLE_EQUARING_PAGE_MAIN_TITLE")}</h3>
                    <ul className="list-disc mx-8 2xl:text-[22px] xl:text-[18px] lg:text-[16px] font-light">
                        <li>{translate("TITLE_EQUARING_PAGE_SUBTITLE_1")}</li>
                        <li>{translate("TITLE_EQUARING_PAGE_SUBTITLE_2")}</li>
                        <li>{translate("TITLE_EQUARING_PAGE_SUBTITLE_3")}</li>
                        <li>{translate("TITLE_EQUARING_PAGE_SUBTITLE_4")}</li>
                        <li>{translate("TITLE_EQUARING_PAGE_SUBTITLE_5")}</li>
                    </ul>
                </motion.div>
                <motion.div variants={footerVariant} initial="hidden" animate="visible" exit="exit"
                            className="lg:mt-8 xl:mt-12 2xl:mt-16 w-10/12">
                    <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 1.2}}
                                className="border-b border-white"/>
                    <div className="flex gap-x-8 2xl:gap-y-3 xl:gap-y-3 mt-10 flex-wrap">
                        <img src={sello} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={asia} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={uzum} alt="" className="2xl:w-[120px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={tenge} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={orient} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={milliy} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                    </div>
                </motion.div>
                <motion.div variants={imageVariant} initial="hidden" animate="visible" exit="exit"
                            className="lg:mt-8 xl:mt-12 2xl:mt-16 w-10/12">
                    <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 1.5}}
                                className="border-b border-white"/>
                    <div className="flex gap-x-8 gap-y-4 mt-10 flex-wrap">
                        <img src={uzacrd} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px]"/>
                        <img src={union} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px]"/>
                        <img src={humo} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px]"/>
                        <img src={visa} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px]"/>
                        <img src={masterCard} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px]"/>
                    </div>
                </motion.div>
            </ContentLayout>
        </div>
    );
}

export default Equaring;