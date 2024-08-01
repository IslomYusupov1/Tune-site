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
// import bgCosmo from "../../assets/cosmo-mobile.svg";
import {useI18n} from "../../i18n/I18nContext";

function LoanMobile() {
    const { translate } = useI18n();

    const ref = useRef<HTMLDivElement>(null);
    const {} = useScroll({
        target: ref,
        offset: ["0 1", "0.6 1"],
        smooth: 1,

    })
    return (
        <motion.div ref={ref}
                    className="bg-[url('../assets/bg-light.jpg')] lg:h-screen h-full flex flex-col p-5 justify-center object-cover bg-no-repeat bg-center w-full">
            {/*<img src={bgCosmo} alt="" className="absolute bottom-0 right-0"/>*/}
            <div className="h-full flex justify-center custom-container mx-auto overflow-hidden flex-col w-full">
                <div
                    className="flex text-red-black leading-5 xl:gap-2 md:leading-normal flex-col text-start w-full md:w-full">
                    <h3 className="xl:text-[35px] xl:leading-[100px] lg:text-[26px] 2xl:text-[42px] text-[20px] mb-5 md:[24px] md:mb-0 md:mt-0 font-light">{translate("TITLE_LOAN_PAGE_MAIN_TITLE")}</h3>
                    <p className="xl:text-[20px] lg:text-[15px] 2xl:text-[24px] md:text-[20px] text-[15px]">1. {translate("TITLE_ABOUT_PAGE_LIST_TITLE1")}</p>
                    <ul className="list-disc md:mx-10 mx-5 xl:text-[20px] lg:text-[14px] 2xl:text-[24px] md:text-[20px] text-[15px]">
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE1_1")}</li>
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE1_2")}</li>
                    </ul>
                    <p className="xl:text-[20px] lg:text-[15px] 2xl:text-[24px] md:text-[20px] text-[15px]">2. {translate("TITLE_ABOUT_PAGE_LIST_TITLE2")}</p>
                    <p className="xl:text-[20px] lg:text-[15px] 2xl:text-[24px] md:text-[20px] text-[15px]">3. {translate("TITLE_ABOUT_PAGE_LIST_TITLE3")}</p>
                    <ul className="list-disc md:mx-10 mx-5 xl:text-[20px] lg:text-[15px] 2xl:text-[24px] md:text-[20px] text-[15px]">
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE3_1")}</li>
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE1_2")}</li>
                    </ul>
                    <p className="xl:text-[20px] lg:text-[15px] 2xl:text-[24px] md:text-[20px] text-[15px]">4. {translate("TITLE_ABOUT_PAGE_LIST_TITLE4")}</p>
                    <p className="xl:text-[20px] lg:text-[15px] 2xl:text-[24px] md:text-[20px] text-[15px]">5. {translate("TITLE_ABOUT_PAGE_LIST_TITLE5")}</p>
                    <ul className="list-disc md:mx-10 mx-5 xl:text-[20px] lg:text-[15px] 2xl:text-[24px] md:text-[20px] text-[15px]">
                        <li>{translate("TITLE_ABOUT_PAGE_LIST_TITLE5_1")}</li>
                    </ul>
                </div>
                <div
                    className="2xl:mt-16 xl:mt-5 mt-5 lg:mt-8 w-full md:w-full">
                    <div
                        className="border-b border-black"/>
                    <div className="flex gap-x-8 gap-y-4 mt-3 flex-wrap">
                        <img src={mkb} alt="" className="2xl:w-[240px] xl:w-[180px] lg:w-[140px] w-[80px] aspect-auto"/>
                        <img src={davr} alt=""
                             className="2xl:w-[200px] xl:w-[150px] lg:w-[140px] w-[100px] aspect-auto"/>
                        <img src={kapital} alt=""
                             className="2xl:w-[200px] xl:w-[150px] lg:w-[140px] w-[130px] aspect-auto"/>
                        <img src={anorBank} alt=""
                             className="2xl:w-[200px] xl:w-[150px] lg:w-[140px] w-[90px] aspect-auto"/>
                        <img src={joyda} alt="" className="2xl:w-[240px] xl:w-[150px] lg:w-[140px] w-[80px] aspect-auto"/>
                        <img src={asia} alt=""
                             className="2xl:w-[200px] xl:w-[150px] lg:w-[140px] w-[120px] aspect-auto"/>
                        <img src={agat} alt=""
                             className="2xl:w-[200px] xl:w-[150px] lg:w-[140px] w-[100px] aspect-auto"/>
                        <img src={uzum} alt=""
                             className="2xl:w-[200px] xl:w-[150px] lg:w-[140px] w-[70px] aspect-auto"/>
                        <img src={tenge} alt=""
                             className="2xl:w-[200px] xl:w-[150px] lg:w-[140px] w-[80px] aspect-auto"/>
                        <img src={orient} alt=""
                             className="2xl:w-[200px] xl:w-[150px] lg:w-[140px] w-[150px] aspect-auto"/>
                        <img src={milliy} alt=""
                             className="2xl:w-[200px] xl:w-[150px] lg:w-[140px] w-[130px] aspect-auto"/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default LoanMobile;