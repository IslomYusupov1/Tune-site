import teamImage from "../assets/team.png";
import {motion} from "framer-motion";
import imageBg from "../assets/bg-dark.png";
import ContentLayout from "../layouts/ContentLayout";
import {useState} from "react";

const containerVariants = {
    hidden: {
        // x: -2000,
        scale: 0,
    },
    visible: {
        // x: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 40, ease: "easeIn"}
    },
    exit: {
        scale: 0,
        transition: {ease: "easeInOut"}
    }
}
const textFullVariants = {
    hidden: {
        y: 70,
        opacity: 0,
    },
    visible: {
        y: 40,
        opacity: 1,
        transition: {duration: 0.5, type: "spring", stiffness: 200}
    },
    exit: {
        y: 900,
        transition: {ease: "easeInOut"}
    }
}
function Team() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <motion.img animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout>
                <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit"
                            className="flex w-11/12 flex-col text-start bank-page mt-16 relative">
                    <div className="flex justify-center">
                        <img src={teamImage} alt="" className="w-9/12"/>
                        <div className="flex text-white flex-col absolute bottom-[70px] left-0 w-[700px]">
                            {!open && <h3 className="text-[40px]">Наша команда</h3>}
                            {!open && <p className="max-w-[775px] text-[20px] leading-24">Наши разработчики обладают глубокими знаниями и многолетним опытом в создании надежных и высококачественных решений... <br/> <g
                                    className="text-[16px] text-[#007AFF] cursor-pointer" onClick={() => setOpen(true)}>Читать
                                    дальше</g></p>}
                            {open && <motion.div variants={textFullVariants}
                                                 initial="hidden"
                                                 animate="visible"
                                                 exit={open ? "exit" : ""}>
                                <h3 className="text-[40px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[48px]">Наша команда</h3>
                                <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25">Наши разработчики обладают глубокими знаниями и многолетним опытом в создании надежных и высококачественных решений.Проектные менеджеры - настоящие мастера своего дела. Они тщательно планируют и координируют каждый этап проекта, обеспечивая его успешное завершение в срок и в рамках бюджета. А команда дизайнеров создает уникальные и привлекательные интерфейсы, которые не только радуют глаз, но и обеспечивают отличное пользовательское взаимодействие. Ну а аналитики и тестировщики тщательно проверяют каждую деталь, чтобы гарантировать безупречную работу вашего проекта.
                                    Мы уделяем особое внимание для профессионального роста наших сотрудников - в качестве которого мы еженедельно организовываем онлайн-тренинги с участием наших Senior-коллег. Исходя из чего можно сказать, что - мы не только команда, а маленькая семья… <br/> <g
                                        className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] text-[#007AFF] cursor-pointer"
                                        onClick={() => setOpen(false)}>Свернуть</g></p>

                            </motion.div>}
                        </div>
                    </div>
                </motion.div>
            </ContentLayout>
        </>
    );
}

export default Team;