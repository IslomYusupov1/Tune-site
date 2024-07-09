import logo from "../assets/logo.svg";
import person from "../assets/person.svg";
import down from "../assets/down.svg";
import videoFile from "../assets/video.mp4";
import {useState} from "react";
import mkb from "../assets/mkb.svg";
import davr from "../assets/davr.svg";
import kapital from "../assets/kapital.svg";
import anorBank from "../assets/anor.svg";
import joyda from "../assets/joyda.svg";
import asia from "../assets/asia.svg";
import agat from "../assets/agat.svg";
import uzum from "../assets/uzum.svg";
import tenge from "../assets/tenge.svg";
import orient from "../assets/orient.svg";
import milliy from "../assets/milliy.svg";


function MobileContainer() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col overflow-scroll relative">
            <div className="pt-[25px] fixed top-0 z-50">
                <img src={logo} alt=""
                     className="w-[160px] md:w-[180px] mx-6 md:mx-2"/>
            </div>
            <div
                className="h-screen relative bg-[url('../assets/bg-main.jpg')] flex flex-col justify-center object-cover bg-no-repeat bg-center w-full">
                <img
                    className="2xl:w-[800px] xl:w-[600px] lg:w-[500px] md:w-[400px]"
                    src={person} alt=""/>
                <div
                    className="absolute md:absolute md:bottom-0 bottom-[30px] w-full md:mx-[100px] flex flex-col items-center">
                    <h3
                        className="text-start text-[22px] md:text-[30px] px-[30px] text-white w-full xl:text-[40px] 2xl:text-[48px] lg:text-[36px] ">Прогресс
                        не случайность
                    </h3>
                    <img className="text-center md:hidden item-center mt-10" src={down} width={32} alt=""/>
                </div>
            </div>
            <div
                className="h-screen bg-[url('../assets/bg-dark.png')] flex flex-col justify-center object-cover bg-no-repeat bg-center w-full">
                <div
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
                               autoPlay={true}
                               preload="auto"
                               controls={true}
                        >
                            <source src={videoFile} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <div
                className="bg-[url('../assets/bg-light.jpg')] flex flex-col p-5 justify-center object-cover bg-no-repeat bg-center w-full">
                <div className="h-full overflow-hidden">
                    <div
                        className="flex text-red-black leading-5 md:leading-normal flex-col text-start w-full 2xl:w-8/12 md:w-9/12">
                        <h3 className="xl:text-[30px] lg:text-[26px] 2xl:text-[48px] text-[20px] mb-5 md:[24px] md:mb-0 md:mt-0 font-light">Кредитный
                            конвейер и скоринг движок</h3>
                        <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">1. 8
                            проектов с использованием BPM системы для автоматизации конвейеров и
                            скоринговых движков</p>
                        <ul className="list-disc md:mx-10 mx-5 xl:text-[18px] lg:text-[14px] 2xl:text-[22px] md:text-[20px] text-[15px]">
                            <li>Быстрые и онлайн процессы в течение 1-2 минут</li>
                            <li>Длинные процессы для сложных кредитных продуктов</li>
                        </ul>
                        <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">2. Конвейеры
                            для розничного и корпоративного кредитования</p>
                        <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">3.
                            Омниканальность обеспечивается бизнес процессами как для онлайн
                            обращений
                            так и для офлайн клиентов</p>
                        <ul className="list-disc mx-10 xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">
                            <li>5 проектов с конвейерами успешно синтегрированы с мобильными банками от TUNE</li>
                            <li>Для онлайн заявок используем фейс идентификацию через MYID</li>
                        </ul>
                        <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">4. Скор
                            карты продуктов полностью параметризируемые и управляются риск
                            департаментом без участия ИТ департамента или разработчиков</p>
                        <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">5. Связь со
                            всеми внешними системами поддерживается через шину обмена
                            данных
                            TUNE BELT</p>
                        <ul className="list-disc mx-10 xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">
                            <li>Обычно участвуют 10 и более систем для сбора данных о заявителях</li>
                        </ul>
                    </div>
                    <div
                        className="2xl:mt-16 xl:mt-5 lg:mt-8 w-full md:w-9/12">
                        <div
                            className="border-b border-black"/>
                        <div className="flex gap-x-8 gap-y-4 mt-3 flex-wrap">
                            <img src={mkb} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[80px] h-[25px]"/>
                            <img src={davr} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[90px] h-[25px]"/>
                            <img src={kapital} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[120px] h-[25px]"/>
                            <img src={anorBank} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[90px] h-[25px]"/>
                            <img src={joyda} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[80px] h-[25px]"/>
                            <img src={asia} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[120px] h-[25px]"/>
                            <img src={agat} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[100px] h-[25px]"/>
                            <img src={uzum} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[70px] h-[25px]"/>
                            <img src={tenge} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[80px] h-[25px]"/>
                            <img src={orient} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[150px] h-[25px]"/>
                            <img src={milliy} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[130px] h-[25px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileContainer;