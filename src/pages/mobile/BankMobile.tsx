import bankPhoneImage from "../../assets/phone.png";
import {useRef} from "react";
import {motion} from "framer-motion";
// import bgCosmo from "../../assets/cosmo-mobile.svg";
// import bgCosmo from "../../assets/cosmo-bg1.svg";
import {useI18n} from "../../i18n/I18nContext";

function BankMobile() {
    const { translate } = useI18n();
    const ref = useRef<HTMLDivElement>(null);
    // const {scrollYProgress} = useScroll({
    //     target: ref,
    //     offset: ["0 1", "0.5 1"],
    //     smooth: 1,
    // })
    return (
        <motion.div ref={ref} className="bg-[url('../assets/bg-dark.png')] md:h-screen bg-white relative p-5 object-cover bg-no-repeat bg-center">
            {/*<img src={bgCosmo} alt="" className="absolute bottom-0 right-0"/>*/}
            <div className="flex custom-container mx-auto relative flex-col justify-between lg:justify-center h-full">
                <h3 className="xl:text-[40px] 2xl:text-[64px] text-[22px] mb-3 mt-3 leading-7 md:leading-normal text-white lg:text-[26px] 2xl:mb-16 2xl:mt-10 xl:mb-6 xl:mt-6 lg:mt-10 lg:mb-4">
                    {translate("TITLE_BANK_PAGE_MAIN_TITLE")}
                </h3>
                <div className="text-white">
                    <div className="xl:w-[64%] flex flex-col 2xl:w-[50%] lg:w-[58%] w-full xl:gap-1.5">
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[28px] text-[15px]">1. {translate("TITLE_BANK_PAGE_LIST_TITLE1")}</p>
                        <ul className="list-disc mx-5 lg:text-[16px] xl:text-[20px] 2xl:text-[28px] text-[15px]">
                            <li>{translate("TITLE_BANK_PAGE_LIST_TITLE1_1")}</li>
                        </ul>
                        <img src="" alt=""/>
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[28px] text-[15px]">2. {translate("TITLE_BANK_PAGE_LIST_TITLE2")}</p>
                        <ul className="list-disc mx-5 lg:text-[16px] xl:text-[20px] 2xl:text-[28px] text-[15px]">
                            <li>{translate("TITLE_BANK_PAGE_LIST_TITLE2_1")}</li>
                            <li>{translate("TITLE_BANK_PAGE_LIST_TITLE2_2")}</li>
                        </ul>
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[28px] text-[15px]">3. {translate("TITLE_BANK_PAGE_LIST_TITLE3")}</p>
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[28px] text-[15px]">4. {translate("TITLE_BANK_PAGE_LIST_TITLE4")}</p>
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[28px] text-[15px]">5. {translate("TITLE_BANK_PAGE_LIST_TITLE5")}</p>
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[28px] text-[15px]">6. {translate("TITLE_BANK_PAGE_LIST_TITLE6")}</p>
                        <ul className="list-disc mx-5 lg:text-[15px] xl:text-[18px] 2xl:text-[28px] text-[15px]">
                            <li>Temenos</li>
                            <li>iABS</li>
                            <li>NCI</li>
                            <li>ASBT</li>
                            <li>Korean system</li>
                            <li>CS</li>
                        </ul>
                        <p className="lg:text-[15px xl:text-[18px] 2xl:text-[28px] text-[15px]">7. {translate("TITLE_BANK_PAGE_LIST_TITLE7")}</p>
                    </div>
                </div>
                <div
                    className="2xl:mt-3 lg:mt-2 mt-4 z-50 md:absolute right-0 lg:right-[20px] lg:bottom-[-20px]">
                    <img className="lg:w-[250px] xl:w-full 2xl:w-[600px] w-[280px] aspect-auto mx-auto" src={bankPhoneImage} alt=""/>
                </div>
            </div>
        </motion.div>
    );
}

export default BankMobile;