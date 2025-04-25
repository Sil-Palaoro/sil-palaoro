import createMiddleware from 'next-i18n-router';
import { NextResponse } from 'next/server';

const I18N_CONFIG = {
  locales: ['es', 'en'],
  defaultLocale: 'es',
};

const i18nMiddleware = createMiddleware(I18N_CONFIG, NextResponse);

export default function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Redirigir explícitamente "/" a "/es"
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${I18N_CONFIG.defaultLocale}`, request.url));
  }

  return i18nMiddleware(request); 
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};