import Head from "next/head";

export const metadata = {
  title: "Calculadora - Silvina Palaoro",
  description: "Calculadora",
};

export default function LayoutCalculadora({ children }) {
  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com/"/>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" media="all"/>
      </Head>     
      {children}
    </>
  );
}
