import videoFile from "/video.mp4";
import {motion} from "framer-motion";
import imageBg from "../assets/bg-image-back.png";
import {useState} from "react";

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
                    <video className="w-10/12 rounded-lg" muted={true} loop={true}
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
                    {!open && <h3 className="text-[40px]">О нас</h3>}
                    {!open && <p className="max-w-[775px] text-[20px] leading-24">Созданы в 2009 году в Ташкенте в
                        качестве «бутика» для комплексных банковских проектов..... <br/> <i
                            className="text-[16px] text-[#007AFF] cursor-pointer" onClick={() => setOpen(true)}>Читать
                            дальше</i></p>}
                    {open && <motion.div variants={textFullVariants}
                                         initial="hidden"
                                         animate="visible"
                                         exit={open ? "exit" : "" } >
                        <h3 className="text-[40px]">О нас</h3>
                        <p className="max-w-[775px] text-[20px] leading-25 mb-5">Созданы в 2009 году в Ташкенте в
                            качестве «бутика» для комплексных банковских проектов.</p>
                        <p className="max-w-[775px] text-[20px] leading-25 mt-5">Начиная с 2017 фокусируемся больше на
                            цифровых решениях.</p>
                        <p className="max-w-[775px] text-[20px] leading-25 mb-5">В семье TUNE более 100 сотрудников.Цель
                            на
                            2024 год удвоить этот показатель.</p>
                        <p className="max-w-[775px] text-[20px] leading-25 mb-5">Являемся резидентами ИТ парка и вносим
                            свой
                            вклад в программу «миллионпрограммистов к 2030 году». </p>
                        <p className="max-w-[775px] text-[20px] leading-25 mb-5">Отдельныекоманды по направлениям. <br/>
                            Цифровые банковские решения и платформы. <br/>
                            Проекты по внедрению BPM инструментов. <br/>
                            Разработки под заказ и под ключ. </p>
                        <p className="max-w-[775px] text-[20px] leading-25">Custom developments, Технологическийпартнер
                            1го национального маркетплейса Sello. <br/> <i
                                className="text-[16px] text-[#007AFF] cursor-pointer"
                                onClick={() => setOpen(false)}>Свернуть</i></p>

                    </motion.div>}
                </motion.div>
            </motion.div>
        </>
    );
}

export default About;