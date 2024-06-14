import videoFile from "/video.mp4";
import {motion} from "framer-motion";
import imageBg from "../assets/bg-image-back.png";

const containerVariants = {
    hidden: {
        x: -2000,
        scale: 0.5,
    },
    visible: {
        x: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 40, ease: "easeIn", delay: 0.3}
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
        transition: {duration: 0.45, type: "tween"}
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

function About() {
    return (
        <>
            <motion.img animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit"
                        className="w-9/12 z-50 h-[600px] mx-[100px] bg-black rounded-lg mt-10 relative px-2">
                <motion.div
                    variants={videoVariants}
                    initial="hidden"
                    animate="visible"
                    className=" opacity-30 flex justify-end text-end items-end w-full border border-transparent mt-5 rounded-lg">
                    <video className="w-10/12" muted={true} loop={true}
                           autoPlay={true}
                           preload="auto"
                           controls={true}
                    >
                        <source src={videoFile} type="video/mp4"/>
                    </video>
                </motion.div>
                <motion.div variants={textVariants}
                            initial="hidden"
                            animate="visible" className="flex flex-col text-start absolute bottom-[50px] left-[50px]">
                    <h3 className="text-[40px]">О нас</h3>
                    <p className="max-w-[775px] text-[20px] leading-24">Созданы в 2009 году в Ташкенте в
                        качестве «бутика» для комплексных банковских проектов.....</p>
                </motion.div>
            </motion.div>
        </>
    );
}

export default About;