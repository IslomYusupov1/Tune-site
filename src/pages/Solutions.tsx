import {motion} from "framer-motion";
import imageBgLight from "../assets/bg-white.png";

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
            <motion.div variants={headerVariant} initial="hidden" animate="visible" exit="exit"
                        className="flex flex-col text-[#353535] lg:w-8/12 2xl:w-9/12 text-start font-light mx-[100px]">
                <h3 className="2xl:text-[40px] lg:text-[32px] leading-10 mb-10">Наше решение для обеспечения
                    омниканальности
                    банковских услуг</h3>
                <h3 className="2xl:text-[32px] lg:text-[26px] mb-1">Униканальная платформа на базе ELMA BPMS</h3>
                <div className="flex justify-between gap-16">
                    <div className="w-1/2">
                        <h3 className="text-[24px] font-medium mb-3">CRM</h3>
                        <p className="pb-1">Контакты и обращения</p>
                        <p className="pb-1">Лиды</p>
                        <p className="mb-2">Клиенты</p>
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-[24px] font-medium mb-3">Настройки и безопасность</h3>
                        <p className="pb-1">Роли и права пользователей</p>
                        <p className="pb-1">Задачи и уведомления пользователям</p>
                        <p className="mb-2">Группы пользователей и комитеты</p>
                    </div>
                </div>
                <motion.div animate={{ width: "100%" }} initial={{ width: 0 }} transition={{ duration: 1, delay: 1.2}} className="border-b border-black w-full" />
                <div className="flex justify-between gap-16 ">
                    <div className="w-1/2">
                        <h3 className="text-[24px] font-medium mb-3">Бизнес процессы и БПМ движок</h3>
                        <p className="pb-1">Онбординг клиента </p>
                        <p className="pb-1">Кредитный конвейер</p>
                        <p className="pb-1">Карточный конвейер</p>
                        <p className="pb-1">Вкладные операции</p>
                        <p className="pb-1">Входящие и исходящие переводы </p>
                        <p className="mb-2">Операции по счетам</p>
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-[24px] font-medium mb-3">Витрина продуктов</h3>
                        <p className="pb-1">Кредиты</p>
                        <p className="pb-1">Депозиты</p>
                        <p className="pb-1">Карты</p>
                        <p className="pb-1">Банкоматы</p>
                        <p className="pb-1">Денежные переводы</p>
                        <p className="mb-2">Переводы с счетов</p>
                    </div>
                </div>
                <motion.div animate={{ width: "100%" }} initial={{ width: 0 }} transition={{ duration: 1, delay: 1.5}} className="border-b border-black w-full" />
                <div className="flex justify-between">
                    <div className="w-1/2">
                        <h3 className="text-[24px] font-medium mb-3">Управляющие и комитеты</h3>
                        <p className="pb-1">Пользователи ДБО</p>
                        <p className="pb-1">Пользователи сайта</p>
                        <p className="pb-1">Операционисты и аналитики</p>
                        <p>Коллцентр</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Solutions;