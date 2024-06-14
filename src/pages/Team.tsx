import teamImage from "../assets/team.svg";
import {motion} from "framer-motion";
import imageBg from "../assets/bg-image-back.png";

const containerVariants = {
    hidden: {
        // x: -2000,
        scale: 0,
    },
    visible: {
        // x: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 40, ease: "easeIn", delay: 0.5}
    },
    exit: {
        scale: 0,
        transition: {ease: "easeInOut"}
    }
}

function Team() {
    return (
        <>
            <motion.img animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit"
                        className="flex w-10/12 flex-col text-start bank-page mx-auto mt-16 relative">
                <div className="flex justify-center">
                    <img src={teamImage} alt=""/>
                    <div className="flex flex-col absolute bottom-[70px] left-0 w-[700px]">
                        <h3 className="text-[48px]">Наша команда</h3>
                        <p className="text-[20px] leading-6">Созданы в 2009 году в Ташкенте в качестве «бутика» для
                            комплексных банковских проектов. Начиная с 2017 фокусируемся больше на цифровых
                            решениях.</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Team;