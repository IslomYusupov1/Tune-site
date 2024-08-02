import teamImage from "../../assets/team.svg";
import teamImage1 from "../../assets/team.jpg";
import teamImage2 from "../../assets/team-1.jpg";
import teamImage3 from "../../assets/team-2.jpg";
import teamImage4 from "../../assets/team-3.jpg";
import teamImage5 from "../../assets/team-4.jpg";
import {useRef} from "react";
import {useScroll, motion} from "framer-motion";
import {useI18n} from "../../i18n/I18nContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import bgCosmo from "../../assets/cosmo-web.svg";

function TeamMobile() {
    const { translate } = useI18n();

    const ref = useRef<HTMLDivElement>(null);
    const {} = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
        smooth: 1,
    })
    return (
        <motion.div ref={ref} id="team"
            className="bg-[url('../assets/bg-light.jpg')] lg:h-screen flex flex-col p-4 relative justify-center object-cover bg-no-repeat bg-center w-full">
            <img src={bgCosmo} alt="" className="hidden lg:block absolute bottom-0 right-0"/>
            <div className="justify-center lg:w-full lg:h-full custom-container md:mx-auto flex">
                <div className="flex bg-black rounded-[30px] w-full flex-col text-start bank-page my-20 relative">
                    <div className="flex p-5 h-full w-full text-white flex-col relative">
                       <div className="lg:absolute lg:bottom-10 block 2xl:left-20" style={{ zIndex: 1000 }}>
                           <h3 className="text-[40px] 2xl:text-[44px]">{translate("TITLE_TEAM_PAGE_TEAM_TITLE")}</h3>
                           <p className="max-w-[775px] text-[17px] 2xl:text-[28px] 2xl:leading-[40px] leading-24 mb-3">{translate("TITLE_TEAM_PAGE_MAIN_TITLE")}
                           </p>
                       </div>
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
                            <div className="w-full flex justify-end h-full relative z-50 opacity-80">
                                <div className="w-full lg:w-10/12">
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    // navigation={true}
                                    className={`mySwiper md:w-full md:items-end`}
                                    loop={true}
                                    navigation={true}
                                    // onSlideChange={() => console.log('slide change')}
                                    // onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide><motion.img whileHover={{ scale: 1.2, transition: { duration: 0.3, type: "tween", ease: "easeInOut" } }} className="w-9/12 object-cover" src={teamImage} alt=""/></SwiperSlide>
                                    <SwiperSlide><motion.img whileHover={{ scale: 1.2, transition: { duration: 0.3, type: "tween", ease: "easeInOut" } }} className="w-9/12 object-cover" src={teamImage1} alt=""/></SwiperSlide>
                                    <SwiperSlide><motion.img whileHover={{ scale: 1.2, transition: { duration: 0.3, type: "tween", ease: "easeInOut" } }} className="w-9/12 object-cover" src={teamImage2} alt=""/></SwiperSlide>
                                    <SwiperSlide><motion.img whileHover={{ scale: 1.2, transition: { duration: 0.3, type: "tween", ease: "easeInOut" } }} className="w-9/12 object-cover" src={teamImage3} alt=""/></SwiperSlide>
                                    <SwiperSlide><motion.img whileHover={{ scale: 1.2, transition: { duration: 0.3, type: "tween", ease: "easeInOut" } }} className="w-9/12 object-cover" src={teamImage4} alt=""/></SwiperSlide>
                                    <SwiperSlide><motion.img whileHover={{ scale: 1.2, transition: { duration: 0.3, type: "tween", ease: "easeInOut" } }} className="w-9/12 object-cover" src={teamImage5} alt=""/></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default TeamMobile;