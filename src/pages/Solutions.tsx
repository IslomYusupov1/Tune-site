import {motion} from "framer-motion";
import imageBgLight from "../assets/bg-light.jpg";
import ContentLayout from "../layouts/ContentLayout";

const headerVariant = {
    hidden: {
        y: 900,
        scale: 0.5,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 40, delay: 0.4}
    },
    exit: {
        y: 3000,
        transition: {ease: "easeInOut"}
    }
}

// const footerVariant = {
//     hidden: {
//         y: 900,
//         scale: 0.5,
//     },
//     visible: {
//         y: 0,
//         scale: 1,
//         transition: {type: "spring", stiffness: 45, delay: 0.5}
//     },
//     exit: {
//         y: 900,
//         transition: {ease: "easeInOut"}
//     }
// }
// const imageVariant = {
//     hidden: {
//         y: 900,
//         scale: 0.5,
//     },
//     visible: {
//         y: 0,
//         scale: 1,
//         transition: {type: "spring", stiffness: 45, delay: 0.5}
//     },
//     exit: {
//         y: 900,
//         transition: {ease: "easeInOut"}
//     }
// }

function Solutions() {
    return (
        <>
            <motion.img animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBgLight} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout>
                <motion.div variants={headerVariant} initial="hidden" animate="visible" exit="exit"
                            className="flex flex-col xl:mt-10 2xl:mt-0 3xl:mt-0 text-[#353535] lg:w-8/12 2xl:w-9/12 text-start font-light mx-[100px]">
                    <h3 className="2xl:text-[40px] lg:text-[32px] 3xl:text-[48px] leading-tight mb-10">Наше решение для обеспечения
                        омниканальности
                        банковских услуг</h3>
                    <h3 className="2xl:text-[32px] lg:text-[26px] 3xl:text-[40px] mb-1">Униканальная платформа на базе ELMA BPMS</h3>
                    <div className="flex justify-between gap-16">
                        <div className="w-1/2">
                            <h3 className="xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px] font-medium mb-3">CRM</h3>
                            <p className="pb-1 3xl:text-[20px]">Контакты и обращения</p>
                            <p className="pb-1 3xl:text-[20px]">Лиды</p>
                            <p className="mb-2 3xl:text-[20px]">Клиенты</p>
                        </div>
                        <div className="w-1/2">
                            <h3 className="xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px] font-medium mb-3">Настройки и безопасность</h3>
                            <p className="pb-1 3xl:text-[20px]">Роли и права пользователей</p>
                            <p className="pb-1 3xl:text-[20px]">Задачи и уведомления пользователям</p>
                            <p className="mb-2 3xl:text-[20px]">Группы пользователей и комитеты</p>
                        </div>
                    </div>
                    <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 1.2}}
                                className="border-b border-black w-full"/>
                    <div className="flex justify-between gap-16 ">
                        <div className="w-1/2">
                            <h3 className="xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px] font-medium mb-3">Бизнес процессы и БПМ движок</h3>
                            <p className="pb-1 3xl:text-[20px]">Онбординг клиента </p>
                            <p className="pb-1 3xl:text-[20px]">Кредитный конвейер</p>
                            <p className="pb-1 3xl:text-[20px]">Карточный конвейер</p>
                            <p className="pb-1 3xl:text-[20px]">Вкладные операции</p>
                            <p className="pb-1 3xl:text-[20px]">Входящие и исходящие переводы </p>
                            <p className="mb-2 3xl:text-[20px]">Операции по счетам</p>
                        </div>
                        <div className="w-1/2">
                            <h3 className="xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px] font-medium mb-3">Витрина продуктов</h3>
                            <p className="pb-1 3xl:text-[20px]">Кредиты</p>
                            <p className="pb-1 3xl:text-[20px]">Депозиты</p>
                            <p className="pb-1 3xl:text-[20px]">Карты</p>
                            <p className="pb-1 3xl:text-[20px]">Банкоматы</p>
                            <p className="pb-1 3xl:text-[20px]">Денежные переводы</p>
                            <p className="mb-2 3xl:text-[20px]">Переводы с счетов</p>
                        </div>
                    </div>
                    <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 1.5}}
                                className="border-b border-black w-full"/>
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <h3 className="xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px] font-medium mb-3">Управляющие и комитеты</h3>
                            <p className="pb-1 3xl:text-[20px]">Пользователи ДБО</p>
                            <p className="pb-1 3xl:text-[20px]">Пользователи сайта</p>
                            <p className="pb-1 3xl:text-[20px]">Операционисты и аналитики</p>
                            <p>Коллцентр</p>
                        </div>
                    </div>
                </motion.div>
            </ContentLayout>
        </>
    );
}

export default Solutions;