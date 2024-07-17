import videoFile from "../assets/video.mp4";
import {motion} from "framer-motion";
import imageBg from "../assets/bg-dark.png";
import {useState} from "react";
import ContentLayout from "../layouts/ContentLayout";
import {useI18n} from "../i18n/I18nContext";

const containerVariants = {
    hidden: {
        x: -2000,
        scale: 0.5,
    },
    visible: {
        x: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 30}
    },
    exit: {
        scale: 0,
        transition: {ease: "easeInOut"}
    }
}

const videoVariants = {
    hidden: {
        x: -2000
    },
    visible: {
        x: 0,
        transition: {duration: 0.3, type: "spring", stiffness: 30}
    },
    // exit: {
    //     x: -900,
    //     transition: {ease: "easeInOut"}
    // }
}

const textVariants = {
    hidden: {
        x: -2000
    },
    visible: {
        x: 0,
        transition: {duration: 0.4, type: "tween"}
    },
    // exit: {
    //     x: -900,
    //     transition: {ease: "easeInOut"}
    // }
}


const textFullVariants = {
    hidden: {
        y: 70,
        opacity: 0,
    },
    visible: {
        y: 10,
        opacity: 1,
        transition: {duration: 0.5, type: "spring", stiffness: 200}
    },
    exit: {
        y: 900,
        transition: {ease: "easeInOut"}
    }
}

function About() {
    const [open, setOpen] = useState(false);

    const { translate } = useI18n();

    return (
        <>
            <motion.img loading="lazy" animate={{opacity: 1}} initial={{opacity: 0}}
                        exit={{opacity: 0, transition: {ease: "easeInOut"}}}
                        transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout className="relative">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit"
                            className="md:w-9/12 mx-2 lg:mx-[20px] py-3 lg:h-[400px] overflow-hidden
                             xl:mx-[80px] 2xl:mx-[120px] md:mx-[10px]  md:h-[300px]
                              2xl:h-[600px] xl:h-[480px] bg-black rounded-lg
                               mt-10 relative px-2 flex flex-col h-screen">
                    <motion.div variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                className={`flex flex-col mx-3 text-white text-start z-50 ${open ? "absolute top-0" : "block"} md:absolute md:bottom-[50px] md:left-[50px]`}>
                        {!open && <h3 className="text-[24px] md:text-[40px]">{translate("TITLE_ABOUT_PAGE_ABOUT_TITLE")}</h3>}
                        {!open && <p className="max-w-[775px] md:text-[20px] text-[16px] leading-24">{translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE")}..<br/>
                            <g
                                className="text-[16px] z-50 text-[#007AFF] cursor-pointer"
                                onClick={() => setOpen(true)}>Читать
                                дальше
                            </g>
                        </p>}
                        {open && <motion.div variants={textFullVariants}
                                             initial="hidden"
                                             animate="visible"
                                             exit={open ? "exit" : ""}>
                            <h3 className="text-[24px] xl:text-[32px] 2xl:text-[40px]">{translate("TITLE_ABOUT_PAGE_ABOUT_TITLE")}</h3>
                            <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[21px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">{translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE")}</p>
                            <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[21px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">{translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE1")}</p>
                            <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[21px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">{translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE2")}</p>
                            <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[21px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">{translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE3")}</p>
                            <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[21px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">{translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE4")}<br/>
                                {translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE5")}<br/>
                                {translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE6")}<br/>
                                {translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE7")}</p>
                            <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[24px] leading-25">{translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE8")}<br/>
                                <g
                                    className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] text-[#007AFF] cursor-pointer"
                                    onClick={() => setOpen(false)}>Свернуть
                                </g>
                            </p>

                        </motion.div>}
                    </motion.div>
                    <motion.div
                        variants={videoVariants}
                        initial="hidden"
                        animate="visible"
                        className={`${open ? "opacity-10" : "opacity-30"} flex justify-end h-4/6 md:bg-transparent bg-white border-none text-end md:h-auto items-end w-full border border-transparent mt-5 rounded-2xl md:rounded-xl`}>
                        <video className="md:w-10/12 z-10 h-full rounded-lg" muted={true} loop={true}
                               autoPlay={true}
                               preload="auto"
                               controls={true}
                        >
                            <source src={videoFile} type="video/mp4"/>
                        </video>
                    </motion.div>
                </motion.div>
            </ContentLayout>

        </>
    );
}

export default About;