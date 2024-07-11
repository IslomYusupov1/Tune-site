import linkedin from "../assets/linkedin.svg";
import {motion} from "framer-motion";
import imageBgLight from "../assets/bg-light.jpg";
import {Field, Form, Formik, FormikHelpers, FormikValues} from "formik";
import emailjs from '@emailjs/browser';
import * as Yup from "yup";
import {useEffect, useMemo, useState} from "react";
import ContentLayout from "../layouts/ContentLayout";

const headerVariant = {
    hidden: {
        y: 900,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {type: "spring", stiffness: "35"}
    },
    exit: {
        y: 900,
        transition: {ease: "easeInOut"}
    }
}


function Contact() {
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState("");

    const validationSchema = useMemo(
        () => () =>
            Yup.object().shape({
                name: Yup.string().nullable().required("Поле обязательно к заполнению"),
                email: Yup.string().email().nullable().required("Поле обязательно к заполнению"),
                phone: Yup.string().nullable().required("Поле обязательно к заполнению"),
            }),
        [],
    );
    const sendMessage = (e: FormikValues, formikHelpers: FormikHelpers<any>) => {
        setLoading(true);
        emailjs
            .send('service_sba5jol', 'template_4juwanb', e, {
                publicKey: 'p_BAGVk_9HKUf80U2',
            })
            .then(
                () => {
                    setAlert("Сообщение успешно отправлена!");
                    setLoading(false);
                    formikHelpers.resetForm();
                },
                (error: { text: string }) => {
                    setLoading(false);
                    setAlert(error.text);
                },
            );
    }
    useEffect(() => {
        if (alert.length > 0) {
            const timer = setTimeout(() => {
                setAlert("");
            }, 2000);
            return () => {
                clearTimeout(timer)
            }
        }
    }, [alert])

    return (
        <>
            <motion.img animate={{opacity: 1}} initial={{opacity: 0}}
                        exit={{opacity: 0, transition: {ease: "easeInOut"}}}
                        transition={{duration: 0.25, ease: "easeInOut"}}
                        alt="" src={imageBgLight} className="fixed z-50 w-screen h-screen top-0 left-0"
                        style={{zIndex: "-1"}}/>
            <ContentLayout className="relative">
                <motion.div variants={headerVariant} initial="hidden" animate="visible" exit="exit"
                            style={{zIndex: 100}}
                            className="flex 2xl:gap-3 xl:gap-2 lg:gap-1 flex-col text-[#353535] xl:w-8/12 2xl:w-9/12 lg:w-8/12 text-start font-light mx-[100px] xl:mt-[50px] 2xl:mt-[25px] lg:mt-[50px] ">
                    <h3 className="2xl:text-[36px] xl:text-[28px] lg:text-[24px]">Мы всегда рады Вам.</h3>
                    <h2 className="2xl:text-[30px] xl:text-[22px] lg:text-[18px] font-medium cursor-pointer">OOO “TUNE
                        Consulting” </h2>
                    <div className="flex flex-col ">
                        <p className="2xl:text-[20px] xl:text-[16px] lg:text-[14px]">Телефон:</p>
                        <a className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] font-medium cursor-pointer"
                           href="tel:+998911345326">+998 91 134-53-26</a>
                    </div>
                    <div className="flex flex-col">
                        <p className="2xl:text-[20px] xl:text-[18px] lg:text-[14px]">Электронная почта:</p>
                        {/*<h3 className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] font-medium">Info@TuneConsulting.net</h3>*/}
                        <a href="mailto:Info@TuneConsulting.net"
                           className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] font-medium">Info@TuneConsulting.net</a>
                    </div>
                    <div className="flex flex-col">
                        <p className="2xl:text-[20px] xl:text-[16px] lg:text-[14px]">Адрес:</p>
                        <h3 className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] font-normal">г. Ташкент,
                            Шайхантахурский район,
                            улица
                            Зульфияхоним, 12</h3>
                    </div>
                    <Formik initialValues={{name: "", phone: "", email: "", desc: ""}} validationSchema={validationSchema}
                            onSubmit={(e, formikHelpers) => sendMessage(e, formikHelpers)}>
                        {({handleSubmit, errors, touched, values, setFieldValue}) => (
                            <Form onSubmit={handleSubmit} className="z-50">
                                <div className="flex flex-col 2xl:gap-4 md:gap-3 2xl:mt-10 w-3/4">
                                    <div>
                                        <Field type="text"
                                               name="name"
                                               className={`${errors.name && touched.name ? "border-red-600 focus:border-red-600" : ""} bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4`}
                                               placeholder="Фамилия,имя и отчество"
                                        />
                                    </div>
                                    <div className="flex  gap-4">
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
                                    <div>
                                        <Field type="text"
                                               name="desc"
                                        >
                                            {({field}: any) => (
                                                <textarea
                                                    {...field}
                                                    value={values.desc}
                                                    onChange={(e) => setFieldValue("desc", e.target.value)}
                                                    placeholder="Введите текст обращение"
                                                    className={`${errors.desc && touched.desc ? "border-red-600 focus:border-red-600" : ""} bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4`}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <button type="submit" disabled={loading}
                                            className="text-center bg-[#003ABC] w-[200px] text-white rounded-lg p-3">Отправить
                                        сообщение
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className="flex gap-8 mt-2">
                        <a href="https://www.linkedin.com/company/tune-consulting/" className="cursor-pointer"
                           target="_blank"><img src={linkedin} alt=""/></a>
                    </div>
                </motion.div>
            </ContentLayout>
            {alert?.length > 0 && <motion.div className="fixed top-5 right-1/2" initial={{y: -100}}
                                              animate={{y: 0}}
                                              exit={{y: -100, transition: {duration: 0.3, ease: "easeInOut"}}}
                                              transition={{type: "spring", stiffness: 120}}>
                <div className="bg-white p-5 shadow-lg shadow-white">
                    <p className="text-black font-semibold">{alert}</p>
                </div>
            </motion.div>}
        </>
    );
}

export default Contact;