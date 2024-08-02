import {Field, Form, Formik, FormikHelpers, FormikValues} from "formik";
import linkedin from "../../assets/linkedin-white.svg";
import {useEffect, useMemo, useRef, useState} from "react";
import {useScroll, motion} from "framer-motion";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import bgCosmo from "../../assets/cosmo-web.svg";
import {useI18n} from "../../i18n/I18nContext";

function ContactsMobile() {
    const ref = useRef<HTMLDivElement>(null);
    const {translate} = useI18n();
    const {} = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
        smooth: 1,
    })

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState("");

    const validationSchema = useMemo(
        () => () =>
            Yup.object().shape({
                name: Yup.string().nullable().required("Поле обязательно к заполнению"),
                email: Yup.string().email().nullable().required("Поле обязательно к заполнению"),
                phone: Yup.string().nullable().required("Поле обязательно к заполнению"),
                desc: Yup.string().nullable().required("Поле обязательно к заполнению"),
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
        <motion.div ref={ref} id="contact"
                    className="lg:h-screen bg-[url('../assets/bg-dark.png')] relative p-5 object-cover bg-no-repeat bg-center w-full">
            <img src={bgCosmo} alt="" className="hidden lg:block absolute bottom-0 right-0"/>
            <div className="flex custom-container h-full mx-auto justify-center xl:gap-3 lg:gap-3 flex-col text-white w-full text-start font-light lg:mx-[100px] xl:mt-[50px] 2xl:mt-[25px] lg:mt-[50px] ">
                <h3 className="2xl:text-[36px] xl:text-[28px] lg:text-[24px] text-[24px] mt-5">{translate("TITLE_CONTACT_PAGE_MAIN_TITLE")}</h3>
                <h2 className="2xl:text-[32px] xl:text-[22px] lg:text-[18px] text-[23px] mt-5 font-medium">{translate("TITLE_CONTACT_PAGE_MAIN_TITLE_1")}</h2>
                <div className="flex flex-col mt-3">
                    <p className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[14px]">{translate("TITLE_CONTACT_PAGE_MAIN_TITLE_2")}:</p>
                    <a className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] text-[18px] font-medium cursor-pointer" href="tel:+998911345326">+998 91 134-53-26</a>
                </div>
                <div className="flex flex-col mt-3">
                    <p className="2xl:text-[20px] xl:text-[18px] lg:text-[14px] text-[14px]">{translate("TITLE_CONTACT_PAGE_MAIN_TITLE_3")}:</p>
                    <a href="mailto:Info@TuneConsulting.net" className="2xl:text-[28px] xl:text-[22px] cursor-pointer lg:text-[20px] text-[18px] font-medium">Info@TuneConsulting.net</a>
                </div>
                <div className="flex flex-col mt-3">
                    <p className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[14px]">{translate("TITLE_CONTACT_PAGE_MAIN_TITLE_4")}:</p>
                    <h3 className="2xl:text-[28px] xl:text-[22px] lg:text-[20px] text-[18px] font-normal">{translate("TITLE_CONTACT_PAGE_MAIN_TITLE_5")}</h3>
                </div>
                <Formik initialValues={{name: "", phone: "", email: "", desc: ""}} validationSchema={validationSchema}
                        onSubmit={(e, formikHelpers) => sendMessage(e, formikHelpers)}>
                    {({handleSubmit, errors, touched, values, setFieldValue}) => (
                        <>
                            <Form onSubmit={handleSubmit} className="z-50 mt-14 lg:mt-10 lg:hidden">
                                <div className="flex flex-col gap-4 w-full md:w-2/3">
                                    <div>
                                        <Field type="text"
                                               name="name"
                                               className={`${errors.name && touched.name ? "border-red-600 focus:border-red-600" : ""} text-[14px] bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4`}
                                               placeholder={translate("TITLE_CONTACT_PAGE_MAIN_TITLE_7")}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="w-full">
                                            <Field type="text"
                                                   name="email"
                                                   placeholder={translate("TITLE_CONTACT_PAGE_MAIN_TITLE_3")}
                                                   className={`${errors.email && touched.email ? "border-red-600 focus:border-red-600" : ""} text-[14px] bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4 `}/>
                                        </div>
                                        <div className="w-full">
                                            <Field type="text"
                                                   name="phone"
                                                   placeholder={translate("TITLE_CONTACT_PAGE_MAIN_TITLE_8")}
                                                   className={`${errors.phone && touched.phone ? "border-red-600 focus:border-red-600" : ""} text-[14px] bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4 `}/>
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
                                                    placeholder={translate("TITLE_CONTACT_PAGE_MAIN_TITLE_9")}
                                                    className={`${errors.desc && touched.desc ? "border-red-600 focus:border-red-600" : ""} text-[14px] bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4`}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <button type="submit" disabled={loading}
                                            className="text-center bg-[#003ABC] w-full text-white rounded-lg p-3">{translate("TITLE_CONTACT_PAGE_MAIN_TITLE_6")}
                                    </button>
                                </div>
                            </Form>
                            <Form onSubmit={handleSubmit} className="z-50 hidden lg:block">
                                <div className="flex flex-col 2xl:gap-4 md:gap-3 2xl:mt-5 w-2/4">
                                    <div>
                                        <Field type="text"
                                               name="name"
                                               className={`${errors.name && touched.name ? "border-red-600 focus:border-red-600" : ""} 2xl:text-[25px] bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4`}
                                               placeholder={translate("TITLE_CONTACT_PAGE_MAIN_TITLE_7")}
                                        />
                                    </div>
                                    <div className="flex  gap-4">
                                        <div className="w-full">
                                            <Field type="text"
                                                   name="email"
                                                   placeholder={translate("TITLE_CONTACT_PAGE_MAIN_TITLE_3")}
                                                   className={`${errors.email && touched.email ? "border-red-600 focus:border-red-600" : ""} 2xl:text-[25px] bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4`}/>
                                        </div>
                                        <div className="w-full">
                                            <Field type="text"
                                                   name="phone"
                                                   placeholder={translate("TITLE_CONTACT_PAGE_MAIN_TITLE_8")}
                                                   className={`${errors.phone && touched.phone ? "border-red-600 focus:border-red-600" : ""} 2xl:text-[25px] bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4`}/>
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
                                                    placeholder={translate("TITLE_CONTACT_PAGE_MAIN_TITLE_9")}
                                                    className={`${errors.desc && touched.desc ? "border-red-600 focus:border-red-600" : ""} 2xl:text-[25px] bg-white outline-0 border text-gray-900 rounded-lg focus:ring-[#003ABC] focus:border-[#003ABC] block w-full p-4`}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <button type="submit" disabled={loading}
                                            className="text-center bg-[#003ABC] 2xl:text-[20px] w-[200px] 2xl:p-5 2xl:w-[400px] text-white rounded-lg p-3">{translate("TITLE_CONTACT_PAGE_MAIN_TITLE_6")}
                                    </button>
                                </div>
                            </Form>
                        </>
                    )}
                </Formik>
                <div className="flex gap-8 xl:mt-10 lg:mt-10 mt-5">
                    <a href="https://www.linkedin.com/company/tune-consulting/" className="cursor-pointer" target="_blank"><img src={linkedin}  alt=""/></a>
                </div>
            </div>
        </motion.div>
    );
}

export default ContactsMobile;