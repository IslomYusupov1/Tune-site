import teamImage from "../assets/team.png";
import {motion} from "framer-motion";
import imageBg from "../assets/bg-dark.png";
import ContentLayout from "../layouts/ContentLayout";
import {useState} from "react";
import {useI18n} from "../i18n/I18nContext";

const containerVariants = {
    hidden: {
        // x: -2000,
        scale: 0,
    },
    visible: {
        // x: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 30, ease: "easeIn"}
    },
    exit: {
        scale: 0,
        transition: {ease: "easeInOut"}
    }
}
const textFullVariants = {
    hidden: {
        y: 70,
        opacity: 0,
    },
    visible: {
        y: 40,
        opacity: 1,
        transition: {duration: 0.5, type: "spring", stiffness: 100}
    },
    exit: {
        y: 900,
        transition: {ease: "easeInOut"}
    }
}
function Team() {
    const [open, setOpen] = useState(false);
    const { translate } = useI18n();

    return (
        <>
            <motion.img animate={{opacity: 1}} exit={{ opacity: 0, transition: {ease: "easeInOut"} }} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout>
                <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit"
                            className="flex w-11/12 flex-col text-start bank-page mt-16 relative">
                    <div className="flex justify-center">
                        <img src={teamImage} alt="" className="w-9/12"/>
                        <div className="flex text-white flex-col absolute bottom-[70px] left-0 w-[700px]">
                            {!open && <h3 className="text-[40px]">{translate("TITLE_TEAM_PAGE_TEAM_TITLE")}</h3>}
                            {!open && <p className="max-w-[775px] text-[20px] leading-24">{translate("TITLE_TEAM_PAGE_MAIN_TITLE")}... <br/> <g
                                    className="text-[16px] text-[#007AFF] cursor-pointer" onClick={() => setOpen(true)}>Читать
                                    дальше</g></p>}
                            {open && <motion.div variants={textFullVariants}
                                                 initial="hidden"
                                                 animate="visible"
                                                 exit={open ? "exit" : ""}>
                                <h3 className="text-[40px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[48px]">{translate("TITLE_TEAM_PAGE_TEAM_TITLE")}</h3>
                                <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25">{translate("TITLE_TEAM_PAGE_MAIN_FULL_TITLE")} <br/> <g
                                        className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] text-[#007AFF] cursor-pointer"
                                        onClick={() => setOpen(false)}>Свернуть</g></p>

                            </motion.div>}
                        </div>
                    </div>
                </motion.div>
            </ContentLayout>
        </>
    );
}

export default Team;