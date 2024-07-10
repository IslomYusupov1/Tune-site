import logo from "../assets/logo-black.svg";
import logoWhite from "../assets/logo.svg";
import MainMobile from "../pages/mobile/MainMobile";
import AboutMobile from "../pages/mobile/AboutMobile";
import LoanMobile from "../pages/mobile/LoanMobile";
import BankMobile from "../pages/mobile/BankMobile";
import CrmMobile from "../pages/mobile/CrmMobile";
import EquaringMobile from "../pages/mobile/EquaringMobile";
import TurkneyMobile from "../pages/mobile/TurkneyMobile";
import SolutionsMobile from "../pages/mobile/SolutionsMobile";
import TeamMobile from "../pages/mobile/TeamMobile";
import ContactsMobile from "../pages/mobile/ContactsMobile";
import {useEffect, useState} from "react";


function MobileContainer() {
    const [scroll, setScroll] = useState(false);

    const addClass = () => {
        if (window.scrollY === 0) {
            setScroll(false)
        } else {
            setScroll(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', addClass);
        return () => {
            window.removeEventListener("scroll", addClass)
        }
    }, [])
    return (
        <div className="flex flex-col relative">
            <div id="header" className={`fixed header top-0 w-full left-0 h-[65px] ${scroll ? "hide" : ""} flex`} style={{ zIndex: 100 }}>
                <img src={scroll ? logo : logoWhite} alt=""
                     className="w-[140px] md:w-[120px] items-center text-center mx-6 md:mx-2 top-0"/>
            </div>
            <MainMobile/>
            <AboutMobile/>
            <LoanMobile/>
            <BankMobile/>
            <CrmMobile/>
            <EquaringMobile/>
            <TurkneyMobile/>
            <SolutionsMobile/>
            <TeamMobile/>
            <ContactsMobile/>
        </div>
    );
}

export default MobileContainer;