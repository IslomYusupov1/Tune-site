import bankPhoneImage from "../../assets/phone.png";
import {useRef} from "react";
import {useScroll, motion} from "framer-motion";

function BankMobile() {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.5 1"],
        smooth: 1,
    })
    return (
        <motion.div ref={ref} style={{ opacity:  scrollYProgress}} className="bg-[url('../assets/bg-dark.png')] p-5 object-cover bg-no-repeat bg-center w-full">
            <motion.div style={{ scale: scrollYProgress }} className="flex flex-col justify-between h-full">
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
                    <img className="lg:w-[250px] xl:w-[280px] 2xl:w-[370px] w-[280px]" src={bankPhoneImage} alt=""/>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default BankMobile;