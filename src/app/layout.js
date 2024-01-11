/*Layout de la App con metadata, head (favicon, fuentes), y ubicación de los componentes de la 
Barra de Navegación y Footer */


import Footer from "@/components/Footer";


export const metadata = {
  title: "Silvina Palaoro - Portfolio",
  description: "Portfolio",
};

export default function LayoutHome({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/check-icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,600;1,700&family=Josefin+Slab:wght@500&family=Lato:wght@700&family=Merriweather:wght@300&family=Poppins:ital,wght@1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com/"/>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" media="all"/>

      </head>
      
      <body>{children}</body>
      <Footer />
    </html>
  );
}
