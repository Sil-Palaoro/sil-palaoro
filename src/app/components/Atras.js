//Componente del boton para volver atrás en el historial de navegación
'use client' 
import { useRouter } from 'next/navigation';
import styles from "@/styles/page.module.css";
import { useTranslation } from 'react-i18next';
// import { useLanguage } from '../../context/LanguageContext';
 
export default function Atras() {
  const router = useRouter()
  // const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
 
  return (
    <button  type="button" onClick={() => router.back()} className={styles.botonatras}>
      {t("backButton")}
    </button>
  )
};