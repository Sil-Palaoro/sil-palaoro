"use client"
import { createContext, useState, useContext, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {    
    const router = useRouter();
    const pathname = usePathname(); // Get the current path
    const [language, setLanguage] = useState('es');

     // Extract the locale from the pathname (e.g., "/en" or "/es")
     useEffect(() => {
        if (pathname) {
            const locale = pathname.split('/')[1]; // Get the first segment of the path
            console.log("Extracted locale:", locale);
            if (['en', 'es'].includes(locale) && locale !== language) {
                setLanguage(locale);
                console.log("Language updated to:", language);
            } 
        // console.log("Current language:", language, "and the pathname is", pathname); // Debugging

            // else {
            //     setLanguage('es'); // Default to 'es' if no valid locale is found
            // }
        }
    }, [pathname]);

    const changeLanguage = (lang) => {
        // router.push({ pathname: router.pathname, query: router.query }, router.asPath, { locale: lang });
        const newPath = `/${lang}${pathname.replace(/^\/(en|es)/, '')}`.replace(/\/$/, ''); // Replace the locale in the path
        setLanguage(lang); // Update the language state
        router.push(newPath); // Navigate programmatically
        // window.location.href = newPath; // Navigate to the new path
        console.log("Language changed to:", lang, "and the new path is", newPath); // Debugging
    };

    console.log("Current language in LanguageProvider:", language); // Debugging 
    
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