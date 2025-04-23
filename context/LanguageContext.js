"use client"
import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // const { locale, push, pathname, asPath, query } = useRouter();
    const [routerReady, setRouterReady] = useState(false);
    const router = useRouter();
    const [language, setLanguage] = useState('es');

    useEffect(() => {
        if (router) {
            const { locale } = router;
            setLanguage(locale);
            setRouterReady(true);
        }
    }, [router]);

    const changeLanguage = (lang) => {
        router.push({ pathname: router.pathname, query: router.query }, router.asPath, { locale: lang });
        setLanguage(lang);
    };

    if (!routerReady) {
        return null; // o un spinner de carga
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);