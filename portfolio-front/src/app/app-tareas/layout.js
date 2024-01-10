/*Layout de la App con metadata, head (favicon, fuentes), y ubicación de los componentes de la 
Barra de Navegación y Footer */

import BarraNavAppTareas from "@/components/BarraNavAppTareas";
import Footer from "@/components/Footer";


export const metadata = {
  title: "SGP Tareas",
  description: "Tu organizador personal",
};

export default function LayoutTareas({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/check-icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,600;1,700&family=Josefin+Slab:wght@500&family=Lato:wght@700&family=Merriweather:wght@300&family=Poppins:ital,wght@1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <BarraNavAppTareas />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
