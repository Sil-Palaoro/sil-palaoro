"use client";
import { LanguageProvider } from '../../context/LanguageContext';
import RouterGuard from './RouterGuard';

const ClientWrapper = ({ children }) => {
  return (
    <RouterGuard>
        <LanguageProvider>{children}</LanguageProvider>;
    </RouterGuard>
  )
};

export default ClientWrapper;