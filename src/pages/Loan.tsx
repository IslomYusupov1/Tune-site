import mkb from "../assets/mkb.svg";
import davr from "../assets/davr.svg";
import kapital from "../assets/kapital.svg";
import anorBank from "../assets/anor.svg";
import joyda from "../assets/joyda.svg";
import asia from "../assets/asia.svg";
import agat from "../assets/agat.svg";
import uzum from "../assets/uzum.svg";
import milliy from "../assets/milliy.svg";
import tenge from "../assets/tenge.svg";
import orient from "../assets/orient.svg";

import {motion} from "framer-motion";
import imageBgLight from "../assets/bg-light.jpg"
import ContentLayout from "../layouts/ContentLayout";
import {useI18n} from "../i18n/I18nContext";

const headerVariants = {
    hidden: {
        y: -1000,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 30}
    },
    exit: {
        y: -1000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}
const footerVariants = {
    hidden: {
        y: 1000,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 30}
    },
    exit: {
        y: 1000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}

function Loan() {
    const { translate } = useI18n();
    return (
        <motion.div className="text-[#353535] md:h-screen w-11/12 md:w-full mx-auto mx-[100px] lg:mt-5 xl:mt-5">
            <motion.img loading="lazy" animate={{opacity: 1}} exit={{ opacity: 0, transition: {ease: "easeInOut"} }} initial={{opacity: 0}} transition={{duration: 0.8, ease: "easeInOut"}}
                        alt="" src={imageBgLight} className="fixed w-full h-full top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout className="relative">
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex text-red-black leading-5 md:leading-normal flex-col text-start w-full 2xl:w-8/12 md:w-9/12">
                    <h3 className="xl:text-[30px] lg:text-[26px] 2xl:text-[48px] text-[17px] md:[24px] md:mb-0 md:mt-0 font-light">{translate("TITLE_LOAN_PAGE_MAIN_TITLE")}</h3>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[12px]">1. {translate("TITLE_ABOUT_PAGE_LIST_TITLE1")}</p>
                    <ul className="list-disc mx-10 xl:text-[18px] lg:text-[14px] 2xl:text-[22px] md:text-[20px] text-[12px]">
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE1_1")}</li>
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE1_2")}</li>
                    </ul>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[12px]">2. {translate("TITLE_ABOUT_PAGE_LIST_TITLE2")}</p>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[12px]">3. {translate("TITLE_ABOUT_PAGE_LIST_TITLE3")}</p>
                    <ul className="list-disc mx-10 xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[12px]">
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE3_1")}</li>
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE1_2")}</li>
                    </ul>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[12px]">4. {translate("TITLE_ABOUT_PAGE_LIST_TITLE4")}</p>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[12px]">5. {translate("TITLE_ABOUT_PAGE_LIST_TITLE5")}</p>
                    <ul className="list-disc mx-10 xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[12px]">
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE5_1")}</li>
                    </ul>
                </motion.div>
                <motion.div
                    variants={footerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="2xl:mt-16 xl:mt-5 lg:mt-8 md:w-9/12">
                    <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 1.5}}
                                className="border-b border-black"/>
                    <div className="flex gap-x-8 gap-y-4 mt-3 flex-wrap">
                        <img src={mkb} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={davr} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={kapital} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={anorBank} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={joyda} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={asia} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={agat} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={uzum} alt="" className="2xl:w-[120px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={tenge} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={orient} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={milliy} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                    </div>
                </motion.div>
            </ContentLayout>
        </motion.div>
    );
}

export default Loan;