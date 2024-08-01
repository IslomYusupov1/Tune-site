import imageBack from "../../assets/turkey.png";
import {useRef, useState} from "react";
import {useScroll, motion} from "framer-motion";
// import bgCosmo from "../../assets/cosmo-mobile.svg";
import {useI18n} from "../../i18n/I18nContext";

function TurkneyMobile() {
    const { translate } = useI18n();

    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const {} = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
        smooth: 1,
    })
    return (
        <motion.div ref={ref}
            className="md:h-screen bg-[url('../assets/bg-light.jpg')] flex flex-col relative p-4 justify-center object-cover bg-no-repeat bg-center w-full">
            {/*<img src={bgCosmo} alt="" className="absolute bottom-0 right-0"/>*/}
            <div className="h-full md:w-3/4 2xl:w-10/12 md:mx-auto md:bg-black md:rounded-2xl md:h-[70vh] 2xl:h-[90%] md:custom-container md:justify-center md:mx-auto md:flex">
                <div
                    className="w-full flex flex-col justify-between h-full z-50 bg-black rounded-2xl md:my-0 my-10 relative md:px-0 px-2">
                    <div
                        className=" opacity-30 hidden md:flex justify-end text-end items-end w-full border border-transparent mt-5 rounded-2xl">
                        <img src={imageBack} alt="" className="xl:w-9/12 mx-4 2xl:w-10/12 aspect-auto object-contain"/>
                    </div>
                    <div
                        className="flex flex-col bg-opacity-20 px-3 pt-5 text-white md:absolute text-start bottom-[50px] left-[50px]">
                        {!open &&
                            <h3 className="xl:text-[32px] 2xl:text-[54px] 3xl:text-[48px] leading-6 lg:mb-4 text-[23px]">{translate("TITLE_TURNKEY_PAGE_TITLE1")}</h3>}
                        {!open &&
                            <div className="text-[15px]">
                                <p className="max-w-[775px] xl:text-[18px] 2xl:text-[28px] 3xl:text-[28px] leading-25">{translate("TITLE_TURNKEY_PAGE_TITLE2")}</p>
                                <ul className="max-w-[775px] xl:text-[18px] 2xl:text-[28px] 3xl:text-[26px] leading-25">
                                    <li className="">{translate("TITLE_TURNKEY_PAGE_TITLE3")}</li>
                                </ul>
                                <p className="max-w-[775px] xl:text-[18px] 2xl:text-[28px] 3xl:text-[28px] leading-25 ">{translate("TITLE_TURNKEY_PAGE_TITLE4")}</p>
                                <ul className="max-w-[775px] xl:text-[18px] 2xl:text-[28px] 3xl:text-[28px] leading-25 list-disc">{translate("TITLE_TURNKEY_PAGE_TITLE5")}:...<br/> <b
                                        className="xl:text-[18px] 2xl:text-[28px] 3xl:text-[28px] text-[#007AFF] cursor-pointer"
                                        onClick={() => setOpen(true)}>Читать
                                        дальше</b>
                                </ul>
                            </div>}
                        {open && <div>
                            <h3 className="xl:text-[32px] 2xl:text-[40px] 3xl:text-[48px]">{translate("TITLE_TURNKEY_PAGE_TITLE1")}</h3>
                            <p className="max-w-[775px] xl:text-[18px] 2xl:text-[28px] 3xl:text-[28px] leading-25">{translate("TITLE_TURNKEY_PAGE_TITLE2")}:</p>
                            <ul className="max-w-[775px] xl:text-[16px] 2xl:text-[28px] 3xl:text-[26px] leading-25 mb-5 list-disc">
                                <li className="mx-14">{translate("TITLE_TURNKEY_PAGE_TITLE3")}
                                </li>
                            </ul>
                            <p className="max-w-[775px] xl:text-[18px] 2xl:text-[28px] 3xl:text-[28px] leading-25 mb-5">{translate("TITLE_TURNKEY_PAGE_TITLE4")}</p>
                            <ul className="max-w-[775px] xl:text-[18px] 2xl:text-[28px] 3xl:text-[28px] leading-25 mb-5 list-disc">{translate("TITLE_TURNKEY_PAGE_TITLE5")}
                                <li className="mx-14">{translate("TITLE_TURNKEY_PAGE_TITLE5_1")}</li>
                                <li className="mx-14">{translate("TITLE_TURNKEY_PAGE_TITLE5_2")}</li>
                                <li className="mx-14">{translate("TITLE_TURNKEY_PAGE_TITLE5_3")}</li>
                            </ul>
                            <p className="max-w-[775px] xl:text-[18px] 2xl:text-[28px] 3xl:text-[28px] leading-25 mb-5">{translate("TITLE_TURNKEY_PAGE_TITLE6")}</p>
                            <p className="max-w-[775px] xl:text-[18px] 2xl:text-[28px] 3xl:text-[28px] leading-25">{translate("TITLE_TURNKEY_PAGE_TITLE7")}<br/> <b
                                    className="xl:text-[18px] 2xl:text-[28px] 3xl:text-[28px] text-[#007AFF] cursor-pointer"
                                    onClick={() => setOpen(false)}>Свернуть</b></p>

                        </div>}
                    </div>
                    <div
                        className="opacity-30 md:hidden flex justify-end h-full text-end items-end w-full border border-transparent mt-5 rounded-lg">
                        <img src={imageBack} alt=""
                             className="xl:w-9/12 xl:h-9/12 2xl:w-8/12 pb-2 w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default TurkneyMobile;