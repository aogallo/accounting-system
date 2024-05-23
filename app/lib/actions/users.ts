'use server'

import { UserModel } from '@/models'
import { hash } from 'bcrypt'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { dbConnect } from '../mongodb'
import { State, UserSchema } from '@/app/lib/definitions'

type UserForm = z.infer<typeof UserSchema>

export async function createUser(
  _prevState: State<UserForm>,
  formData: FormData
) {
  const validateFields = UserSchema.safeParse({
    user: formData.get('user'),
    email: formData.get('email'),
    name: formData.get('name'),
    password: formData.get('password'),
  })



  if (!validateFields.success) {
    return {
      success: false,
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Missing Fields, Failed to Create User',
    }
  }

  const { user, email, name, password } = validateFields.data

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
    name,
    password: hashedPassword,
  })

  await newUser.save()

  revalidatePath('/')

  return {
    success: true,
    message: 'User has been created',
  }
}
