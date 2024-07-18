import {useMemo, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {AppLanguage, listLanguages} from "../i18n/I18nContext";
import {appLanguageSelector, switchLanguage} from "../reducers/AppReducer";
import {useDispatch} from "react-redux";
import {useShallowEqualSelector} from "./useShallowSelector";

interface Props {
    bgImage: number
}

const LanguageSwitcher = ({ bgImage }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const language = useShallowEqualSelector(appLanguageSelector);

    const onSelect = (value: AppLanguage) => dispatch(switchLanguage({ language: value }));
    const list = useMemo(() => listLanguages().filter((x) => x !== language), [language]);
    return (
        <div onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            style={{position: 'relative', display: 'inline-block'}}>
            <div
                className={`border-2 px-2 py-2 font-normal text-[16px] 2xl:text-[20px] ${bgImage === 1 ? "border-white text-white" : "border-black text-black"} 
                relative cursor-pointer text-center items-center flex justify-center rounded-xl
                 ${isOpen ? "border-b-0" : ""} `} style={{ borderBottomLeftRadius: isOpen ? 0 : "0.75rem",
                borderBottomRightRadius: isOpen ? 0 : "0.75rem", }}>
                {language}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.2}}
                        className="rounded-xl"
                        style={{
                            position: 'absolute',
                            top: '80%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'transparent',
                            borderTop: "none",
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            borderLeft: `2px solid ${bgImage === 1 ? "white" : "black"}`,
                            borderRight: `2px solid ${bgImage === 1 ? "white" : "black"}`,
                            borderBottom: `2px solid ${bgImage === 1 ? "white" : "black"}`,
                            overflow: 'hidden',
                            zIndex: 101
                        }}
                    >
                        {list?.map((lang, index) => (
                            <div onClick={() => onSelect(lang)} key={index} className="px-2 first:py-2.5 pt-0 pb-2 font-normal" style={{
                                color: bgImage === 1 ? 'white' : 'black',
                                cursor: 'pointer',
                                textAlign: 'center'
                            }}>{lang}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default LanguageSwitcher;