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
import {motion, useInView} from "framer-motion";
import bgCosmo from "../../assets/cosmo-web.svg";
import {useI18n} from "../../i18n/I18nContext";

function CrmMobile() {
    const {translate} = useI18n();

    const ref = useRef<HTMLDivElement>(null);
    const refBottom = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, {once: true})
    const inViewBottom = useInView(refBottom, {once: true})

    return (
        <motion.div id="crm"
                    className="bg-[url('../assets/bg-light.jpg')] lg:h-screen flex relative flex-col p-5 justify-center object-cover bg-no-repeat bg-center w-full">
            <img src={bgCosmo} alt="" className="hidden lg:block absolute bottom-0 right-0"/>
            <div className="h-full custom-container md:mx-auto md:flex md:flex-col md:justify-center">
                <div className="flex flex-col text-start">
                    <h3 className="2xl:text-[42px] xl:text-[30px] lg:text-[25px] text-[22px] lg:leading-10 2xl:leading-[50px] leading-7 font-medium  mb-2">{translate("TITLE_CRM_PAGE_MAIN_TITLE")}</h3>
                    <ul className="list-disc mx-8 2xl:text-[24px] xl:text-[20px] lg:text-[16px]">
                        <li>{translate("TITLE_CRM_PAGE_MAIN_TITLE_1")}</li>
                        <li>{translate("TITLE_CRM_PAGE_MAIN_TITLE_2")}</li>
                        <li>{translate("TITLE_CRM_PAGE_MAIN_TITLE_3")}</li>
                    </ul>
                </div>
                <div className="flex flex-col text-start">
                    <h3 className="2xl:text-[40px] lg:text-[20px] xl:text-[22px] text-[20px] xl:mt-2 2xl:mt-5 lg:mt-2 mt-2">{translate("TITLE_CRM_PAGE_MAIN_TITLE2")}</h3>
                    <div ref={ref} className="flex flex-col 2xl:text-[22px] xl:text-[20px] lg:text-[14px]">
                        <div
                            className="flex justify-between text-center items-center lg:w-full w-full 2xl:py-3 xl:py-1 lg:py-1 ">
                            <p className="opacity-0">{translate("TITLE_CRM_PAGE_TABLE_TITLE1")}</p>
                            <div className="flex gap-10">
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">{translate("TITLE_CRM_PAGE_TABLE_TITLE_BEFORE")}</span>
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">{translate("TITLE_CRM_PAGE_TABLE_TITLE_AFTER")}</span>
                            </div>
                        </div>
                        {inView && <motion.div animate={{width: "100%"}} initial={{width: 0}}
                                               transition={{duration: 1, delay: 0.2}}
                                               className="border-b border-black"/>}
                        <div
                            className="flex justify-between lg:w-full h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE1")}</p>
                            <div className="flex gap-10">
                                <span
                                    className="md:w-[80px] 2xl:w-[120px]">20 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span
                                    className="md:w-[80px] 2xl:w-[120px]">3 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                        {inView && <motion.div animate={{width: "100%"}} initial={{width: 0}}
                                               transition={{duration: 1, delay: 0.22}}
                                               className="border-b border-black"/>}
                        <div
                            className="flex justify-between lg:w-full h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE2")}</p>
                            <div className="flex gap-10">
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">60 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">5 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                        {inView && <motion.div animate={{width: "100%"}} initial={{width: 0}}
                                               transition={{duration: 1, delay: 0.24}}
                                               className="border-b border-black"/>}
                        <div
                            className="flex justify-between lg:w-full h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE3")}</p>
                            <div className="flex gap-10">
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">90 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">20 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                        {inView && <motion.div animate={{width: "100%"}} initial={{width: 0}}
                                               transition={{duration: 1, delay: 0.26}}
                                               className="border-b border-black"/>}
                        <div
                            className="flex justify-between lg:w-full h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE4")}</p>
                            <div className="flex gap-10">
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">90 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">10 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                        {inView && <motion.div animate={{width: "100%"}} initial={{width: 0}}
                                               transition={{duration: 1, delay: 0.28}}
                                               className="border-b border-black"/>}
                        <div
                            className="flex justify-between lg:w-full h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE5")}</p>
                            <div className="flex gap-10">
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">20 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">5 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                        {inView && <motion.div animate={{width: "100%"}} initial={{width: 0}}
                                               transition={{duration: 1, delay: 0.3}}
                                               className="border-b border-black"/>}
                        <div
                            className="flex justify-between lg:w-full h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE6")}</p>
                            <div className="flex gap-10">
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">120 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">5 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                        {inView && <motion.div animate={{width: "100%"}} initial={{width: 0}}
                                               transition={{duration: 1, delay: 0.32}}
                                               className="border-b border-black"/>}
                        <div
                            className="flex justify-between lg:w-full h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1">
                            <p className="w-1/2 mt-5 md:mt-0 leading-5">{translate("TITLE_CRM_PAGE_TABLE_TITLE7")}</p>
                            <div className="flex gap-10">
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">60 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                                <span
                                    className="md:w-[80px] 2xl:w-[140px]">2 {translate("TITLE_CRM_PAGE_MINUTES")}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:mt-10 xl:mt-8 lg:mt-7 mt-5 w-full" ref={refBottom}>
                    {inViewBottom && <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 0.2}}
                                 className="border-b border-black"/>}
                    <div className="flex gap-x-8  gap-y-4 2xl:gap-y-8 2xl:mt-4 xl:mt-3 mt-3 flex-wrap">
                        <img src={mkb} alt="" className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={davr} alt=""
                             className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={kapital} alt=""
                             className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={anorBank} alt=""
                             className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={joyda} alt=""
                             className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={asia} alt=""
                             className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={agat} alt=""
                             className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={uzum} alt=""
                             className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={tenge} alt=""
                             className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={orient} alt=""
                             className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={milliy} alt=""
                             className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default CrmMobile;