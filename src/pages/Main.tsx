import {motion} from "framer-motion";
import person from "../assets/person.svg";
import ContentLayout from "../layouts/ContentLayout";

const imageVariants = {
    hidden: {
        y: -1000,
    },
    visible: {
        y: -50,
        transition: {duration: 0.2, type: "spring", ease: "easeInOut", stiffness: 40}
    },
    exit: {
        y: -2000,
        transition: {ease: "easeInOut"}
    },
}

const textVariant = {
    hidden: {
        y: 550
    },
    visible: {
        y: -50,
        transition: {duration: 0.2, delay: 0.2, type: "spring", ease: "easeInOut", stiffness: 40}
    },
    exit: {
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}

function Main() {

    return (
        <div className="justify-center items-center text-center my-auto">
            <ContentLayout className="relative">
                <motion.div
                    // variants={imageVariants}
                    // initial="hidden"
                    // animate="visible"
                    // exit="exit"
                    className="flex justify-center z-30">
                    <motion.img variants={imageVariants}
                                initial="hidden"
                                loading="lazy"
                                animate="visible"
                                exit="exit" className=" 2xl:w-[800px] xl:w-[600px] lg:w-[500px] md:w-[400px]"
                        // transition={{duration: 5, repeat: Infinity, repeatDelay: 0.1, repeatType: "loop"}}
                                src={person} alt=""/>
                </motion.div>
                <motion.h3 variants={textVariant} animate="visible" initial="hidden" exit="hidden"
                           className="text-start text-white absolute bottom-0 xl:text-[40px] 2xl:text-[48px] lg:text-[36px] mx-[100px]">Прогресс не случайность
                </motion.h3>
            </ContentLayout>
        </div>
    );
}

export default Main;