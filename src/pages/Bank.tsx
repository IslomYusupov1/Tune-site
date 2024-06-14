import bankPhoneImage from "../assets/bank-phone-img.svg";
import {motion} from "framer-motion";
import imageBg from "../assets/bg-image-back.png";

const headerVariants = {
    hidden: {
        y: -700,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {duration: 0.5, type: "spring", stiffness: 30, ease: "easeInOut", delay: 0.5}
    },
    exit: {
        y: -1000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}
const footerVariants = {
    hidden: {
        y: 700,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {duration: 0.5, type: "spring", stiffness: 30, ease: "easeInOut", delay: 0.5}
    },
    exit: {
        y: 1000,
        opacity: 0,
        transition: {ease: "easeInOut"}
    }
}

function Bank() {
    return (
        <motion.div className="flex 2xl:w-10/12 lg:w-9/12 flex-col text-start bank-page mx-[100px]">
            <motion.img animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <motion.h3 variants={headerVariants} initial="hidden" animate="visible" exit="exit"
                       className="text-[40px] mb-20">Цифровые банковские платформы
            </motion.h3>
            <motion.div variants={footerVariants} initial="hidden" animate="visible" exit="exit"
                        className="flex 2xl:gap-8 lg:gap-4 relative">
                <div className="">
                    <p className="lg:text-[18px] 2xl:text-[20px]">1. 12 проектов ДБО физлица</p>
                    <ul className="list-disc mx-10 lg:text-[18px] 2xl:text-[20px]">
                        <li>2 проекта на стадии внедрения</li>
                    </ul>
                    <p className="lg:text-[18px] 2xl:text-[20px]">2. 3 проекта ДБО юрлица</p>
                    <ul className="list-disc mx-10 lg:text-[18px] 2xl:text-[20px]">
                        <li>1 проект на стадии внедрения</li>
                        <li>12 live and 2 in process retail mobile banking platforms</li>
                    </ul>
                    <p className="lg:text-[18px] 2xl:text-[20px]">3. Более 7 млн пользователей</p>
                    <p className="lg:text-[18px] 2xl:text-[20px]">4. Настоящие униканальные платформы с интерфейсами
                        iOs, Android и Web</p>
                    <p className="lg:text-[18px] 2xl:text-[20px]">5. Микросервисная архитектура с минимальной
                        зависимостью от АБС</p>
                    <p className="lg:text-[18px] 2xl:text-[20px]">6. Успешные интеграции с 6 АБС:</p>
                    <ul className="list-disc mx-10 lg:text-[18px] 2xl:text-[20px]">
                        <li>Temenos</li>
                        <li>iABS</li>
                        <li>NCI</li>
                        <li>ASBT</li>
                        <li>Korean system</li>
                        <li>CS</li>
                    </ul>
                    <p className="lg:text-[18px] 2xl:text-[20px]">7. Используем Kubernetes и Doker оркестраторы</p>
                </div>
                <div className="2xl:mt-3 lg:mt-2">
                    <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.6 }} className="image-bank md:w-7/12 lg:w-11/12 2xl:w-11/12" src={bankPhoneImage} alt=""/>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Bank;