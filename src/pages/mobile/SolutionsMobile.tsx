import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import bgCosmo from "../../assets/cosmo-web.svg";
import {useI18n} from "../../i18n/I18nContext";

function SolutionsMobile() {
    const { translate } = useI18n();

    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true })

    return (
        <motion.div id="solution" className="lg:h-screen bg-[url('../assets/bg-dark.png')] relative p-5 object-cover bg-no-repeat bg-center w-full">
            <img src={bgCosmo} alt="" className="hidden lg:block absolute bottom-0 right-0"/>
            <div
                className="h-full custom-container mx-auto w-full flex lg:justify-center flex-col gap-4 xl:mt-10 lg:mt-10 2xl:mt-5 3xl:mt-0 text-white w-full text-start font-light">
                <h3 className="2xl:text-[40px] lg:text-[26px] xl:text-[32px] text-[24px] leading-tight xl:mb-4 2xl:mb-10 lg:mb-4">{translate("TITLE_SOLUTIONS_PAGE_MAIN_TITLE")}</h3>
                <div className="md:block hidden w-full" ref={ref}>
                    <div className="flex justify-between gap-16">
                        <div className="w-full flex flex-col gap-1">
                            <h3 className="xl:text-[22px] 2xl:text-[26px] lg:text-[14px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1")}</h3>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1_1")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1_2")}</p>
                            <p className="mb-2 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1_3")}</p>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <h3 className="xl:text-[22px] 2xl:text-[26px] lg:text-[14px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2")}</h3>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2_1")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2_2")}</p>
                            <p className="mb-2 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2_3")}</p>
                        </div>
                    </div>
                    {inView && <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 0.2}}
                                 className="border-b border-white w-full 2xl:my-3 lg:my-2 my-1"/>}
                    <div className="flex justify-between gap-16 ">
                        <div className="w-full flex flex-col gap-1">
                            <h3 className="xl:text-[22px] 2xl:text-[26px] lg:text-[14px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3")}</h3>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_1")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_2")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_3")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_4")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_5")}</p>
                            <p className="mb-2 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_6")}</p>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <h3 className="xl:text-[22px] 2xl:text-[26px] lg:text-[14px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4")}</h3>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_1")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_2")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_3")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_4")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_5")}</p>
                            <p className="mb-2 2xl:text-[22px] xl:text-[17px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_6")}</p>
                        </div>
                    </div>
                    {inView && <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 0.3}}
                                 className="border-b border-white 2xl:my-3 lg:my-2 my-1"/>}
                    <div className="flex justify-between">
                        <div className="w-full flex flex-col gap-1">
                            <h3 className="xl:text-[22px] 2xl:text-[26px] lg:text-[14px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5")}</h3>
                            <p className="pb-1 2xl:text-[22px] xl:text-[18px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_1")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[18px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_2")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[18px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_3")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[18px] lg:text-[13px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_4")}</p>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <h3 className="2xl:text-[32px] lg:text-[18px] xl:text-[22px] text-[20px] mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1")}</h3>
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="xl:text-[22px] 2xl:text-[32px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1")}</h3>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1_1")}</p>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1_2")}</p>
                        <p className="mb-2 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_1_3")}</p>
                    </div>
                    <div className="border-b border-white w-full"/>
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="xl:text-[22px] 2xl:text-[32px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2")}</h3>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2_1")}</p>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2_2")}</p>
                        <p className="mb-2 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_2_3")}</p>
                    </div>
                    <div className="border-b border-white w-full"/>
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="xl:text-[22px] 2xl:text-[32px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3")}</h3>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_1")}</p>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_2")}</p>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_3")}</p>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_4")}</p>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_5")}</p>
                        <p className="mb-2 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_3_6")}</p>
                    </div>
                    <div className="border-b border-white w-full"/>
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="xl:text-[22px] 2xl:text-[32px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4")}</h3>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_1")}</p>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_2")}</p>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_3")}</p>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_4")}</p>
                        <p className="pb-1 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_5")}</p>
                        <p className="mb-2 2xl:text-[22px] xl:text-[17px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_4_6")}</p>
                    </div>
                    <div className="border-b border-white w-full"/>
                    <div className="flex justify-between">
                        <div className="w-full flex flex-col gap-2">
                            <h3 className="xl:text-[22px] 2xl:text-[32px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5")}</h3>
                            <p className="pb-1 2xl:text-[22px] xl:text-[18px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_1")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[18px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_2")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[18px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_3")}</p>
                            <p className="pb-1 2xl:text-[22px] xl:text-[18px] lg:text-[13px] text-[15px]">{translate("TITLE_SOLUTIONS_PAGE_LIST_TITLE1_5_4")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default SolutionsMobile;