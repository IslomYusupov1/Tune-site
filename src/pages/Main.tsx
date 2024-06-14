import {motion} from "framer-motion";
import person from "../assets/person.svg";
import imageBg from "../assets/bg-image-back.png";

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
        <motion.div>
            <motion.img animate={{opacity: 1}} initial={{opacity: 0}}  transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex justify-center z-50">
                <motion.img width={700} animate={{ y: [20, -20, 20] }} transition={{ duration: 5, repeat: Infinity, repeatDelay: 0.1, repeatType: "loop" }} className="z-50"
                            src={person} alt=""/>
            </motion.div>
            <motion.h3 variants={textVariant} animate="visible" initial="hidden" exit="hidden"
                       className="text-start text-[40px] mx-[100px]">Taraqqiyot tasodif emas
            </motion.h3>
        </motion.div>
    );
}

export default Main;