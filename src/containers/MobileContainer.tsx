import logo from "../assets/logo.svg";
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


function MobileContainer() {
    return (
        <div className="flex flex-col relative">
            <div className="pt-[25px] fixed top-0 z-50 w-full">
                <img src={logo} alt=""
                     className="w-[160px] md:w-[180px] mx-6 md:mx-2 top-0"/>
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