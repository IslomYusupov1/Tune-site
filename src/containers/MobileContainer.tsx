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
import mkbLight from "../assets/mkb-light.svg";
import davrLight from "../assets/davr-light.svg";
import kapitalLight from "../assets/kapital-light.svg";
import anorBankLight from "../assets/anor-light.svg";
import joydaLight from "../assets/joyda-light.svg";
import asiaLight from "../assets/asia-light.svg";
import agatLight from "../assets/agat-light.svg";
import uzumLight from "../assets/uzum-light.svg";
import tengeLight from "../assets/tenge-light.svg";
import orientLight from "../assets/orient-light.svg";
import milliyLight from "../assets/milliy-light.svg";
import bankPhoneImage from "../assets/phone.png";
import uzacrd from "../assets/uzcard.svg";
import union from "../assets/union.svg";
import humo from "../assets/humo.svg";
import visa from "../assets/visa.svg";
import masterCard from "../assets/mastercard.svg";
import imageBack from "../assets/turkey.png";
// import teamImage from "../assets/team.png";
import teamImage1 from "../assets/team.svg";
import {Field, Form, Formik} from "formik";
import linkedin from "../assets/linkedin-white.svg";


function MobileContainer() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col overflow-hidden relative">
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
                               autoPlay={false}
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
                        <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">2.
                            Конвейеры
                            для розничного и корпоративного кредитования</p>
                        <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">3.
                            Омниканальность обеспечивается бизнес процессами как для онлайн
                            обращений
                            так и для офлайн клиентов</p>
                        <ul className="list-disc md:mx-10 mx-5 xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">
                            <li>5 проектов с конвейерами успешно синтегрированы с мобильными банками от TUNE</li>
                            <li>Для онлайн заявок используем фейс идентификацию через MYID</li>
                        </ul>
                        <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">4. Скор
                            карты продуктов полностью параметризируемые и управляются риск
                            департаментом без участия ИТ департамента или разработчиков</p>
                        <p className="xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">5. Связь
                            со
                            всеми внешними системами поддерживается через шину обмена
                            данных
                            TUNE BELT</p>
                        <ul className="list-disc md:mx-10 mx-5 xl:text-[18px] lg:text-[15px] 2xl:text-[22px] md:text-[20px] text-[15px]">
                            <li>Обычно участвуют 10 и более систем для сбора данных о заявителях</li>
                        </ul>
                    </div>
                    <div
                        className="2xl:mt-16 xl:mt-5 mt-5 lg:mt-8 w-full md:w-9/12">
                        <div
                            className="border-b border-black"/>
                        <div className="flex gap-x-8 gap-y-4 mt-3 flex-wrap">
                            <img src={mkb} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[80px] h-[25px]"/>
                            <img src={davr} alt=""
                                 className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[100px] h-[25px]"/>
                            <img src={kapital} alt=""
                                 className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[130px] h-[25px]"/>
                            <img src={anorBank} alt=""
                                 className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[90px] h-[25px]"/>
                            <img src={joyda} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[80px]"/>
                            <img src={asia} alt=""
                                 className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[120px] h-[25px]"/>
                            <img src={agat} alt=""
                                 className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[100px] h-[25px]"/>
                            <img src={uzum} alt=""
                                 className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[70px] h-[25px]"/>
                            <img src={tenge} alt=""
                                 className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[80px] h-[25px]"/>
                            <img src={orient} alt=""
                                 className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[150px] h-[25px]"/>
                            <img src={milliy} alt=""
                                 className="2xl:w-[140px] xl:w-[100px] lg:w-[80px] w-[130px] h-[25px]"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('../assets/bg-dark.png')] p-5 object-cover bg-no-repeat bg-center w-full">
                <div className="flex flex-col justify-between h-full">
                    <h3 className="xl:text-[36px] 2xl:text-[44px] text-[22px] mb-3 mt-3 leading-7 md:leading-normal text-white lg:text-[22px] 2xl:mb-16 2xl:mt-10 xl:mb-6 xl:mt-6 lg:mt-10 lg:mb-4">Цифровые
                        банковские платформы
                    </h3>
                    <div className="flex text-white xl:gap-4 2xl:gap-8 lg:gap-4">
                        <div className="xl:w-[64%] 2xl:w-[50%] lg:w-[58%] w-full">
                            <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px] text-[15px]">1. 12 проектов ДБО
                                физлица</p>
                            <ul className="list-disc mx-10 lg:text-[16px] xl:text-[20px] 2xl:text-[21px] text-[15px]">
                                <li>2 проекта на стадии внедрения</li>
                            </ul>
                            <img src="" alt=""/>
                            <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px] text-[15px]">2. 3 проекта ДБО
                                юрлица</p>
                            <ul className="list-disc mx-10 lg:text-[16px] xl:text-[20px] 2xl:text-[21px] text-[15px]">
                                <li>1 проект на стадии внедрения</li>
                                <li>12 live and 2 in process retail mobile banking platforms</li>
                            </ul>
                            <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px] text-[15px]">3. Более 7 млн
                                пользователей</p>
                            <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px] text-[15px]">4. Настоящие
                                униканальные платформы с интерфейсами
                                iOs, Android и Web</p>
                            <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px] text-[15px]">5. Микросервисная
                                архитектура с минимальной
                                зависимостью от АБС</p>
                            <p className="lg:text-[15px] xl:text-[18px] 2xl:text-[21px] text-[15px]">6. Успешные
                                интеграции с 6 АБС:</p>
                            <ul className="list-disc mx-10 lg:text-[15px] xl:text-[18px] 2xl:text-[21px] text-[15px]">
                                <li>Temenos</li>
                                <li>iABS</li>
                                <li>NCI</li>
                                <li>ASBT</li>
                                <li>Korean system</li>
                                <li>CS</li>
                            </ul>
                            <p className="lg:text-[15px xl:text-[18px] 2xl:text-[21px] text-[15px]">7. Используем
                                Kubernetes и Doker оркестраторы</p>
                        </div>
                    </div>
                    <div
                        className="2xl:mt-3 lg:mt-2 mt-4 md:absolute xl:right-[5px] 2xl:right-[100px] lg:right-[60px] 2xl:bottom-[-35px] lg:bottom-[-44px] xl:bottom-[-50px]">
                        <img className="lg:w-[250px] xl:w-[280px] 2xl:w-[370px] w-full" src={bankPhoneImage} alt=""/>
                    </div>
                </div>
            </div>
            <div
                className="bg-[url('../assets/bg-light.jpg')] flex flex-col p-5 justify-center object-cover bg-no-repeat bg-center w-full">
                <div className="h-full">
                    <div className="flex flex-col text-start">
                        <h3 className="2xl:text-[34px] xl:text-[25px] lg:text-[22px] text-[22px] lg:leading-10 leading-7 font-medium  mb-2">CRM
                            и полная автоматизация процессов
                            фронт офиса</h3>
                        <ul className="list-disc mx-8 2xl:text-[20px] xl:text-[18px] lg:text-[16px]">
                            <li>7 БПМ проектов для автоматизации процессов CRM ифронт офиса</li>
                            <li>Включаетавтоматизацию как розничных продуктов так и корпоративных</li>
                            <li>Обработкаонлайн и офлайн заявок в режиме реального времени</li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-start">
                        <h3 className="2xl:text-[28px] lg:text-[20px] xl:text-[22px] text-[20px] xl:mt-2 2xl:mt-5 lg:mt-2 mt-2">Улучшение
                            процессов в одном проекте ДО и
                            ПОСЛЕ</h3>
                        <div className="flex flex-col 2xl:text-[20px] xl:text-[18px] lg:text-[14px]">
                            <div
                                className="flex justify-between text-center items-center lg:w-3/4 w-full 2xl:py-3 xl:py-1 lg:py-1 ">
                                <p className="opacity-0">Выдача карт</p>
                                <div className="flex gap-8">
                                    <span>До</span>
                                    <span>После</span>
                                </div>
                            </div>
                            <div className="border-b border-black"/>
                            <div
                                className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                                <p className="w-1/2 leading-5">Выдача карт</p>
                                <div className="flex gap-8">
                                    <span>20 min</span>
                                    <span>3 min</span>
                                </div>
                            </div>
                            <div className="border-b border-black"/>
                            <div
                                className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                                <p className="w-1/2 leading-5">Выдача кредитных карт</p>
                                <div className="flex gap-8">
                                    <span>60 min</span>
                                    <span>5 min</span>
                                </div>
                            </div>
                            <div className="border-b border-black"/>
                            <div
                                className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                                <p className="w-1/2 leading-5">Авто кредиты для юр лиц</p>
                                <div className="flex gap-8">
                                    <span>90 min</span>
                                    <span>20 min</span>
                                </div>
                            </div>
                            <div className="border-b border-black"/>
                            <div
                                className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                                <p className="w-1/2 leading-5">Авто кредиты для физ лиц</p>
                                <div className="flex gap-8">
                                    <span>90 min</span>
                                    <span>10 min</span>
                                </div>
                            </div>
                            <div className="border-b border-black"/>
                            <div
                                className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                                <p className="w-1/2 leading-5">Офлайн депозиты</p>
                                <div className="flex gap-8">
                                    <span>20 min</span>
                                    <span>5 min</span>
                                </div>
                            </div>
                            <div className="border-b border-black"/>
                            <div
                                className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1 ">
                                <p className="w-1/2 leading-5">Мониторинг выданных кредитов</p>
                                <div className="flex gap-8">
                                    <span>120 min</span>
                                    <span>5 min</span>
                                </div>
                            </div>
                            <div className="border-b border-black"/>
                            <div
                                className="flex justify-between lg:w-3/4 h-[50px] items-center w-full 2xl:py-2 xl:py-1 lg:py-1">
                                <p className="w-1/2 leading-5">Сбор данных для корп кредитов</p>
                                <div className="flex gap-8">
                                    <span>60 min</span>
                                    <span>2 min</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="2xl:mt-10 xl:mt-8 lg:mt-7 mt-5 lg:w-10/12 w-full">
                        <div className="border-b border-black"/>
                        <div className="flex gap-x-8 gap-y-4 2xl:mt-2 xl:mt-3 mt-3 flex-wrap">
                            <img src={mkb} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                            <img src={davr} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                            <img src={kapital} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                            <img src={anorBank} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                            <img src={joyda} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                            <img src={asia} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                            <img src={agat} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                            <img src={uzum} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                            <img src={tenge} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                            <img src={orient} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                            <img src={milliy} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('../assets/bg-dark.png')] p-5 object-cover bg-no-repeat bg-center w-full">
                <div className="flex text-white flex-col text-start">
                    <h3 className="2xl:text-[40px] lg:text-[24px] xl:text-[28px] leading-10 text-[22px] font-normal mb-3">Платформа
                        онлайн
                        эквайринга</h3>
                    <ul className="list-disc mx-8 2xl:text-[22px] xl:text-[18px] lg:text-[16px] text-[15px] font-light">
                        <li>6 проектов работающих напрямую с процессинговыми центрами</li>
                        <li>1 проект на стадии разработки</li>
                        <li>Доступны для онлайн и оффлайн эквайринга через QR коды</li>
                        <li>2 проекта раздают эквайринг API для третьих сторон платежным организациям и агентам</li>
                        <li>Мерчанты и партнеры банка работают через собственные кабинеты</li>
                    </ul>
                </div>
                <div className="lg:mt-8 xl:mt-12 2xl:mt-16 mt-5 md:w-10/12 w-full">
                    <div className="border-b border-white"/>
                    <div className="flex gap-x-8 2xl:gap-y-3 xl:gap-y-3 mt-2 gap-y-5 flex-wrap">
                        <img src={mkbLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={davrLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={kapitalLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={anorBankLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={joydaLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={asiaLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={agatLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={uzumLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={tengeLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={orientLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={milliyLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                    </div>
                </div>
                <div className="lg:mt-8 xl:mt-12 2xl:mt-16 mt-5 md:w-10/12 w-full">
                    <div className="border-b border-white"/>
                    <div className="flex gap-x-8 xl:gap-y-4 gap-y-2 mt-2 flex-wrap">
                        <img src={uzacrd} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px] w-[40px]"/>
                        <img src={union} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px] w-[40px]"/>
                        <img src={humo} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px] w-[40px]"/>
                        <img src={visa} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px] w-[40px]"/>
                        <img src={masterCard} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px] w-[40px]"/>
                    </div>
                </div>
            </div>
            <div
                className="bg-[url('../assets/bg-light.jpg')] flex flex-col p-4 justify-center object-cover bg-no-repeat bg-center w-full">
                <div className="h-full">
                    <div
                        className="md:w-9/12 w-full flex flex-col justify-between h-full h-[700px] z-50 xl:mx-[80px] 2xl:mx-[120px] 3xl:mx-[120px] 2xl:h-[550px] 3xl:h-[800px] xl:h-[490px] bg-black rounded-2xl mt-10 relative px-2">
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
                </div>
            </div>
            <div className="bg-[url('../assets/bg-dark.png')] p-5 object-cover bg-no-repeat bg-center w-full">
                <div
                    className="h-full w-full flex flex-col gap-4 xl:mt-10 lg:mt-10 2xl:mt-0 3xl:mt-0 text-white lg:w-8/12 2xl:w-9/12 w-full text-start font-light lg:mx-[100px]">
                    <h3 className="2xl:text-[40px] lg:text-[22px] xl:text-[26px] text-[24px] leading-tight xl:mb-4 2xl:mb-10 lg:mb-4">Наше
                        решение для обеспечения
                        омниканальности
                        банковских услуг</h3>
                    <h3 className="2xl:text-[32px] lg:text-[18px] xl:text-[22px] text-[20px] mb-1">Униканальная
                        платформа на базе ELMA BPMS</h3>
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">CRM</h3>
                        <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">Контакты и
                            обращения</p>
                        <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">Лиды</p>
                        <p className="mb-2 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">Клиенты</p>
                    </div>
                    <div className="border-b border-white w-full"/>
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">Настройки
                            и безопасность</h3>
                        <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">Роли и права
                            пользователей</p>
                        <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">Задачи и
                            уведомления
                            пользователям</p>
                        <p className="mb-2 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">Группы
                            пользователей и
                            комитеты</p>
                    </div>
                    <div className="border-b border-white w-full"/>
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">Бизнес
                            процессы и БПМ движок</h3>
                        <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Онбординг
                            клиента </p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Кредитный
                            конвейер</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Карточный
                            конвейер</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Вкладные
                            операции</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Входящие и
                            исходящие
                            переводы </p>
                        <p className="mb-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Операции по
                            счетам</p>
                    </div>
                    <div className="border-b border-white w-full"/>
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">Витрина
                            продуктов</h3>
                        <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Кредиты</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Депозиты</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Карты</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Банкоматы</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Денежные
                            переводы</p>
                        <p className="mb-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Переводы с
                            счетов</p>
                    </div>
                    <div className="border-b border-white w-full"/>
                    <div className="flex justify-between">
                        <div className="w-full flex flex-col gap-2">
                            <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">Управляющие
                                и комитеты</h3>
                            <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px] text-[15px]">Пользователи
                                ДБО</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px] text-[15px]">Пользователи
                                сайта</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px] text-[15px]">Операционисты
                                и
                                аналитики</p>
                            <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px] text-[15px]">Коллцентр</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="h-screen bg-[url('../assets/bg-light.jpg')] flex flex-col p-4 justify-center object-cover bg-no-repeat bg-center w-full">
                <div className="justify-center flex">
                    <div className="flex bg-black rounded-[30px] w-full flex-col text-start bank-page mt-16 relative">
                        <div className="flex p-5 text-white flex-col">
                            <h3 className="text-[40px]">Наша команда</h3>
                            <p className="max-w-[775px] text-[20px] leading-24 mb-3">Созданы в 2009 году в Ташкенте в
                                качестве «бутика» для комплексных банковских проектов. Начиная с 2017 фокусируемся
                                больше на цифровых решениях.
                            </p>
                            {/*{open && <div className=>*/}
                            {/*    <h3 className="text-[40px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[48px]">Наша*/}
                            {/*        команда</h3>*/}
                            {/*    <p className="max-w-[775px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] leading-25">Наши*/}
                            {/*        разработчики обладают глубокими знаниями и многолетним опытом в создании надежных и*/}
                            {/*        высококачественных решений.Проектные менеджеры - настоящие мастера своего дела. Они*/}
                            {/*        тщательно планируют и координируют каждый этап проекта, обеспечивая его успешное*/}
                            {/*        завершение в срок и в рамках бюджета. А команда дизайнеров создает уникальные и*/}
                            {/*        привлекательные интерфейсы, которые не только радуют глаз, но и обеспечивают*/}
                            {/*        отличное пользовательское взаимодействие. Ну а аналитики и тестировщики тщательно*/}
                            {/*        проверяют каждую деталь, чтобы гарантировать безупречную работу вашего проекта.*/}
                            {/*        Мы уделяем особое внимание для профессионального роста наших сотрудников - в*/}
                            {/*        качестве которого мы еженедельно организовываем онлайн-тренинги с участием наших*/}
                            {/*        Senior-коллег. Исходя из чего можно сказать, что - мы не только команда, а маленькая*/}
                            {/*        семья… <br/>*/}
                            {/*        <g*/}
                            {/*            className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[28px] text-[#007AFF] cursor-pointer"*/}
                            {/*            onClick={() => setOpen(false)}>Свернуть*/}
                            {/*        </g>*/}
                            {/*    </p>*/}

                            {/*</div>}*/}
                            <img src={teamImage1} alt="" className="w-full mt-3 mb-2 object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('../assets/bg-dark.png')] p-5 object-cover bg-no-repeat bg-center w-full">
                <div className="flex 2xl:gap-6 xl:gap-3 lg:gap-3 flex-col text-white xl:w-8/12 2xl:w-9/12 lg:w-8/12 w-full text-start font-light lg:mx-[100px] xl:mt-[50px] 2xl:mt-[25px] lg:mt-[50px] ">
                    <h3 className="2xl:text-[36px] xl:text-[28px] lg:text-[24px] text-[24px] mt-5">Мы всегда рады Вам.</h3>
                    <h2 className="2xl:text-[30px] xl:text-[22px] lg:text-[18px] text-[23px] mt-5 font-medium">OOO “TUNE Consulting” </h2>
                    <div className="flex flex-col mt-3">
                        <p className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[19px]">Телефон:</p>
                        <h3 className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] text-[15px] font-medium">+998 91 134-53-26</h3>
                    </div>
                    <div className="flex flex-col mt-3">
                        <p className="2xl:text-[20px] xl:text-[18px] lg:text-[14px] text-[19px]">Электронная почта:</p>
                        <h3 className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] text-[15px] font-medium">Info@TuneConsulting.net</h3>
                    </div>
                    <div className="flex flex-col mt-3">
                        <p className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[19px]">Адрес:</p>
                        <h3 className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] text-[15px] font-normal">г. Ташкент, Шайхантахурский район,
                            улица
                            Зульфияхоним, 12</h3>
                    </div>
                    <Formik initialValues={{name: "", phone: "", email: ""}}
                            onSubmit={(e, formikHelpers) => console.log(e, formikHelpers)}>
                        {({handleSubmit, errors, touched}) => (
                            <Form onSubmit={handleSubmit} className="z-50 mt-24">
                                <div className="flex flex-col gap-4 w-full">
                                    <div>
                                        <Field type="text"
                                               name="name"
                                               className={`${errors.name && touched.name ? "border-red-600 focus:border-red-600" : ""} bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4`}
                                               placeholder="Фамилия,имя и отчество"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="w-full">
                                            <Field type="text"
                                                   name="email"
                                                   placeholder="Электронная почта"
                                                   className={`${errors.email && touched.email ? "border-red-600 focus:border-red-600" : ""} bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4 `}/>
                                        </div>
                                        <div className="w-full">
                                            <Field type="text"
                                                   name="phone"
                                                   placeholder="Номер телефона"
                                                   className={`${errors.phone && touched.phone ? "border-red-600 focus:border-red-600" : ""} bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4 `}/>
                                        </div>
                                    </div>
                                    <button type="submit" disabled={true}
                                            className="text-center bg-[#003ABC] w-full text-white rounded-lg p-3">Отправить
                                        сообщение
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className="flex gap-8 2xl:mt-18 xl:mt-10 lg:mt-10 mt-10">
                        <img src={linkedin} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileContainer;