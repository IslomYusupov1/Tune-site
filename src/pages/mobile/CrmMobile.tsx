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
import bgCosmo from "../../assets/cosmo-bg1.svg";
import {useI18n} from "../../i18n/I18nContext";

function CrmMobile() {
    const { translate } = useI18n();

    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.5 1"],
        smooth: 1,
    })
    return (
        <motion.div ref={ref} style={{ opacity: scrollYProgress }}
            className="bg-[url('../assets/bg-light.png')] flex relative flex-col p-5 justify-center object-cover bg-no-repeat bg-center w-full">
            <img src={bgCosmo} alt="" className="absolute bottom-0 right-0"/>
            <motion.div style={{ scale: scrollYProgress }} className="h-full">
                <div className="flex flex-col text-start">
                    <h3 className="2xl:text-[34px] xl:text-[25px] lg:text-[22px] text-[22px] lg:leading-10 leading-7 font-medium  mb-2">{translate("TITLE_CRM_PAGE_MAIN_TITLE")}</h3>
                    <ul className="list-disc mx-8 2xl:text-[20px] xl:text-[18px] lg:text-[16px]">
                        <li>{translate("TITLE_CRM_PAGE_MAIN_TITLE_1")}</li>
                        <li>{translate("TITLE_CRM_PAGE_MAIN_TITLE_2")}</li>
                        <li>{translate("TITLE_CRM_PAGE_MAIN_TITLE_3")}</li>
                    </ul>
                </div>
                <div className="flex flex-col text-start">
                    <h3 className="2xl:text-[28px] lg:text-[20px] xl:text-[22px] text-[20px] xl:mt-2 2xl:mt-5 lg:mt-2 mt-2">{translate("TITLE_CRM_PAGE_MAIN_TITLE2")}</h3>
                    <div className="flex flex-col 2xl:text-[20px] xl:text-[18px] lg:text-[14px]">
                        <div
                            className="flex justify-between text-center items-center lg:w-3/4 w-full 2xl:py-3 xl:py-1 lg:py-1 ">
                            <p className="opacity-0">{translate("TITLE_CRM_PAGE_TABLE_TITLE1")}</p>
                            <div className="flex gap-8">
                                <span>{translate("TITLE_CRM_PAGE_TABLE_TITLE_BEFORE")}</span>
                                <span>{translate("TITLE_CRM_PAGE_TABLE_TITLE_AFTER")}</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE1")}</p>
                            <div className="flex gap-8">
                                <span>20 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span>3 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE2")}</p>
                            <div className="flex gap-8">
                                <span>60 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span>5 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE3")}</p>
                            <div className="flex gap-8">
                                <span>90 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span>20 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE4")}</p>
                            <div className="flex gap-8">
                                <span>90 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span>10 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE5")}</p>
                            <div className="flex gap-8">
                                <span>20 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span>5 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE6")}</p>
                            <div className="flex gap-8">
                                <span>120 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span>5 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE7")}</p>
                            <div className="flex gap-8">
                                <span>60 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span>2 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:mt-10 xl:mt-8 lg:mt-7 mt-5 lg:w-10/12 w-full">
                    <div className="border-b border-black"/>
                    <div className="flex gap-x-8 gap-y-4 2xl:mt-2 xl:mt-3 mt-3 flex-wrap">
                        <img src={mkb} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={davr} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={kapital} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={anorBank} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={joyda} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={asia} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={agat} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={uzum} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={tenge} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={orient} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={milliy} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default CrmMobile;