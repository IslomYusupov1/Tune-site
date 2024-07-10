import asiaLight from "../../assets/asia-light.svg";
import uzumLight from "../../assets/uzum-light.svg";
import tengeLight from "../../assets/tenge-light.svg";
import orientLight from "../../assets/orient-light.svg";
import milliyLight from "../../assets/milliy-light.svg";
import uzacrd from "../../assets/uzcard.svg";
import union from "../../assets/union.svg";
import humo from "../../assets/humo.svg";
import visa from "../../assets/visa.svg";
import sello from "../../assets/sello.svg";
import masterCard from "../../assets/mastercard.svg";
import bgCosmo from "../../assets/cosmo-mobile.svg";
import {useRef} from "react";
import {useScroll, motion} from "framer-motion";

function EquaringMobile() {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
        smooth: 1,
    })
    return (
        <motion.div ref={ref} style={{ opacity: scrollYProgress }}  className="bg-[url('../assets/bg-dark.png')] relative p-5 object-cover bg-no-repeat bg-center w-full">
            <img src={bgCosmo} alt="" className="absolute bottom-0 right-0" width={300}/>
            <motion.div style={{ scale: scrollYProgress }}>
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
                <div className="lg:mt-8 xl:mt-12 2xl:mt-16 mt-10 md:w-10/12 w-full">
                    <div className="border-b border-white"/>
                    <div className="flex gap-x-8 2xl:gap-y-3 xl:gap-y-3 mt-5 gap-y-5 flex-wrap">
                        <img src={sello} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={asiaLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={uzumLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={tengeLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={orientLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                        <img src={milliyLight} alt="" className="2xl:w-[140px] xl:w-[100px] lg:w-[80px]"/>
                    </div>
                </div>
                <div className="lg:mt-8 xl:mt-12 2xl:mt-16 mt-5 md:w-10/12 w-full">
                    <div className="border-b border-white"/>
                    <div className="flex gap-x-8 xl:gap-y-4 gap-y-2 mt-5 flex-wrap">
                        <img src={uzacrd} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px] "/>
                        <img src={union} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px] "/>
                        <img src={humo} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px]"/>
                        <img src={visa} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px] "/>
                        <img src={masterCard} alt="" className="2xl:w-[80px] xl:w-[60px] lg:w-[40px]"/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default EquaringMobile;