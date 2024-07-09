import mkb from "../assets/mkb.svg";
import davr from "../assets/davr.svg";
import kapital from "../assets/kapital.svg";
import anorBank from "../assets/anor.svg";
import joyda from "../assets/joyda.svg";
import asia from "../assets/asia.svg";
import agat from "../assets/agat.svg";
import uzum from "../assets/uzum.svg";

import {motion} from "framer-motion";
import imageBgLight from "../assets/bg-light.jpg"
import ContentLayout from "../layouts/ContentLayout";

const headerVariants = {
    hidden: {
        y: -1000,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 30}
    },
    exit: {
        y: -1000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}
const footerVariants = {
    hidden: {
        y: 1000,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 30}
    },
    exit: {
        y: 1000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}


function Loan() {
    return (
        <motion.div className="text-[#353535] w-11/12 mx-auto mx-[100px] lg:mt-5 xl:mt-5">
            <motion.img loading="lazy" animate={{opacity: 1}} exit={{ opacity: 0, transition: {ease: "easeInOut"} }} initial={{opacity: 0}} transition={{duration: 0.8, ease: "easeInOut"}}
                        alt="" src={imageBgLight} className="fixed w-full h-full top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout className="relative">
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex text-red-black flex-col text-start w-9/12">
                    <h3 className="xl:text-[30px] lg:text-[26px] 2xl:text-[48px] text-[20px] md:[24px] font-light">Кредитный конвейер и скоринг движок</h3>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">1. 8 проектов с использованием BPM системы для автоматизации конвейеров и
                        скоринговых движков</p>
                    <ul className="list-disc mx-10 xl:text-[18px] lg:text-[14px] 2xl:text-[22px] md:text-[20px] text-[15px]">
                        <li>Быстрые и онлайн процессы в течение 1-2 минут</li>
                        <li>Длинные процессы для сложных кредитных продуктов</li>
                    </ul>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">2. Конвейеры для розничного и корпоративного кредитования</p>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">3. Омниканальность обеспечивается бизнес процессами как для онлайн
                        обращений
                        так и для офлайн клиентов</p>
                    <ul className="list-disc mx-10 xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">
                        <li>5 проектов с конвейерами успешно синтегрированы с мобильными банками от TUNE</li>
                        <li>Для онлайн заявок используем фейс идентификацию через MYID</li>
                    </ul>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">4. Скор карты продуктов полностью параметризируемые и управляются риск
                        департаментом без участия ИТ департамента или разработчиков</p>
                    <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">5. Связь со всеми внешними системами поддерживается через шину обмена
                        данных
                        TUNE BELT</p>
                    <ul className="list-disc mx-10 xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">
                        <li>Обычно участвуют 10 и более систем для сбора данных о заявителях</li>
                    </ul>
                </motion.div>
                <motion.div
                    variants={footerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="2xl:mt-16 xl:mt-5 lg:mt-8 w-10/12">
                    <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 1.5}}
                                className="border-b border-black"/>
                    <div className="flex gap-x-8 gap-y-4 mt-3 flex-wrap">
                        <img src={mkb} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={davr} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={kapital} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={anorBank} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={joyda} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={asia} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={agat} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={uzum} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                    </div>
                </motion.div>
            </ContentLayout>
        </motion.div>
    );
}

export default Loan;