import {motion} from "framer-motion";
import imageBack from "../assets/turkey.png";
import imageBg from "../assets/bg-dark.png";
import {useState} from "react";
import ContentLayout from "../layouts/ContentLayout";

const containerVariants = {
    hidden: {
        y: 1000,
        scale: 0.4,
        // opacity: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        // opacity: 1,
        transition: {type: "spring", ease: "easeIn", stiffness: 35}
    },
    exit: {
        scale: 0,
        transition: {ease: "easeInOut"}
    }
}

const videoVariants = {
    hidden: {
        y: 1000,
        // opacity: 0,
        scale: 0.4,
    },
    visible: {
        y: 0,
        scale: 1,
        // opacity: 1,
        transition: {ease: "easeIn", stiffness: 40}
    },
    // exit: {
    //     x: -900,
    //     transition: {ease: "easeInOut"}
    // }
}

const textVariants = {
    hidden: {
        y: 1000,
        // opacity: 0,
        scale: 0.4,
    },
    visible: {
        y: 0,
        scale: 1,
        // opacity: 1,
        transition: {ease: "easeIn", stiffness: 40}
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
        y: 50,
        opacity: 1,
        transition: {duration: 0.5, type: "spring", stiffness: 100}
    },
    exit: {
        y: 900,
        transition: {ease: "easeInOut"}
    }
}


function Turkney() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.img animate={{opacity: 1}} exit={{ opacity: 0, transition: {ease: "easeInOut"} }} initial={{opacity: 0}} transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBg} className="fixed w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout>
                <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit"
                            className="w-9/12 z-50 xl:mx-[80px] 2xl:mx-[120px] 3xl:mx-[120px] 2xl:h-[550px] 3xl:h-[800px] xl:h-[490px] bg-black rounded-lg mt-10 relative px-2">
                    <motion.div
                        variants={videoVariants}
                        initial="hidden"
                        animate="visible"
                        className=" opacity-30 flex justify-end text-end items-end w-full border border-transparent mt-5 rounded-lg">
                        <img src={imageBack} alt="" className="xl:w-9/12 xl:h-9/12 2xl:w-8/12 2xl:8/12 3xl:w-11/12 3xl:w-11/12 object-contain"/>
                    </motion.div>
                    <motion.div variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col bg-opacity-20 text-white text-start absolute bottom-[50px] left-[50px]">
                        {!open && <h3 className="xl:text-[32px] 2xl:text-[40px] 3xl:text-[48px]">Пример разработки под ключ и заказ</h3>}
                        {!open && <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] font-light leading-25">Созданы в 2009 году в Ташкенте в
                            качестве «бутика» для комплексных банковских проектов..... <br/> <b
                                className="xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] text-[#007AFF] cursor-pointer" onClick={() => setOpen(true)}>Читать
                                дальше</b></p>}
                        {open && <motion.div variants={textFullVariants}
                                             initial="hidden"
                                             animate="visible"
                                             exit={open ? "exit" : ""}>
                            <h3 className="xl:text-[32px] 2xl:text-[40px] 3xl:text-[48px]">Пример разработки под ключ и заказ</h3>
                            <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25">Первый маркетплейс в Узбекистане со
                                своими пунктами выдачи заказов и службой доставки заказов:</p>
                            <ul className="max-w-[775px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[26px] leading-25 mb-5 list-disc">
                                <li className="mx-14">Sello Market начало проекта в феврале 2021
                                    года и запуск в сентябре 2021 года
                                </li>
                            </ul>
                            <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25 mb-5">Лучший инновационный BPM проект в
                                2022
                                году</p>
                            <ul className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25 mb-5 list-disc">Собственные разработки:
                                <li className="mx-14">Витрина товаров и кабинет пользователя </li>
                                <li className="mx-14">Кабинет продавца с заказами и запасами товаров</li>
                                <li className="mx-14">Система логистики для исполнения заказов</li>
                            </ul>
                            <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25 mb-5">ELMA BPM используется в качестве
                                CRM и
                                оркестратором всей платформы с 200+ бизнес процессами</p>
                            <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25">SuperApp начиная с сентября 2023 года
                                после
                                запуска Sello Pay (платежи и переводы) и Sello Logistics (доставка товаров от двери до
                                двери) <br/> <b
                                    className="xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] text-[#007AFF] cursor-pointer"
                                    onClick={() => setOpen(false)}>Свернуть</b></p>

                        </motion.div>}
                    </motion.div>
                </motion.div>
            </ContentLayout>
        </>
    );
}

export default Turkney;