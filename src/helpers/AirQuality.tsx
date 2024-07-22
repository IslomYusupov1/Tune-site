import {useEffect, useState} from 'react';
import {useShallowEqualSelector} from "./useShallowSelector";
import {appLanguageSelector} from "../reducers/AppReducer";
import ecoImage from "../assets/eco.svg";
import {useI18n} from "../i18n/I18nContext";

interface Props {
    readonly coords: { long: number, lat: number; }
}

function AirQuality({ coords }: Props) {
    const [data, setData] = useState<Record<string, any>>({});
    console.log(data, "air")
    const language = useShallowEqualSelector(appLanguageSelector);
    const {translate} = useI18n();
    const getData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.long}&appid=e7feb6e31e41d603d5c8f6ede12c8b1a&units=metric&lang=${language.toLowerCase()}`);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setData(json);
        } catch (error: any) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        getData()
    }, [language])

    return (
        <div className="relative flex items-center ">
            <div className="bg-[#003ABD80] rounded-[12px] gap-3 text-white flex items-center py-[4px] px-[8px]">
                <img src={ecoImage} alt=""/>
                <p className="text-[15px]">{translate("TITLE_AQI")} {data?.list?.length > 0 ? data?.list[0]?.main?.aqi : 0}</p>
            </div>
            {/*<p className="text-white text-[17px]">{weather?.name}</p>*/}
            {/*<img src={weather?.weather?.length > 0 ? `https://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png` : ""} alt=""/>*/}
            {/*<p className="text-white text-[22px] font-normal">{weather?.main?.temp}&deg;</p>*/}
        </div>
    );
}

export default AirQuality;