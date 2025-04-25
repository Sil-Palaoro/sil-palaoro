"use client"
import { createContext, useState, useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/router';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {    
    // const router = useRouter();
    const pathname = usePathname(); // Get the current path
    const [language, setLanguage] = useState('es');

     // Extract the locale from the pathname (e.g., "/en" or "/es")
     useEffect(() => {
        if (pathname) {
            const locale = pathname.split('/')[1]; // Get the first segment of the path
            console.log(pathname);
            if (['en', 'es'].includes(locale)) {
                setLanguage(locale);
            } else {
                setLanguage('es'); // Default to 'es' if no valid locale is found
            }
        }
    }, [pathname]);

    const changeLanguage = (lang) => {
        // router.push({ pathname: router.pathname, query: router.query }, router.asPath, { locale: lang });
        // setLanguage(lang);
        const newPath = `/${lang}${pathname.replace(/^\/(en|es)/, '')}`; // Replace the locale in the path
        window.location.href = newPath; // Navigate to the new path
    };

    // useEffect(() => {
    //     setLanguage(router.locale || 'es');
    //   }, [router.locale]);
    

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);


// const { locale, push, pathname, asPath, query } = useRouter();
    // const [routerReady, setRouterReady] = useState(false);

    // useEffect(() => {
    //     if (router) {
    //         const { locale } = router;
    //         setLanguage(locale);
    //         setRouterReady(true);
    //     }
    // }, [router]);

    

    // if (!routerReady) {
    //     return null; // o un spinner de carga
    // }