import {useEffect, useState} from "react";

export const useMobileDetect = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor;
            if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    return isMobile;
};

