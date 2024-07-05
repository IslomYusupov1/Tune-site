import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ScrollDirection = () => {
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = (e) => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Случай скролла вниз
                console.log("вниз")
                Navigate({to: "/about"}); // Замените 'next-page' на нужный путь
            } else if (currentScrollY < lastScrollY) {
                // Случай скролла вверх
                Navigate({to: "/"}); // Замените 'previous-page' на нужный путь
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [lastScrollY, history]);

    return null; // Этот компонент не отображает ничего, он только отслеживает скролл
};

export default ScrollDirection;