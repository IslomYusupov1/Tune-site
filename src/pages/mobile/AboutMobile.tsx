import videoFile from "../../assets/video.mp4";
import {useRef, useState} from "react";
import {useScroll, motion} from "framer-motion";

function AboutMobile() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1 1"],
        smooth: 1,
    })

    // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    // const scale = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [1, 0.8, 0.5, 0.1])
    return (
        <motion.div ref={ref} style={{ opacity: scrollYProgress }}
            className="h-screen bg-[url('../assets/bg-dark.png')] flex flex-col justify-center object-cover bg-no-repeat bg-center w-full">
            <motion.div style={{ scale: scrollYProgress }}
                className="md:w-9/12 mx-2 lg:mx-[20px] py-3 lg:h-[400px]
                             xl:mx-[80px] 2xl:mx-[120px] md:mx-[10px]  md:h-[300px]
                              2xl:h-[600px] xl:h-[480px] bg-black rounded-lg
                               mt-10 relative px-2 flex flex-col h-full">
                <div
                    className={`flex flex-col mx-3 text-white text-start z-50 ${open ? "absolute top-0" : "block"} md:absolute md:bottom-[50px] md:left-[50px]`}>
                    {!open && <h3 className="text-[24px] md:text-[40px]">О нас</h3>}
                    {!open &&
                        <p className="max-w-[775px] md:text-[20px] text-[16px] leading-24">Созданы в 2009 году в
                            Ташкенте в
                            качестве «бутика» для комплексных банковских проектов..... <br/>
                            <g
                                className="text-[16px] z-50 text-[#007AFF] cursor-pointer"
                                onClick={() => setOpen(true)}>Читать
                                дальше
                            </g>
                        </p>}
                    {open && <div>
                        <h3 className="text-[24px] xl:text-[32px] 2xl:text-[40px]">О нас</h3>
                        <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[21px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">Созданы
                            в 2009 году в Ташкенте в
                            качестве «бутика» для комплексных банковских проектов.</p>
                        <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[21px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">Начиная
                            с 2017 фокусируемся больше
                            на
                            цифровых решениях.</p>
                        <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[21px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">В
                            семье TUNE более 100
                            сотрудников.Цель
                            на
                            2024 год удвоить этот показатель.</p>
                        <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[21px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">Являемся
                            резидентами ИТ парка и
                            вносим
                            свой
                            вклад в программу «миллионпрограммистов к 2030 году». </p>
                        <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[21px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">Отдельныекоманды
                            по
                            направлениям. <br/>
                            Цифровые банковские решения и платформы. <br/>
                            Проекты по внедрению BPM инструментов. <br/>
                            Разработки под заказ и под ключ. </p>
                        <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[24px] leading-25">Custom
                            developments,
                            Технологическийпартнер
                            1го национального маркетплейса Sello. <br/>
                            <g
                                className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] text-[#007AFF] cursor-pointer"
                                onClick={() => setOpen(false)}>Свернуть
                            </g>
                        </p>

                    </div>}
                </div>
                <div
                    className={`${open ? "opacity-10" : "opacity-30"} flex justify-end h-full md:bg-transparent bg-white border-none text-end md:h-auto items-end w-full border border-transparent mt-5 rounded-2xl md:rounded-xl`}>
                    <video className="md:w-10/12 z-10 h-full rounded-lg" muted={true} loop={true}
                           autoPlay={false}
                           preload="auto"
                           controls={true}
                    >
                        <source src={videoFile} type="video/mp4"/>
                    </video>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default AboutMobile;