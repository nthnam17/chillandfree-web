import { NextRequest, NextResponse } from 'next/server';

export function middleware(request) {
    const localeCookie = request.cookies.get('lang')?.value || request.nextUrl.defaultLocale;
    if (localeCookie !== undefined && request.nextUrl.locale !== localeCookie) {
        return NextResponse.redirect(new URL(`/${localeCookie}${request.nextUrl.pathname}`, request.url));
    }
}
export const config = {
    matcher: ['/', '/event-game', '/game-campaign', '/case-study', '/tin-tuc', '/lien-he'],
    // matcher: ['/:path*'],
};
