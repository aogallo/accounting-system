'use server'

import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import { cookies } from 'next/headers'

export const authenticate = async (
  _prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}

export async function getSession() {
  const sessionId = cookies().get('sessionId')?.value
  return sessionId ? '' : null
}

export async function handleLogin(sessionData) {
  const encryptedSessionData = encrypt(sessionData)
}
