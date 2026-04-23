import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { authConfig } from './auth.config'
import { users } from './scripts/placeholder-data'

async function getUser(user: string): Promise<
  | {
      id: string
      user: string
      email: string
      password: string
      roles: string[]
    }
  | undefined
> {
  // Use placeholder data instead of MongoDB
  const dbUser = users.find((u) => u.name === user)

  if (!dbUser) {
    return undefined
  }

  // Return mock user with plain password (not hashed for placeholder)
  return {
    user: dbUser.name,
    email: dbUser.email,
    password: dbUser.password,
    id: `user-${Date.now()}`,
    roles: ['admin'],
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parseCredentials = z
          .object({ user: z.string().min(1), password: z.string().min(1) })
          .safeParse(credentials)

        if (parseCredentials.success) {
          const { user: dbuser, password } = parseCredentials.data
          
          // Accept any login with non-empty credentials for development
          if (dbuser && password) {
            // Try to find user in placeholder data first
            const placeholderUser = await getUser(dbuser)
            if (placeholderUser) {
              // Check if password matches (plain text for placeholder data)
              if (password === placeholderUser.password) {
                return placeholderUser
              }
            }
            
            // Fallback: create a fake user session for development
            return {
              id: `fake-${Date.now()}`,
              user: dbuser,
              email: `${dbuser}@placeholder.local`,
              password: password,
              roles: ['admin'],
            }
          }
        }

        return null
      },
    }),
  ],
})
