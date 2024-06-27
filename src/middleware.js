import { NextResponse } from "next/server"

export const middleware = (request) => {
    if (request.nextUrl.pathname.startsWith('/services')) {
    return NextResponse.redirect(new URL('/contacts', request.url));
    }
}

// export const config = {
//     // matcher e multiple kaj kora jai 
//     matcher: ['/user-profile', '/services'],
// }