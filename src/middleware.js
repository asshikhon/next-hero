import { cookies } from "next/headers";
import { NextResponse } from "next/server"

export const middleware = async (request) => {

const token = cookies(request).get('next-auth.session-token')
console.log(token);
if (!token) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
}

    // if (request.nextUrl.pathname.startsWith('/services')) {
    // return NextResponse.redirect(new URL('/contacts', request.url));
    // }
}

export const config = {
    // matcher e multiple kaj kora jai 
    matcher: ['/dashboard', '/services'],
}