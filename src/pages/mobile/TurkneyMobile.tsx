import imageBack from "../../assets/turkey.png";
import {useRef, useState} from "react";
import {useScroll, motion} from "framer-motion";
import bgCosmo from "../../assets/cosmo-mobile.svg";

function TurkneyMobile() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
        smooth: 1,
    })
    return (
        <motion.div ref={ref} style={{ opacity: scrollYProgress }}
            className="bg-[url('../assets/bg-light.png')] flex flex-col relative p-4 justify-center object-cover bg-no-repeat bg-center w-full">
            <img src={bgCosmo} alt="" className="absolute bottom-0 right-0"/>
            <motion.div style={{ scale: scrollYProgress }} className="h-full">
                <div
                    className="md:w-9/12 w-full flex flex-col justify-between h-full h-[700px] z-50 xl:mx-[80px] 2xl:mx-[120px] 3xl:mx-[120px] 2xl:h-[550px] 3xl:h-[800px] xl:h-[490px] bg-black rounded-2xl my-10 relative px-2">
                    <div
                        className="flex flex-col bg-opacity-20 px-3 pt-5 text-white text-start bottom-[50px] left-[50px]">
                        {!open &&
                            <h3 className="xl:text-[32px] 2xl:text-[40px] 3xl:text-[48px] leading-6 mb-4 lg:mb-0 text-[23px]">Пример
                                разработки под
                                ключ и заказ</h3>}
                        {!open &&
                            <div className="text-[15px]">
                                <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25">Первый
                                    маркетплейс в Узбекистане со
                                    своими пунктами выдачи заказов и службой доставки заказов:</p>
                                <ul className="max-w-[775px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[26px] leading-25">
                                    <li className="">Sello Market начало проекта в феврале 2021
                                        года и запуск в сентябре 2021 года
                                    </li>
                                </ul>
                                <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25 ">Лучший
                                    инновационный BPM проект в
                                    2022
                                    году</p>
                                <ul className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25 list-disc">Собственные
                                    разработки:...<br/> <b
                                        className="xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] text-[#007AFF] cursor-pointer"
                                        onClick={() => setOpen(true)}>Читать
                                        дальше</b>
                                </ul>
                            </div>}
                        {open && <div>
                            <h3 className="xl:text-[32px] 2xl:text-[40px] 3xl:text-[48px]">Пример разработки под
                                ключ и заказ</h3>
                            <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25">Первый
                                маркетплейс в Узбекистане со
                                своими пунктами выдачи заказов и службой доставки заказов:</p>
                            <ul className="max-w-[775px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[26px] leading-25 mb-5 list-disc">
                                <li className="mx-14">Sello Market начало проекта в феврале 2021
                                    года и запуск в сентябре 2021 года
                                </li>
                            </ul>
                            <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25 mb-5">Лучший
                                инновационный BPM проект в
                                2022
                                году</p>
                            <ul className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25 mb-5 list-disc">Собственные
                                разработки:
                                <li className="mx-14">Витрина товаров и кабинет пользователя </li>
                                <li className="mx-14">Кабинет продавца с заказами и запасами товаров</li>
                                <li className="mx-14">Система логистики для исполнения заказов</li>
                            </ul>
                            <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25 mb-5">ELMA
                                BPM используется в качестве
                                CRM и
                                оркестратором всей платформы с 200+ бизнес процессами</p>
                            <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25">SuperApp
                                начиная с сентября 2023 года
                                после
                                запуска Sello Pay (платежи и переводы) и Sello Logistics (доставка товаров от двери
                                до
                                двери) <br/> <b
                                    className="xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] text-[#007AFF] cursor-pointer"
                                    onClick={() => setOpen(false)}>Свернуть</b></p>

                        </div>}
                    </div>
                    <div
                        className="opacity-30 flex justify-end h-full text-end items-end w-full border border-transparent mt-5 rounded-lg">
                        <img src={imageBack} alt=""
                             className="xl:w-9/12 xl:h-9/12 2xl:w-8/12 pb-2 2xl:8/12 3xl:w-11/12 3xl:w-11/12 w-full h-full object-cover"/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default TurkneyMobile;