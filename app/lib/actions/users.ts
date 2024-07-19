'use server'

import { State, User, UserSchema } from '@/app/lib/definitions'
import { UserModel } from '@/models'
import { hash } from 'bcrypt'
import { flattenValidationErrors } from 'next-safe-action'
import { revalidatePath } from 'next/cache'
import { dbConnect } from '../mongodb'
import { actionClient } from '../safe-action'

export const createUser = actionClient
  .metadata({ actionName: 'create user' })
  .schema(UserSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput }) => {
    const { user, email, name, password } = parsedInput

    await dbConnect()

    const dbUser = await UserModel.findOne({ user, email })

    if (dbUser !== null) {
      return {
        success: false,
        message: 'User already exists',
      }
      // throw new Error('User already exists')
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
  })

export async function createUserOld(
  _prevState: State<User>,
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

export const getAllUsers = async () => {
  try {
    await dbConnect()
    return await UserModel.find()
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch users')
  }
}
