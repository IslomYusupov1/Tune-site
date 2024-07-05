import {motion} from "framer-motion";
import mkb from "../assets/mkb.svg";
import davr from "../assets/davr.svg";
import kapital from "../assets/kapital.svg";
import anorBank from "../assets/anor.svg";
import joyda from "../assets/joyda.svg";
import asia from "../assets/asia.svg";
import agat from "../assets/agat.svg";
import uzum from "../assets/uzum.svg";
import imageBgLight from "../assets/bg-light.jpg";
import ContentLayout from "../layouts/ContentLayout";

const headerVariant = {
    hidden: {
        y: -900,
        opacity: 0,
        scale: 0.5,
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {type: "spring", stiffness: 40}
    },
    exit: {
        y: -900,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}

const footerVariant = {
    hidden: {
        y: -900,
        opacity: 0,
        scale: 0.5,
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {type: "spring", stiffness: 40}
    },
    exit: {
        y: -900,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}
const imageVariant = {
    hidden: {
        y: -900,
        opacity: 0,
        scale: 0.5,
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {type: "spring", stiffness: 40}
    },
    exit: {
        y: -900,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}

function Crm() {
    return (
        <motion.div className="flex flex-col text-[#353535] xl:mt-5 2xl:mt-5 xl:w-9/12 2xl:w-10/12 text-start font-light mx-[100px]">
            <motion.img animate={{opacity: 1}} exit={{ opacity: 0 }} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBgLight} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-2"}}/>
            <ContentLayout>
                <motion.div variants={headerVariant} initial="hidden" animate="visible" exit="exit"
                            className="flex flex-col text-start">
                    <h3 className="2xl:text-[34px] xl:text-[25px] lg:text-[22px] leading-10 mb-2">CRM и полная автоматизация процессов
                        фронт офиса</h3>
                    <ul className="list-disc mx-8 2xl:text-[20px] xl:text-[18px] lg:text-[16px]">
                        <li>7 БПМ проектов для автоматизации процессов CRM ифронт офиса</li>
                        <li>Включаетавтоматизацию как розничных продуктов так и корпоративных</li>
                        <li>Обработкаонлайн и офлайн заявок в режиме реального времени</li>
                    </ul>
                </motion.div>
                <motion.div variants={footerVariant} initial="hidden" animate="visible" exit="exit"
                            className="flex flex-col text-start">
                    <h3 className="2xl:text-[28px] lg:text-[20px] xl:text-[22px] xl:mt-2 2xl:mt-5 lg:mt-2">Улучшение процессов в одном проекте ДО и
                        ПОСЛЕ</h3>
                    <div className="flex flex-col 2xl:text-[20px] xl:text-[18px] lg:text-[14px]">
                        <div
                            className="flex justify-between text-center items-center w-3/4 2xl:py-3 xl:py-1 lg:py-1 ">
                            <p className="opacity-0">Выдача карт</p>
                            <div className="flex gap-8">
                                <span>До</span>
                                <span>После</span>
                            </div>
                        </div>
                        <motion.div animate={{width: "75%"}} initial={{width: 0}}
                                    transition={{duration: 1, delay: 1.02}} className="border-b border-black"/>
                        <div className="flex justify-between w-3/4 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p>Выдача карт</p>
                            <div className="flex gap-8">
                                <span>20 min</span>
                                <span>3 min</span>
                            </div>
                        </div>
                        <motion.div animate={{width: "75%"}} initial={{width: 0}}
                                    transition={{duration: 1, delay: 1.04}} className="border-b border-black"/>
                        <div className="flex justify-between w-3/4 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p>Выдача кредитных карт</p>
                            <div className="flex gap-8">
                                <span>60 min</span>
                                <span>5 min</span>
                            </div>
                        </div>
                        <motion.div animate={{width: "75%"}} initial={{width: 0}}
                                    transition={{duration: 1, delay: 1.06}} className="border-b border-black"/>
                        <div className="flex justify-between w-3/4 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p>Авто кредиты для юр лиц</p>
                            <div className="flex gap-8">
                                <span>90 min</span>
                                <span>20 min</span>
                            </div>
                        </div>
                        <motion.div animate={{width: "75%"}} initial={{width: 0}}
                                    transition={{duration: 1, delay: 1.08}} className="border-b border-black"/>
                        <div className="flex justify-between w-3/4 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p>Авто кредиты для физ лиц</p>
                            <div className="flex gap-8">
                                <span>90 min</span>
                                <span>10 min</span>
                            </div>
                        </div>
                        <motion.div animate={{width: "75%"}} initial={{width: 0}} transition={{duration: 1, delay: 1.1}}
                                    className="border-b border-black"/>
                        <div className="flex justify-between w-3/4 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p>Офлайн депозиты</p>
                            <div className="flex gap-8">
                                <span>20 min</span>
                                <span>5 min</span>
                            </div>
                        </div>
                        <motion.div animate={{width: "75%"}} initial={{width: 0}}
                                    transition={{duration: 1, delay: 1.12}} className="border-b border-black"/>
                        <div className="flex justify-between w-3/4 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p>Мониторинг выданных кредитов</p>
                            <div className="flex gap-8">
                                <span>120 min</span>
                                <span>5 min</span>
                            </div>
                        </div>
                        <motion.div animate={{width: "75%"}} initial={{width: 0}}
                                    transition={{duration: 1, delay: 1.14}} className="border-b border-black"/>
                        <div className="flex justify-between w-3/4 2xl:py-2 xl:py-1 lg:py-1">
                            <p>Сбор данных для корп кредитов</p>
                            <div className="flex gap-8">
                                <span>60 min</span>
                                <span>2 min</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={imageVariant} initial="hidden" animate="visible" exit="exit"
                            className="2xl:mt-10 xl:mt-8 lg:mt-7 w-10/12">
                    <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 1.25}}
                                className="border-b border-black"/>
                    <div className="flex gap-x-8 gap-y-4 2xl:mt-2 xl:mt-3 flex-wrap">
                        <img src={mkb} alt="" className="2xl:w-[130px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={davr} alt="" className="2xl:w-[130px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={kapital} alt="" className="2xl:w-[130px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={anorBank} alt="" className="2xl:w-[130px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={joyda} alt="" className="2xl:w-[130px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={asia} alt="" className="2xl:w-[130px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={agat} alt="" className="2xl:w-[130px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={uzum} alt="" className="2xl:w-[130px] xl:w-[100px] lg:w-[80px]"/>
                    </div>
                </motion.div>
            </ContentLayout>
        </motion.div>
    );
}

export default Crm;