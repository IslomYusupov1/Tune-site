import bankPhoneImage from "../assets/phone.png";
import {motion} from "framer-motion";
import imageBg from "../assets/bg-dark.png";
import ContentLayout from "../layouts/ContentLayout";
import {useI18n} from "../i18n/I18nContext";

const headerVariants = {
    hidden: {
        y: -700,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {duration: 0.5, type: "spring", stiffness: 30, ease: "easeInOut"}
    },
    exit: {
        y: -1000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}
const footerVariants = {
    hidden: {
        y: 700,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {duration: 0.5, type: "spring", stiffness: 30, ease: "easeInOut"}
    },
    exit: {
        y: 1000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}

function Bank() {
    const { translate } = useI18n();
    return (
        <motion.div className="flex 2xl:w-10/12 h-full xl:w-9/12 lg:w-9/12 lg:mt-3 flex-col text-start bank-page mx-[100px]">
            <motion.img loading="lazy" animate={{opacity: 1}} initial={{opacity: 0}} exit={{ opacity: 0, transition: {ease: "easeInOut"} }} transition={{duration: 0.1, ease: "backInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout className="relative">
                <motion.h3 variants={headerVariants} initial="hidden" animate="visible" exit="exit"
                           className="xl:text-[36px] 2xl:text-[44px] text-white lg:text-[22px] 2xl:mb-16 2xl:mt-10 xl:mb-6 xl:mt-6 lg:mt-10 lg:mb-4">
                    {translate("TITLE_BANK_PAGE_MAIN_TITLE")}
                </motion.h3>
                <motion.div variants={footerVariants} initial="hidden" animate="visible" exit="exit"
                            className="flex text-white xl:gap-4 2xl:gap-8 lg:gap-4">
                    <div className="xl:w-[64%] 2xl:w-[50%] lg:w-[58%]">
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px]">1.  {translate("TITLE_BANK_PAGE_LIST_TITLE1")}</p>
                        <ul className="list-disc mx-10 lg:text-[16px] xl:text-[20px] 2xl:text-[21px]">
                            <li>{translate("TITLE_BANK_PAGE_LIST_TITLE1_1")}</li>
                        </ul>
                        <img src="" alt=""/>
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px]">2. {translate("TITLE_BANK_PAGE_LIST_TITLE2")}</p>
                        <ul className="list-disc mx-10 lg:text-[16px] xl:text-[20px] 2xl:text-[21px]">
                            <li>{translate("TITLE_BANK_PAGE_LIST_TITLE2_1")}</li>
                            <li>{translate("TITLE_BANK_PAGE_LIST_TITLE2_2")}</li>
                        </ul>
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px]">3. {translate("TITLE_BANK_PAGE_LIST_TITLE3")}</p>
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px]">4. {translate("TITLE_BANK_PAGE_LIST_TITLE4")}</p>
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px]">5. {translate("TITLE_BANK_PAGE_LIST_TITLE5")}</p>
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px]">6. {translate("TITLE_BANK_PAGE_LIST_TITLE6")}:</p>
                        <ul className="list-disc mx-10 lg:text-[15px] xl:text-[18px] 2xl:text-[21px]">
                            <li>{translate("TITLE_BANK_PAGE_LIST_TITLE6_1")}</li>
                            <li>{translate("TITLE_BANK_PAGE_LIST_TITLE6_2")}</li>
                            <li>{translate("TITLE_BANK_PAGE_LIST_TITLE6_3")}</li>
                            <li>{translate("TITLE_BANK_PAGE_LIST_TITLE6_4")}</li>
                            <li>{translate("TITLE_BANK_PAGE_LIST_TITLE6_5")}</li>
                            <li>{translate("TITLE_BANK_PAGE_LIST_TITLE6_6")}</li>
                        </ul>
                        <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px]">7. {translate("TITLE_BANK_PAGE_LIST_TITLE7")}</p>
                    </div>
                </motion.div>
                <div className="2xl:mt-3 lg:mt-2 absolute xl:right-[5px] 2xl:right-[100px] lg:right-[60px] 2xl:bottom-[-35px] lg:bottom-[-44px] xl:bottom-[-50px]">
                    <motion.img variants={footerVariants} initial="hidden" animate="visible" exit="exit"
                                className="lg:w-[250px] xl:w-[280px] 2xl:w-[370px]" src={bankPhoneImage} alt=""/>
                </div>
            </ContentLayout>
        </motion.div>
    );
}

export default Bank;