import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const inOnDashboard = nextUrl.pathname.startsWith('/login')
      if (!inOnDashboard) {
        if (isLoggedIn) {
          return true
        } else {
          return Response.redirect(new URL('/login', nextUrl))
        }
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl))
      }
      return true
    },
  },
  providers: [],
} satisfies NextAuthConfig
