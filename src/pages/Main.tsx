import {motion} from "framer-motion";
import person from "../assets/person.svg";
import imageBg from "../assets/bg-image-back.png";
import ContentLayout from "../layouts/ContentLayout";

const imageVariants = {
    hidden: {
        y: -2000,
    },
    visible: {
        y: 0,
        transition: {type: "spring", stiffness: 40, delay: 0.3}
    },
    exit: {
        y: -2000,
        transition: {ease: "easeInOut"}
    },
}

const textVariant = {
    hidden: {
        y: 450
    },
    visible: {
        y: 10,
        transition: {duration: 0.3, delay: 0.3}
    },
    exit: {
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}

function Main() {
    return (
        <div className="justify-center items-center text-center my-auto">
            <motion.img animate={{opacity: 1}} initial={{opacity: 0}}  transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout className="justify-evenly">
                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex justify-center z-50">
                    <motion.img className="z-50 xl:w-[600px] 2xl:w-[700px] 3xl:w-[1000px]"
                                src={person} alt=""/>
                </motion.div>
                <motion.h3 variants={textVariant} animate="visible" initial="hidden" exit="hidden"
                           className="text-start text-white xl:text-[40px] 2xl:text-[48px] 3xl:text-[58px] mx-[100px]">Taraqqiyot tasodif emas
                </motion.h3>
            </ContentLayout>
        </div>
    );
}

export default Main;