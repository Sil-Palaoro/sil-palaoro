"use client";
import { useEffect } from 'react';
import { LanguageProvider } from "../../context/LanguageContext";
import '../../../i18n';

export default function ClientWrapper({ children }) {
  // useEffect(() => {}, []);
  return (
    <LanguageProvider>
    {children}
    </LanguageProvider>
  )
};

// import { LanguageProvider } from '../../context/LanguageContext';
// import RouterGuard from './RouterGuard';

// const ClientWrapper = ({ children }) => {
//   return (
//     <RouterGuard>
//         <LanguageProvider>{children}</LanguageProvider>;
//     </RouterGuard>
//   )
// };

// export default ClientWrapper;