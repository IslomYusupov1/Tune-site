import mkb from "../../assets/mkb.svg";
import davr from "../../assets/davr.svg";
import kapital from "../../assets/kapital.svg";
import anorBank from "../../assets/anor.svg";
import joyda from "../../assets/joyda.svg";
import asia from "../../assets/asia.svg";
import agat from "../../assets/agat.svg";
import uzum from "../../assets/uzum.svg";
import tenge from "../../assets/tenge.svg";
import orient from "../../assets/orient.svg";
import milliy from "../../assets/milliy.svg";
import {useRef} from "react";
import {useScroll, motion} from "framer-motion";

function CrmMobile() {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
        smooth: 1,
    })
    return (
        <motion.div ref={ref} style={{ opacity: scrollYProgress }}
            className="bg-[url('../assets/bg-light.png')] flex flex-col p-5 justify-center object-cover bg-no-repeat bg-center w-full">
            <motion.div style={{ scale: scrollYProgress }} className="h-full">
                <div className="flex flex-col text-start">
                    <h3 className="2xl:text-[34px] xl:text-[25px] lg:text-[22px] text-[22px] lg:leading-10 leading-7 font-medium  mb-2">CRM
                        и полная автоматизация процессов
                        фронт офиса</h3>
                    <ul className="list-disc mx-8 2xl:text-[20px] xl:text-[18px] lg:text-[16px]">
                        <li>7 БПМ проектов для автоматизации процессов CRM ифронт офиса</li>
                        <li>Включаетавтоматизацию как розничных продуктов так и корпоративных</li>
                        <li>Обработкаонлайн и офлайн заявок в режиме реального времени</li>
                    </ul>
                </div>
                <div className="flex flex-col text-start">
                    <h3 className="2xl:text-[28px] lg:text-[20px] xl:text-[22px] text-[20px] xl:mt-2 2xl:mt-5 lg:mt-2 mt-2">Улучшение
                        процессов в одном проекте ДО и
                        ПОСЛЕ</h3>
                    <div className="flex flex-col 2xl:text-[20px] xl:text-[18px] lg:text-[14px]">
                        <div
                            className="flex justify-between text-center items-center lg:w-3/4 w-full 2xl:py-3 xl:py-1 lg:py-1 ">
                            <p className="opacity-0">Выдача карт</p>
                            <div className="flex gap-8">
                                <span>До</span>
                                <span>После</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">Выдача карт</p>
                            <div className="flex gap-8">
                                <span>20 min</span>
                                <span>3 min</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">Выдача кредитных карт</p>
                            <div className="flex gap-8">
                                <span>60 min</span>
                                <span>5 min</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">Авто кредиты для юр лиц</p>
                            <div className="flex gap-8">
                                <span>90 min</span>
                                <span>20 min</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">Авто кредиты для физ лиц</p>
                            <div className="flex gap-8">
                                <span>90 min</span>
                                <span>10 min</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">Офлайн депозиты</p>
                            <div className="flex gap-8">
                                <span>20 min</span>
                                <span>5 min</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                            <p className="w-1/2 leading-5">Мониторинг выданных кредитов</p>
                            <div className="flex gap-8">
                                <span>120 min</span>
                                <span>5 min</span>
                            </div>
                        </div>
                        <div className="border-b border-black"/>
                        <div
                            className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1">
                            <p className="w-1/2 leading-5">Сбор данных для корп кредитов</p>
                            <div className="flex gap-8">
                                <span>60 min</span>
                                <span>2 min</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:mt-10 xl:mt-8 lg:mt-7 mt-5 lg:w-10/12 w-full">
                    <div className="border-b border-black"/>
                    <div className="flex gap-x-8 gap-y-4 2xl:mt-2 xl:mt-3 mt-3 flex-wrap">
                        <img src={mkb} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={davr} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={kapital} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={anorBank} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={joyda} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={asia} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={agat} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={uzum} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={tenge} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={orient} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={milliy} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default CrmMobile;