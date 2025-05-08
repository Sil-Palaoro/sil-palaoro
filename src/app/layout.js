/*Layout de la App con metadata, head (favicon, fuentes), y ubicación de los componentes de la 
Barra de Navegación y Footer */

import Footer from "./components/Footer";
import BarraNavHome from "./components/BarraNavHome";
import ClientWrapper from "./components/ClientWrapper";
import { headers } from "next/headers";



export const metadata = {
  title: "Silvina Palaoro - Portfolio",
  description: "Portfolio",
};


export default function LayoutHome({ children }) {
  const headersList = headers(); // Access headers
  const locale = headersList.get('x-locale'); // Get locale from headers or default to 'es'
  
  // console.log("Layout locale from headers:", locale);  
  console.log("Rendering Layout");

  return (
    <html lang={locale}>
      <head>      
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,600;1,700&family=Josefin+Slab:wght@500&family=Lato:wght@700&family=Merriweather:wght@300&family=Poppins:ital,wght@1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com/"/>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" media="all"/>
      </head>
      <body>
        <ClientWrapper>
          <BarraNavHome />
          {children}
          <Footer />
        </ClientWrapper>

      </body>
    </html>
  );
}


// export async function generateStaticParams() {
//   return ['es', 'en'].map((lang) => ({ locale: lang }));
// }


// console.log("Layout params:", params); // Debugging
  // const lang = params?.locale || 'es';
  // console.log("Layout lang:", lang); // Debugging
