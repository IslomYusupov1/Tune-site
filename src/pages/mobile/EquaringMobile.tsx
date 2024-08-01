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
// import bgCosmo from "../../assets/cosmo-mobile.svg";
import {useRef} from "react";
import {useScroll, motion} from "framer-motion";
import {useI18n} from "../../i18n/I18nContext";

function EquaringMobile() {
    const { translate } = useI18n();

    const ref = useRef<HTMLDivElement>(null);
    const {} = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
        smooth: 1,
    })
    return (
        <motion.div ref={ref}  className="lg:h-screen bg-[url('../assets/bg-dark.png')] relative p-5 object-cover bg-no-repeat bg-center w-full">
            {/*<img src={bgCosmo} alt="" className="absolute bottom-0 right-0" width={300}/>*/}
            <motion.div className="custom-container mx-auto md:justify-center flex flex-col h-full w-full">
                <div className="flex text-white flex-col text-start">
                    <h3 className="2xl:text-[42px] lg:text-[26px] xl:text-[32px] leading-10 2xl:leading-[100px] text-[22px] font-normal mb-3">{translate("TITLE_EQUARING_PAGE_MAIN_TITLE")}</h3>
                    <ul className="list-disc mx-8 2xl:text-[28px] xl:text-[22px] lg:text-[18px] text-[15px] font-light">
                        <li>{translate("TITLE_EQUARING_PAGE_SUBTITLE_1")}</li>
                        <li>{translate("TITLE_EQUARING_PAGE_SUBTITLE_2")}</li>
                        <li>{translate("TITLE_EQUARING_PAGE_SUBTITLE_3")}</li>
                        <li>{translate("TITLE_EQUARING_PAGE_SUBTITLE_4")}</li>
                        <li>{translate("TITLE_EQUARING_PAGE_SUBTITLE_5")}</li>
                    </ul>
                </div>
                <div className="lg:mt-8 xl:mt-12 2xl:mt-16 mt-10 w-full">
                    <div className="border-b border-white"/>
                    <div className="flex gap-x-8 2xl:gap-y-10 xl:gap-y-3 mt-5 gap-y-5 flex-wrap">
                        <img src={sello} alt="" className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={asiaLight} alt="" className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={uzumLight} alt="" className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={tengeLight} alt="" className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={orientLight} alt="" className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <img src={milliyLight} alt="" className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                    </div>
                </div>
                <div className="lg:mt-8 xl:mt-12 2xl:mt-16 mt-5 w-full">
                    <div className="border-b border-white"/>
                    <div className="flex gap-x-8 xl:gap-y-4 gap-y-2 mt-5 flex-wrap">
                        <img src={uzacrd} alt="" className="2xl:w-[100px] xl:w-[80px] lg:w-[60px] w-[40px] aspect-auto"/>
                        <img src={union} alt="" className="2xl:w-[100px] xl:w-[80px] lg:w-[60px] w-[40px] aspect-auto"/>
                        <img src={humo} alt="" className="2xl:w-[100px] xl:w-[80px] lg:w-[60px]
                         w-[40px]  aspect-auto"/>
                        <img src={visa} alt="" className="2xl:w-[120px] xl:w-[80px] lg:w-[60px] w-[40px]  aspect-auto"/>
                        <img src={masterCard} alt="" className="2xl:w-[120px] xl:w-[80px] lg:w-[60px] w-[40px] aspect-auto"/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default EquaringMobile;