'use server'

import { UserModel } from '@/models'
import { z } from 'zod'
import { hash } from 'bcrypt'
import { revalidatePath } from 'next/cache'
import { dbConnect } from '../mongodb'

export type ErrorState<T> = Partial<Record<keyof T, string[] | undefined>>

export type State<T> = {
  success: boolean
  errors?: ErrorState<T>
  message?: string
}

const UserSchema = z.object({
  user: z.string().min(3, 'User must contain at least 5 character(s)'),
  email: z.string().email(),
  password: z.string().min(5, 'Password must contain at least 5 character(s)'),
})

type UserForm = z.infer<typeof UserSchema>

export async function createUser(
  prevState: State<UserForm>,
  formData: FormData
) {
  const validateFields = UserSchema.safeParse({
    user: formData.get('user'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validateFields.success) {
    return {
      success: false,
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Missing Fields, Failed to Create User',
    }
  }

  const { user, email, password } = validateFields.data

  await dbConnect()

  const dbUser = await UserModel.findOne({ user, email })

  if (dbUser !== null) {
    return {
      success: false,
      message: 'User already exists',
    }
  }

  const hashedPassword = await hash(password, 10)
  const newUser = await UserModel.create({
    user,
    email,
    password: hashedPassword,
  })

  await newUser.save()

  revalidatePath('/')

  return {
    success: true,
    message: 'User has been created',
  }
}
