import {useEffect, useMemo, useState} from "react";
import {useShallowEqualSelector} from "./useShallowSelector";
import {appLanguageSelector} from "../reducers/AppReducer";

interface Props {
    readonly coords: { long: number, lat: number; }
    readonly denied: boolean;
}

function Weather({ coords, denied}: Props) {
    const [weather, setWeather] = useState<Record<string, any>>({});
    console.log(weather, "ww")
    const language = useShallowEqualSelector(appLanguageSelector);
    const url = useMemo(() => denied ?
        `https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=e7feb6e31e41d603d5c8f6ede12c8b1a&units=metric&lang=${language.toLowerCase()}`
        : `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.long}&appid=e7feb6e31e41d603d5c8f6ede12c8b1a&units=metric&lang=${language.toLowerCase()}`, [denied, coords, language])
    const getData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setWeather(json);
        } catch (error: any) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        getData()
    }, [language, denied])

    return (
        <div className="relative flex items-center ">
            <p className="text-white text-[15px]">{weather?.name}</p>
            <img width={40} src={weather?.weather?.length > 0 ? `https://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png` : ""} alt=""/>
            <p className="text-white text-[18px] font-normal">{weather?.main?.temp}&deg;</p>
        </div>
    );
}

export default Weather;