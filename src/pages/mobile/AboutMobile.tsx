import videoFile from "../../assets/video.mp4";
import {useRef, useState} from "react";
import {motion} from "framer-motion";
// import bgCosmo from "../../assets/cosmo-mobile.svg";
import {useI18n} from "../../i18n/I18nContext";

function AboutMobile() {
    const { translate } = useI18n();

    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    // const {scrollYProgress} = useScroll({
    //     target: ref,
    //     offset: ["0 1", "0.2 1"],
    //     smooth: 0,
    // })

    // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    // const scale = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [1, 0.8, 0.5, 0.1])
    return (
        <motion.div ref={ref} id="about"
            className="lg:h-screen bg-[url('../assets/bg-dark.png')] flex flex-col py-10 lg:py-0 relative justify-center object-cover bg-no-repeat bg-center w-full">
            {/*<img src={bgCosmo} alt="" className="absolute bottom-0 right-0"/>*/}
            <div
                className="lg:w-3/4 lg:mx-auto bg-black rounded-[20px] lg:h-[70vh] md:h-[500px] custom-container
                               mt-10 relative px-2 flex flex-col h-full">
                <div
                    className={`flex flex-col mx-3 text-white text-start z-50 md:z-0 md:absolute md:bottom-[20px] md:left-[20px]`}>
                    {!open && <h3 className="text-[24px] 2xl:text-[42px] md:text-[40px]">{translate("TITLE_ABOUT_PAGE_ABOUT_TITLE")}</h3>}
                    {!open &&
                        <p className="max-w-[775px] md:text-[20px] 2xl:text-[24px] text-[16px] leading-24 2xl:leading-[40px]">{translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE")}.. <br/>
                            <g
                                className="text-[16px] 2xl:text-[20px] z-50 text-[#007AFF] cursor-pointer"
                                onClick={() => setOpen(true)}>{translate("TITLE_OPEN_DIALOG_OPEN_TITLE")}
                            </g>
                        </p>}
                    {open && <div>
                        <h3 className="text-[24px] xl:text-[32px] 2xl:text-[42px]">{translate("TITLE_ABOUT_PAGE_ABOUT_TITLE")}</h3>
                        <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[24px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">{translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE")}</p>
                        <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[24px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">{translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE1")}</p>
                        <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[24px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">{translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE2")}</p>
                        <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[24px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">{translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE3")}</p>
                        <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[24px] leading-25 md:mb-2 2xl:mb-3 xl:mb-4">
                            {translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE5")}<br/>
                            {translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE6")}<br/>
                            {translate("TITTLE_ABOUT_PAGE_ABOUT_SUBTITLE7")}</p>
                        <p className="max-w-[775px] text-[16px] md:text-[18px] 2xl:text-[24px] leading-25"><br/>
                            <g
                                className="text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#007AFF] cursor-pointer"
                                onClick={() => setOpen(false)}>{translate("TITLE_OPEN_DIALOG_CLOSE_TITLE")}
                            </g>
                        </p>

                    </div>}
                </div>
                <div className="h-full">
                    <div style={{ height: "90%" }}
                        className={`${open ? "opacity-10" : "opacity-30"} flex justify-center lg:justify-end md:bg-transparent bg-white border-none text-center md:h-auto items-end w-full border border-transparent mt-5 rounded-2xl md:rounded-xl`}>
                        <video className="lg:w-8/12 aspect-auto lg:mx-5 z-10 py-3 h-full rounded-2xl" muted={true} loop={true}
                               autoPlay={false}
                               preload="auto"
                               controls={true}
                        >
                            <source src={videoFile} type="video/mp4" className="md:rounded-2xl"/>
                        </video>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

export default AboutMobile;