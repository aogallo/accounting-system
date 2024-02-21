'use server'

import { UserModel } from '@/models'
import { z } from 'zod'
import { hash } from 'bcrypt'
import { revalidatePath } from 'next/cache'
import { dbConnect } from '../mongodb'

const UserSchema = z.object({
  user: z.string().min(3, 'User must contain at least 5 character(s)'),
  email: z.string().email(),
  password: z.string().min(5, 'Password must contain at least 5 character(s)'),
})

type UserForm = z.infer<typeof UserSchema>

type ErrorState = Partial<Record<keyof UserForm, string[] | undefined>>

type State = {
  errors?: ErrorState
  message?: string
}

export async function createUser(prevState: State, formData: FormData) {
  const validateFields = UserSchema.safeParse({
    user: formData.get('user'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Missing Fields, Failed to Create User',
    }
  }

  const { user, email, password } = validateFields.data

  await dbConnect()

  const dbUser = await UserModel.findOne({ user, email })

  console.log('db user', dbUser)

  if (dbUser !== null) {
    return {
      message: 'User already exists',
    }
  }

  const hashedPassword = await hash(password, 10)
  const newUser = await UserModel.create({
    user,
    email,
    password: hashedPassword,
  })

  console.log('new user', newUser)

  await newUser.save()

  revalidatePath('/')

  return {
    message: 'User has been created',
  }
}
