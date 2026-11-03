import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server';
import { auth } from './lib/auth';
import { headers } from 'next/headers';

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
     const session = await auth.api.getSession({
          headers: await headers()
     });
     if(!session) {
          return NextResponse.redirect(new URL("/signin", request.url));
     }
     const user = session?.user;
}

export const config = {
     matcher: [
          '/add-studio',
          '/my-listings',
          '/studios/edit/:path*',
          '/my-bookings',
          '/my-wishlist'
     ],
}