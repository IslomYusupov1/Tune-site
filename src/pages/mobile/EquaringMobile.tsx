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
import bgCosmo from "../../assets/cosmo-web.svg";
import {useEffect, useRef} from "react";
import {motion, useInView} from "framer-motion";
import {useI18n} from "../../i18n/I18nContext";
import {useDispatch} from "react-redux";
import {switchBgImage} from "../../reducers/AppReducer";

function EquaringMobile() {
    const { translate } = useI18n();

    const ref = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const refMain = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true })
    const inView2 = useInView(ref2, { once: true })
    const inViewMain = useInView(refMain)

    const dispatch = useDispatch();

    useEffect(() => {
        if (inViewMain) {
            dispatch(switchBgImage({ bgImage: 1 }))
        }
    }, [inViewMain])

    return (
        <motion.div id="equaring"  className="lg:h-full lg:min-h-[800px] lg:py-[100px] py-[30px] bg-[#111111] relative p-5 lg:flex lg:items-center w-full">
            <img src={bgCosmo} alt="" className="hidden lg:block absolute bottom-0 z-0 right-0"/>
            <motion.div className="custom-container mx-auto z-50 md:justify-center flex flex-col h-full w-full">
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
                <div ref={ref}  className="lg:mt-8 xl:mt-12 2xl:mt-16 min-h-[63px] lg:min-h-[67px] xl:min-h-[72px] 2xl:min-h-[98px] mt-10 w-full">
                    {inView && <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 0.2}}
                                           className="border-b border-white"/>}
                    {inView && <div className="flex gap-x-8 2xl:gap-y-10 xl:gap-y-3 mt-5 gap-y-5 flex-wrap">
                        <motion.img animate={{x: 0, opacity: 1}} initial={{x: -10, opacity: 0}}
                                    transition={{duration: .5, delay: 0.1, ease: "easeInOut"}}
                                    src={sello} alt=""
                                    className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <motion.img animate={{x: 0, opacity: 1}} initial={{x: -10, opacity: 0}}
                                    transition={{duration: .5, delay: 0.2, ease: "easeInOut"}}
                                    src={asiaLight} alt=""
                                    className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <motion.img animate={{x: 0, opacity: 1}} initial={{x: -10, opacity: 0}}
                                    transition={{duration: .5, delay: 0.3, ease: "easeInOut"}}
                                    src={uzumLight} alt=""
                                    className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <motion.img animate={{x: 0, opacity: 1}} initial={{x: -10, opacity: 0}}
                                    transition={{duration: .5, delay: 0.4, ease: "easeInOut"}}
                                    src={tengeLight} alt=""
                                    className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <motion.img animate={{x: 0, opacity: 1}} initial={{x: -10, opacity: 0}}
                                    transition={{duration: .5, delay: 0.5, ease: "easeInOut"}}
                                    src={orientLight} alt=""
                                    className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                        <motion.img animate={{x: 0, opacity: 1}} initial={{x: -10, opacity: 0}}
                                    transition={{duration: .5, delay: 0.6, ease: "easeInOut"}}
                                    src={milliyLight} alt=""
                                    className="2xl:w-[200px] xl:w-[130px] lg:w-[120px] w-[80px] aspect-auto"/>
                    </div>}
                </div>
                <div ref={ref2}  className="lg:mt-8 xl:mt-12 2xl:mt-16 min-h-[43px] lg:min-h-[81px] xl:min-h-[100px] 2xl:min-h-[140px] mt-5 w-full">
                    {inView2 && <motion.div animate={{width: "100%"}} initial={{width: 0}} transition={{duration: 1, delay: 0.2}}
                                 className="border-b border-white"/>}
                    {inView2 && <div className="flex gap-x-8 xl:gap-y-4 gap-y-2 mt-5 flex-wrap">
                        <motion.img animate={{x: 0, opacity: 1}} initial={{x: -10, opacity: 0}}
                                    transition={{duration: .5, delay: 0.1, ease: "easeInOut"}}
                                    src={uzacrd} alt=""
                                    className="2xl:w-[100px] xl:w-[80px] lg:w-[60px] w-[40px] aspect-auto"/>
                        <motion.img animate={{x: 0, opacity: 1}} initial={{x: -10, opacity: 0}}
                                    transition={{duration: .5, delay: 0.2, ease: "easeInOut"}}
                                    src={union} alt=""
                                    className="2xl:w-[100px] xl:w-[80px] lg:w-[60px] w-[40px] aspect-auto"/>
                        <motion.img animate={{x: 0, opacity: 1}} initial={{x: -10, opacity: 0}}
                                    transition={{duration: .5, delay: 0.3, ease: "easeInOut"}}
                                    src={humo} alt="" className="2xl:w-[100px] xl:w-[80px] lg:w-[60px]
                         w-[40px]  aspect-auto"/>
                        <motion.img animate={{x: 0, opacity: 1}} initial={{x: -10, opacity: 0}}
                                    transition={{duration: .5, delay: 0.4, ease: "easeInOut"}}
                                    src={visa} alt=""
                                    className="2xl:w-[120px] xl:w-[80px] lg:w-[60px] w-[40px]  aspect-auto"/>
                        <motion.img animate={{x: 0, opacity: 1}} initial={{x: -10, opacity: 0}}
                                    transition={{duration: .5, delay: 0.5, ease: "easeInOut"}}
                                    src={masterCard} alt=""
                                    className="2xl:w-[120px] xl:w-[80px] lg:w-[60px] w-[40px] aspect-auto"/>
                    </div>}
                </div>
            </motion.div>
            <div ref={refMain}/>
        </motion.div>
    );
}

export default EquaringMobile;