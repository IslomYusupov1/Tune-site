import videoImg from "../assets/portfolio-video.svg";
import {motion} from "framer-motion";
import imageBgLight from "../assets/bg-light.jpg";
import ContentLayout from "../layouts/ContentLayout";

const imageVariant = {
    hidden: {
        x: -800,
        opacity: 0,
        // scale: 0.5,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {type: "spring", stiffness: 40}
    },
    exit: {
        x: -9000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}

const contentVariant = {
    hidden: {
        x: -800,
        opacity: 0,
        // scale: 0.5,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {type: "spring", stiffness: 40}
    },
    exit: {
        x: -9000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}

const content2Variant = {
    hidden: {
        x: -800,
        opacity: 0,
        // scale: 0.5,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {type: "spring", stiffness: 40, delay: 0.05}
    },
    exit: {
        x: -9000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}

const content3Variant = {
    hidden: {
        x: -800,
        opacity: 0,
        // scale: 0.5,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {type: "spring", stiffness: 40, delay: 0.1}
    },
    exit: {
        x: -9000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}

const content4Variant = {
    hidden: {
        x: -800,
        opacity: 0,
        // scale: 0.5,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {type: "spring", stiffness: 40, delay: 0.15}
    },
    exit: {
        x: -9000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}

function Portfolio() {
    return (
        <div
            className="flex flex-col 2xl:mt-[50px] lg:mt-[20px] gap-4 text-[#353535] lg:w-8/12 2xl:w-8/12 text-start font-light mx-[100px]">
            <motion.img animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBgLight} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout>

                <motion.h3 variants={imageVariant} animate="visible" initial="hidden"
                           exit="exit"
                           className="2xl:text-[40px] lg:text-[32px]">Наша работа
                </motion.h3>
                <motion.div variants={contentVariant} animate="visible" initial="hidden"
                            exit="exit"
                            className="flex">
                    <div className="mx-2">
                        <h3 className="2xl:text-[24px] lg:text-[20px] font-medium">Xazna</h3>
                        <h3 className="2xl:text-[20px] lg:text-[20px] leading-7 mt-1">Созданы в 2009 году в Ташкенте в
                            качестве «бутика» для
                            комплексных банковских проектов. Начиная
                            с 2017 фокусируемся больше на цифровых решениях. </h3>
                    </div>
                    <img src={videoImg} alt=""/>
                </motion.div>
                <motion.div variants={content2Variant} animate="visible" initial="hidden"
                            exit="exit"
                            className="flex items-center text-start">
                    <div className="mx-2">
                        <h3 className="2xl:text-[24px] lg:text-[20px] font-medium">JOYDA</h3>
                        <h3 className="2xl:text-[20px] lg:text-[20px] leading-7 mt-1">Созданы в 2009 году в Ташкенте в
                            качестве «бутика» для
                            комплексных банковских проектов. Начиная
                            с 2017 фокусируемся больше на цифровых решениях. </h3>
                    </div>
                    <img src={videoImg} alt=""/>
                </motion.div>
                <motion.div variants={content3Variant} animate="visible" initial="hidden"
                            exit="exit"
                            className="flex">
                    <div className="mx-2">
                        <h3 className="2xl:text-[24px] lg:text-[20px] font-medium">SELLO</h3>
                        <h3 className="2xl:text-[20px] lg:text-[20px] leading-7 mt-1">Созданы в 2009 году в Ташкенте в
                            качестве «бутика» для
                            комплексных банковских проектов. Начиная
                            с 2017 фокусируемся больше на цифровых решениях. </h3>
                    </div>
                    <img src={videoImg} alt=""/>
                </motion.div>
                <motion.div variants={content4Variant} animate="visible" initial="hidden"
                            exit="exit"
                            className="flex">
                    <div className="mx-2">
                        <h3 className="2xl:text-[24px] lg:text-[20px] font-medium">MAVRID</h3>
                        <h3 className="2xl:text-[20px] lg:text-[20px] leading-7 mt-1">Созданы в 2009 году в Ташкенте в
                            качестве «бутика» для
                            комплексных банковских проектов. Начиная
                            с 2017 фокусируемся больше на цифровых решениях. </h3>
                    </div>
                    <img src={videoImg} alt=""/>
                </motion.div>
            </ContentLayout>
        </div>
    );
}

export default Portfolio;