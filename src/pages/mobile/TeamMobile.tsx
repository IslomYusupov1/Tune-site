import teamImage1 from "../../assets/team.svg";
import {useRef} from "react";
import {useScroll, motion} from "framer-motion";
import bgCosmo from "../../assets/cosmo-mobile.svg";

function TeamMobile() {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
        smooth: 1,
    })
    return (
        <motion.div ref={ref} style={{ opacity: scrollYProgress }}
            className="bg-[url('../assets/bg-light.png')] flex flex-col p-4 relative justify-center object-cover bg-no-repeat bg-center w-full">
            <img src={bgCosmo} alt="" className="absolute bottom-0 right-0"/>
            <motion.div style={{ scale: scrollYProgress }} className="justify-center flex">
                <div className="flex bg-black rounded-[30px] w-full flex-col text-start bank-page my-20 relative">
                    <div className="flex p-5 text-white flex-col">
                        <h3 className="text-[40px]">Наша команда</h3>
                        <p className="max-w-[775px] text-[17px] leading-24 mb-3">Созданы в 2009 году в Ташкенте в
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
                        <img src={teamImage1} alt="" className="w-full mt-3 mb-2 object-contain"/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default TeamMobile;