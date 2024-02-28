import { compare } from 'bcrypt'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { dbConnect } from './app/lib/mongodb'
import { authConfig } from './auth.config'
import { UserModel } from './models'

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
  try {
    await dbConnect()
    const dbUser = await UserModel.findOne({ user })

    if (dbUser === null) {
      return undefined
    }

    return {
      user: dbUser.user,
      email: dbUser.email,
      password: dbUser.password,
      id: dbUser.id,
    }
  } catch (error) {}
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parseCredentials = z
          .object({ user: z.string().min(3), password: z.string().min(5) })
          .safeParse(credentials)

        if (parseCredentials.success) {
          await dbConnect()
          const { user: dbuser, password } = parseCredentials.data
          const user = await getUser(dbuser)
          if (!user) return null

          const passwordMatch = await compare(password, user.password)
          if (passwordMatch) return user
        }

        return null
      },
    }),
  ],
})
