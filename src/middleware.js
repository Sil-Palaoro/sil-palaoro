import { NextResponse } from 'next/server';

  
const I18N_CONFIG = {
  locales: ['es', 'en'],
  defaultLocale: 'es',
};

export default function middleware(request) {
  const pathname = request.nextUrl.pathname; // Get the current path
  const locale = pathname.split('/')[1]; // Extract the first segment of the path

  console.log("Middleware is running for:", pathname);

  // Exclude static files, API routes, and Next.js internals
  const excludedPaths = [
    '/_next',
    '/favicon.ico',
    '/static',
    '/api',
  ];

  const isStaticAsset = /\.(jpg|jpeg|png|gif|svg|json)$/.test(pathname);

  if (excludedPaths.some((path) => pathname.startsWith(path)) || isStaticAsset) {
    console.log("Excluded path:", pathname);
    return NextResponse.next(); // Skip middleware for excluded paths
  }

  // Redirect "/" to the default locale ("/es")
  if (pathname === '/') {
      const url = request.nextUrl.clone();
      url.pathname = `/${I18N_CONFIG.defaultLocale}`; // Default locale
      const response = NextResponse.redirect(url);
      return response;
  }
  
   // Rewrite "/es" and "/en" to "/"
  if (I18N_CONFIG.locales.includes(locale)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(`/${locale}`, ''); // Rewrite to "/"
    const response = NextResponse.rewrite(url);  
    return response;
  }  

  return NextResponse.next();
}


export const config = {
  matcher: ['/((?!_next|favicon.ico|static|api).*)'],
};

// export default function middleware(request) {
//   const requestHeaders = new Headers(request.headers)  
//   const pathname = request.nextUrl.pathname;
//   const locale = pathname.split('/')[1]; // Extract the locale from the pathname. Get the first segment of the path
//   console.log("Middleware is running for:", pathname);


//   // Redirigir explícitamente "/" a "/es"
//   if (pathname === '/') {
//     const url = request.nextUrl.clone();
//     url.pathname = `/${I18N_CONFIG.defaultLocale}`;
//     console.log("Redirecting to default locale:", url.pathname);
//     return NextResponse.redirect(url);
//   }

   
//   // Add the locale to the request headers if it's valid
//   if (I18N_CONFIG.locales.includes(locale)) {
//     const response = NextResponse.next(); // Use the existing i18n middleware
//     // const response = i18nRouter(request, I18N_CONFIG); // Use the i18nRouter middleware
//     requestHeaders.set('x-locale', locale); // Add the locale to the headers
//     console.log("Middleware locale:", locale);
//     return response;
//   }

//   // If the locale is invalid, redirect to the default locale
//   // const url = request.nextUrl.clone();
//   // url.pathname = `/${I18N_CONFIG.defaultLocale}${pathname}`;
//   // requestHeaders.set('x-locale', I18N_CONFIG.defaultLocale); // Ensure the default locale is set
//   // console.log("Redirecting to default locale with pathname:", url.pathname);
//   // return NextResponse.redirect(url);

//   if (!I18N_CONFIG.locales.includes(locale)) {
//     const url = request.nextUrl.clone();
//     url.pathname = `/${I18N_CONFIG.defaultLocale}${pathname}`;
//     const response = NextResponse.redirect(url);
//     requestHeaders.set('x-locale', I18N_CONFIG.defaultLocale); // Ensure the default locale is set
//     console.log("Middleware locale 2:", locale);
//     return response;
//   }
  
//   return i18nRouter(request, I18N_CONFIG); // Use the i18nRouter middleware
  
// }

// export const config = {
//   matcher: ['/((?!_next|favicon.ico|static|api).*)'],
// };








// import { NextResponse } from 'next/server';

// export default function middleware(request) {
//   console.log("Middleware is running for:", request.nextUrl.pathname);
//   // const { pathname } = request.nextUrl;


//   // // Rewrite "/en" and "/es" to "/"
//   // if (pathname === '/en' || pathname === '/es') {
//   //   const url = request.nextUrl.clone();
//   //   url.pathname = '/';
//   //   return NextResponse.rewrite(url);
//   // }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!_next|favicon.ico|static|api).*)'], // Match all routes except Next.js internals
// };


// export default function middleware(request) {
//   console.log("Middleware is running for:", request.nextUrl.pathname);

//   // Use i18nRouter to handle locale-based routing
//   return i18nRouter(request, I18N_CONFIG);
// }



  // Add the locale to the request headers if it's valid
  // if (I18N_CONFIG.locales.includes(locale)) {
  //   requestHeaders.set('x-locale', locale); // Add the locale to the headers
  //   // const response = NextResponse.next(); 
  //   const response = i18nRouter(request, I18N_CONFIG); // Use the i18nRouter middleware
  //   response.headers.set('x-locale', locale); // Pass the locale to the layout
  //   console.log("Middleware locale:", locale);
  //   return response;
  // }

  // Rewrite "/es" and "/en" to "/" if the locale is invalid
  // if (!I18N_CONFIG.locales.includes(locale)) {
  //     const url = request.nextUrl.clone();
  //     url.pathname = pathname.replace(`/${locale}`, '');
  //     requestHeaders.set('x-locale', 'es'); // Add the locale to the headers
  //     const response = NextResponse.rewrite(url);
  //     response.headers.set('x-locale', 'es'); // Pass the locale to the layout
  //     return response;  
  //   }

  // If the locale is invalid, redirect to the default locale
  // if (!I18N_CONFIG.locales.includes(locale)) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = `/${I18N_CONFIG.defaultLocale}${pathname}`; // Redirect to the default locale
  //   requestHeaders.set('x-locale', I18N_CONFIG.defaultLocale); // Ensure the default locale is set
  //   console.log("Redirecting to default locale with pathname:", url.pathname);
  //   return NextResponse.redirect(url);
  // } 


 // import { headers } from "next/headers";
// import { i18nRouter } from 'next-i18n-router';


 // const requestHeaders = new Headers(request.headers)  

      // requestHeaders.set('x-locale', 'es'); // Add the locale to the headers
      // response.headers.set('x-locale', 'es'); // Pass the locale to the layout
      // const headersList = headers(); // Access headers
      // const passed_locale = headersList.get('x-locale'); // Get locale from headers
      // console.log("Passed locale in headers:", passed_locale); //debuging


           // requestHeaders.set('x-locale', locale); // Add the locale to the headers

    // response.headers.set('x-locale', locale); // Pass the locale to the layout
    // const headersList = headers(); // Access headers
    // const passed_locale = headersList.get('x-locale'); // Get locale from headers
    // console.log("Passed locale in headers:", passed_locale); //debuging