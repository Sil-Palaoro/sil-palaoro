"use client";
import { useEffect, Suspense } from 'react';
import { LanguageProvider } from "../../context/LanguageContext";
import '../../../i18n';

export default function ClientWrapper({ children }) {
  // useEffect(() => {}, []);
  return (
    <LanguageProvider>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
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