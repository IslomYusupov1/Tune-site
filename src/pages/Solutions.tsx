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
        transition: {type: "spring", stiffness: 30, ease: "easeInOut"}
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
            <motion.img animate={{opacity: 1}} exit={{ opacity: 0, transition: {ease: "easeInOut"} }} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBgLight} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout>
                <motion.div variants={headerVariant} initial="hidden" animate="visible" exit="exit"
                            className="flex flex-col xl:mt-10 lg:mt-10 2xl:mt-0 3xl:mt-0 text-[#353535] lg:w-8/12 2xl:w-9/12 text-start font-light mx-[100px]">
                    <h3 className="2xl:text-[40px] lg:text-[22px] xl:text-[26px] leading-tight xl:mb-4 2xl:mb-10 lg:mb-4">Наше решение для обеспечения
                        униканальности
                        банковских услуг</h3>
                    <h3 className="2xl:text-[32px] lg:text-[18px] xl:text-[22px] mb-1">Униканальная платформа на базе ELMA BPMS</h3>
                    <div className="flex justify-between gap-16">
                        <div className="w-1/2">
                            <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] font-medium 2xl:mb-3 xl:mb-1">CRM</h3>
                            <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px]">Контакты и обращения</p>
                            <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px]">Лиды</p>
                            <p className="mb-2 2xl:text-[20px] xl:text-[15px] lg:text-[13px]">Клиенты</p>
                        </div>
                        <div className="w-1/2">
                            <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] font-medium 2xl:mb-3 xl:mb-1">Настройки и безопасность</h3>
                            <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px]">Роли и права пользователей</p>
                            <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px]">Задачи и уведомления пользователям</p>
                            <p className="mb-2 2xl:text-[20px] xl:text-[15px] lg:text-[13px]">Группы пользователей и комитеты</p>
                        </div>
                    </div>
                    <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 1.2}}
                                className="border-b border-black w-full"/>
                    <div className="flex justify-between gap-16 ">
                        <div className="w-1/2">
                            <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] font-medium 2xl:mb-3 xl:mb-1">Бизнес процессы и БПМ движок</h3>
                            <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px]">Онбординг клиента </p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px]">Кредитный конвейер</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px]">Карточный конвейер</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px]">Вкладные операции</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px]">Входящие и исходящие переводы </p>
                            <p className="mb-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px]">Операции по счетам</p>
                        </div>
                        <div className="w-1/2">
                            <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] font-medium 2xl:mb-3 xl:mb-1">Витрина продуктов</h3>
                            <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px]">Кредиты</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px]">Депозиты</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px]">Карты</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px]">Банкоматы</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px]">Денежные переводы</p>
                            <p className="mb-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px]">Переводы с счетов</p>
                        </div>
                    </div>
                    <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 1.5}}
                                className="border-b border-black w-full"/>
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] font-medium 2xl:mb-3 xl:mb-1">Управляющие и комитеты</h3>
                            <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px]">Пользователи ДБО</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px]">Пользователи сайта</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px]">Операционисты и аналитики</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px]">Коллцентр</p>
                        </div>
                    </div>
                </motion.div>
            </ContentLayout>
        </>
    );
}

export default Solutions;