import {useRef} from "react";
import {useScroll, motion} from "framer-motion";
import bgCosmo from "../../assets/cosmo-bg1.svg";
import {useI18n} from "../../i18n/I18nContext";

function SolutionsMobile() {
    const { translate } = useI18n();

    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
        smooth: 1,
    })
    return (
        <motion.div ref={ref} style={{ opacity: scrollYProgress }} className="bg-[url('../assets/bg-dark.png')] relative p-5 object-cover bg-no-repeat bg-center w-full">
            <img src={bgCosmo} alt="" className="absolute bottom-0 right-0"/>
            <motion.div style={{ scale: scrollYProgress }}
                className="h-full w-full flex flex-col gap-4 xl:mt-10 lg:mt-10 2xl:mt-0 3xl:mt-0 text-white lg:w-8/12 2xl:w-9/12 w-full text-start font-light lg:mx-[100px]">
                <h3 className="2xl:text-[40px] lg:text-[22px] xl:text-[26px] text-[24px] leading-tight xl:mb-4 2xl:mb-10 lg:mb-4">{translate("TITLE_SOLUTIONS_PAGE_MAIN_TITLE")}</h3>
                <h3 className="2xl:text-[32px] lg:text-[18px] xl:text-[22px] text-[20px] mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1")}</h3>
                <div className="w-full flex flex-col gap-2">
                    <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1")}</h3>
                    <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1_1")}</p>
                    <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1_2")}</p>
                    <p className="mb-2 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1_3")}</p>
                </div>
                <div className="border-b border-white w-full"/>
                <div className="w-full flex flex-col gap-2">
                    <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2")}</h3>
                    <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2_1")}</p>
                    <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2_2")}</p>
                    <p className="mb-2 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2_3")}</p>
                </div>
                <div className="border-b border-white w-full"/>
                <div className="w-full flex flex-col gap-2">
                    <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3")}</h3>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_1")}</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_2")}</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_3")}</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_4")}</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_5")}</p>
                    <p className="mb-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_6")}</p>
                </div>
                <div className="border-b border-white w-full"/>
                <div className="w-full flex flex-col gap-2">
                    <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4")}</h3>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_1")}</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_2")}</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_3")}</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_4")}</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_5")}</p>
                    <p className="mb-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_6")}</p>
                </div>
                <div className="border-b border-white w-full"/>
                <div className="flex justify-between">
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5")}</h3>
                        <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_1")}</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_2")}</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_3")}</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_4")}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default SolutionsMobile;