import bankPhoneImage from "../assets/phone.png";
import {motion} from "framer-motion";
import imageBg from "../assets/bg-dark.png";
import ContentLayout from "../layouts/ContentLayout";

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
            <ContentLayout className="relative">
                <motion.h3 variants={headerVariants} initial="hidden" animate="visible" exit="exit"
                           className="text-[40px] 3xl:text-[58px] mb-20 mt-20">Цифровые банковские платформы
                </motion.h3>
                <motion.div variants={footerVariants} initial="hidden" animate="visible" exit="exit"
                            className="flex 2xl:gap-8 lg:gap-4">
                    <div className="xl:w-[65%] 3xl:w-[50%]">
                        <p className="lg:text-[18px] 2xl:text-[20px] 3xl:text-[28px]">1. 12 проектов ДБО физлица</p>
                        <ul className="list-disc mx-10 lg:text-[18px] 2xl:text-[20px] 3xl:text-[28px]">
                            <li>2 проекта на стадии внедрения</li>
                        </ul>
                        <p className="lg:text-[18px] 2xl:text-[20px] 3xl:text-[28px]">2. 3 проекта ДБО юрлица</p>
                        <ul className="list-disc mx-10 lg:text-[18px] 2xl:text-[20px] 3xl:text-[28px]">
                            <li>1 проект на стадии внедрения</li>
                            <li>12 live and 2 in process retail mobile banking platforms</li>
                        </ul>
                        <p className="lg:text-[18px] 2xl:text-[20px] 3xl:text-[28px]">3. Более 7 млн пользователей</p>
                        <p className="lg:text-[18px] 2xl:text-[20px] 3xl:text-[28px]">4. Настоящие униканальные платформы с интерфейсами
                            iOs, Android и Web</p>
                        <p className="lg:text-[18px] 2xl:text-[20px] 3xl:text-[28px]">5. Микросервисная архитектура с минимальной
                            зависимостью от АБС</p>
                        <p className="lg:text-[18px] 2xl:text-[20px] 3xl:text-[28px]">6. Успешные интеграции с 6 АБС:</p>
                        <ul className="list-disc mx-10 lg:text-[18px] 2xl:text-[20px] 3xl:text-[28px]">
                            <li>Temenos</li>
                            <li>iABS</li>
                            <li>NCI</li>
                            <li>ASBT</li>
                            <li>Korean system</li>
                            <li>CS</li>
                        </ul>
                        <p className="lg:text-[18px] 2xl:text-[20px] 3xl:text-[28px]">7. Используем Kubernetes и Doker оркестраторы</p>
                    </div>
                </motion.div>
                <div className="2xl:mt-3 lg:mt-2 absolute 2xl:right-[50px] 2xl:right-[100px] xl:right-[-50px] 2xl:bottom-[-35px] 3xl:bottom-[-15px] xl:bottom-[-40px]">
                    <motion.img variants={footerVariants} initial="hidden" animate="visible" exit="exit"
                                className="md:w-[420px] lg:w-[430px] xl:w-[350px] 2xl:w-[380px] 3xl:w-[650px]" src={bankPhoneImage} alt=""/>
                </div>
            </ContentLayout>
        </motion.div>
    );
}

export default Bank;