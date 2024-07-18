import mkb from "../../assets/mkb.svg";
import davr from "../../assets/davr.svg";
import kapital from "../../assets/kapital.svg";
import anorBank from "../../assets/anor.svg";
import joyda from "../../assets/joyda.svg";
import asia from "../../assets/asia.svg";
import agat from "../../assets/agat.svg";
import uzum from "../../assets/uzum.svg";
import tenge from "../../assets/tenge.svg";
import orient from "../../assets/orient.svg";
import milliy from "../../assets/milliy.svg";
import {useRef} from "react";
import {useScroll, motion} from "framer-motion";
import bgCosmo from "../../assets/cosmo-mobile.svg";
import {useI18n} from "../../i18n/I18nContext";

function LoanMobile() {
    const { translate } = useI18n();

    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.6 1"],
        smooth: 1,

    })
    return (
        <motion.div ref={ref} style={{ opacity:  scrollYProgress}}
            className="bg-[url('../assets/bg-light.png')] flex flex-col p-5 relative justify-center object-cover bg-no-repeat bg-center w-full">
            <img src={bgCosmo} alt="" className="absolute bottom-0 right-0"/>
            <motion.div  style={{ scale: scrollYProgress }} className="h-full overflow-hidden">
                <div
                    className="flex text-red-black leading-5 md:leading-normal flex-col text-start w-full 2xl:w-8/12 md:w-9/12">
                    <h3 className="xl:text-[30px] lg:text-[26px] 2xl:text-[48px] text-[20px] mb-5 md:[24px] md:mb-0 md:mt-0 font-light">{translate("TITLE_LOAN_PAGE_MAIN_TITLE")}</h3>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">1. {translate("TITLE_ABOUT_PAGE_LIST_TITLE1")}</p>
                    <ul className="list-disc md:mx-10 mx-5 xl:text-[18px] lg:text-[14px] 2xl:text-[22px] md:text-[20px] text-[15px]">
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE1_1")}</li>
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE1_2")}</li>
                    </ul>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">2. {translate("TITLE_ABOUT_PAGE_LIST_TITLE2")}</p>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">3. {translate("TITLE_ABOUT_PAGE_LIST_TITLE3")}</p>
                    <ul className="list-disc md:mx-10 mx-5 xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE3_1")}</li>
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE1_2")}</li>
                    </ul>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">4. {translate("TITLE_ABOUT_PAGE_LIST_TITLE4")}</p>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">5. {translate("TITLE_ABOUT_PAGE_LIST_TITLE5")}</p>
                    <ul className="list-disc md:mx-10 mx-5 xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE5_1")}</li>
                    </ul>
                </div>
                <div
                    className="2xl:mt-16 xl:mt-5 mt-5 lg:mt-8 w-full md:w-9/12">
                    <div
                        className="border-b border-black"/>
                    <div className="flex gap-x-8 gap-y-4 mt-3 flex-wrap">
                        <img src={mkb} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[80px] h-[25px]"/>
                        <img src={davr} alt=""
                             className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[100px] h-[25px]"/>
                        <img src={kapital} alt=""
                             className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[130px] h-[25px]"/>
                        <img src={anorBank} alt=""
                             className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[90px] h-[25px]"/>
                        <img src={joyda} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[80px]"/>
                        <img src={asia} alt=""
                             className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[120px] h-[25px]"/>
                        <img src={agat} alt=""
                             className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[100px] h-[25px]"/>
                        <img src={uzum} alt=""
                             className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[70px] h-[25px]"/>
                        <img src={tenge} alt=""
                             className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[80px] h-[25px]"/>
                        <img src={orient} alt=""
                             className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[150px] h-[25px]"/>
                        <img src={milliy} alt=""
                             className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[130px] h-[25px]"/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default LoanMobile;