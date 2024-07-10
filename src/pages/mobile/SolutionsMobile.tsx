import {useRef} from "react";
import {useScroll, motion} from "framer-motion";

function SolutionsMobile() {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
        smooth: 1,
    })
    return (
        <motion.div ref={ref} style={{ opacity: scrollYProgress }} className="bg-[url('../assets/bg-dark.png')] p-5 object-cover bg-no-repeat bg-center w-full">
            <motion.div style={{ scale: scrollYProgress }}
                className="h-full w-full flex flex-col gap-4 xl:mt-10 lg:mt-10 2xl:mt-0 3xl:mt-0 text-white lg:w-8/12 2xl:w-9/12 w-full text-start font-light lg:mx-[100px]">
                <h3 className="2xl:text-[40px] lg:text-[22px] xl:text-[26px] text-[24px] leading-tight xl:mb-4 2xl:mb-10 lg:mb-4">Наше
                    решение для обеспечения
                    омниканальности
                    банковских услуг</h3>
                <h3 className="2xl:text-[32px] lg:text-[18px] xl:text-[22px] text-[20px] mb-1">Униканальная
                    платформа на базе ELMA BPMS</h3>
                <div className="w-full flex flex-col gap-2">
                    <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">CRM</h3>
                    <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">Контакты и
                        обращения</p>
                    <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">Лиды</p>
                    <p className="mb-2 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">Клиенты</p>
                </div>
                <div className="border-b border-white w-full"/>
                <div className="w-full flex flex-col gap-2">
                    <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">Настройки
                        и безопасность</h3>
                    <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">Роли и права
                        пользователей</p>
                    <p className="pb-1 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">Задачи и
                        уведомления
                        пользователям</p>
                    <p className="mb-2 2xl:text-[20px] xl:text-[15px] lg:text-[13px] text-[15px]">Группы
                        пользователей и
                        комитеты</p>
                </div>
                <div className="border-b border-white w-full"/>
                <div className="w-full flex flex-col gap-2">
                    <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">Бизнес
                        процессы и БПМ движок</h3>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Онбординг
                        клиента </p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Кредитный
                        конвейер</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Карточный
                        конвейер</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Вкладные
                        операции</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Входящие и
                        исходящие
                        переводы </p>
                    <p className="mb-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Операции по
                        счетам</p>
                </div>
                <div className="border-b border-white w-full"/>
                <div className="w-full flex flex-col gap-2">
                    <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">Витрина
                        продуктов</h3>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Кредиты</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Депозиты</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Карты</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Банкоматы</p>
                    <p className="pb-1 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Денежные
                        переводы</p>
                    <p className="mb-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px] text-[15px]">Переводы с
                        счетов</p>
                </div>
                <div className="border-b border-white w-full"/>
                <div className="flex justify-between">
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="xl:text-[18px] 2xl:text-[24px] lg:text-[14px] text-[19px] font-medium 2xl:mb-3 xl:mb-1">Управляющие
                            и комитеты</h3>
                        <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px] text-[15px]">Пользователи
                            ДБО</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px] text-[15px]">Пользователи
                            сайта</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px] text-[15px]">Операционисты
                            и
                            аналитики</p>
                        <p className="pb-1 2xl:text-[18px] xl:text-[16px] lg:text-[13px] text-[15px]">Коллцентр</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default SolutionsMobile;