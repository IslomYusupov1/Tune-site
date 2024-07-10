import {Field, Form, Formik} from "formik";
import linkedin from "../../assets/linkedin-white.svg";
import {useRef} from "react";
import {useScroll, motion} from "framer-motion";

function ContactsMobile() {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
        smooth: 1,
    })
    return (
        <motion.div ref={ref} style={{ opacity: scrollYProgress }} className="bg-[url('../assets/bg-dark.png')] p-5 object-cover bg-no-repeat bg-center w-full">
            <motion.div style={{ scale: scrollYProgress }} className="flex 2xl:gap-6 xl:gap-3 lg:gap-3 flex-col text-white xl:w-8/12 2xl:w-9/12 lg:w-8/12 w-full text-start font-light lg:mx-[100px] xl:mt-[50px] 2xl:mt-[25px] lg:mt-[50px] ">
                <h3 className="2xl:text-[36px] xl:text-[28px] lg:text-[24px] text-[24px] mt-5">Мы всегда рады Вам.</h3>
                <h2 className="2xl:text-[30px] xl:text-[22px] lg:text-[18px] text-[23px] mt-5 font-medium">OOO “TUNE Consulting” </h2>
                <div className="flex flex-col mt-3">
                    <p className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[19px]">Телефон:</p>
                    <h3 className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] text-[15px] font-medium">+998 91 134-53-26</h3>
                </div>
                <div className="flex flex-col mt-3">
                    <p className="2xl:text-[20px] xl:text-[18px] lg:text-[14px] text-[19px]">Электронная почта:</p>
                    <h3 className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] text-[15px] font-medium">Info@TuneConsulting.net</h3>
                </div>
                <div className="flex flex-col mt-3">
                    <p className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[19px]">Адрес:</p>
                    <h3 className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] text-[15px] font-normal">г. Ташкент, Шайхантахурский район,
                        улица
                        Зульфияхоним, 12</h3>
                </div>
                <Formik initialValues={{name: "", phone: "", email: ""}}
                        onSubmit={(e, formikHelpers) => console.log(e, formikHelpers)}>
                    {({handleSubmit, errors, touched}) => (
                        <Form onSubmit={handleSubmit} className="z-50 mt-24">
                            <div className="flex flex-col gap-4 w-full">
                                <div>
                                    <Field type="text"
                                           name="name"
                                           className={`${errors.name && touched.name ? "border-red-600 focus:border-red-600" : ""} bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4`}
                                           placeholder="Фамилия,имя и отчество"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="w-full">
                                        <Field type="text"
                                               name="email"
                                               placeholder="Электронная почта"
                                               className={`${errors.email && touched.email ? "border-red-600 focus:border-red-600" : ""} bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4 `}/>
                                    </div>
                                    <div className="w-full">
                                        <Field type="text"
                                               name="phone"
                                               placeholder="Номер телефона"
                                               className={`${errors.phone && touched.phone ? "border-red-600 focus:border-red-600" : ""} bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4 `}/>
                                    </div>
                                </div>
                                <button type="submit" disabled={true}
                                        className="text-center bg-[#003ABC] w-full text-white rounded-lg p-3">Отправить
                                    сообщение
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="flex gap-8 2xl:mt-18 xl:mt-10 lg:mt-10 mt-10">
                    <img src={linkedin} alt=""/>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ContactsMobile;