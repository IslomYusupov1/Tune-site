import {useRef} from 'react';
import {motion, useScroll} from "framer-motion";
import person from "../../assets/person.svg";
import down from "../../assets/down.svg";

function MainMobile() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
        smooth: 1
    })

    return (
        <motion.div ref={ref} style={{ opacity: scrollYProgress }}
                    className="h-screen bg-[url('../assets/bg-main.jpg')] object-cover bg-no-repeat bg-center w-full">
            <motion.div style={{scale: scrollYProgress}} className="h-full relative flex flex-col justify-center">
                <img
                    className="2xl:w-[800px] xl:w-[600px] lg:w-[500px] md:w-[400px] w-full rotate-[35deg]"
                    src={person} alt=""/>
                <div
                    className="absolute md:absolute md:bottom-0 bottom-[30px] w-full md:mx-[100px] flex flex-col items-center">
                    <h3
                        className="text-start text-[22px] md:text-[30px] px-[30px] text-white w-full xl:text-[40px] 2xl:text-[48px] lg:text-[36px] ">Прогресс
                        не случайность
                    </h3>
                    <img className="text-center md:hidden item-center" src={down} width={32} alt=""/>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default MainMobile;