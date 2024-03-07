'use server'

import { dbConnect } from './mongodb'
import { Invoice } from '@/models/Invoice'
import { InvoiceModel } from '@/models'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'

const ITEMS_PER_PAGE = 10

export const authenticate = async (
  prevState: string | undefined,
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

export async function fetchInvoices(query: string, currentPage: number) {
  await dbConnect()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE

  try {
    const data = await InvoiceModel.find(
      { accountType: 'PAYABLE' },
      {},
      {
        sort: {
          date: -1,
        },
        limit: ITEMS_PER_PAGE,
        skip: offset,
      }
    ).populate(['issuer', 'receiver'])

    return data
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch payable accounts')
  }
}

export async function fetchAccountById(id: string): Promise<Invoice | null> {
  await dbConnect()
  try {
    return await InvoiceModel.findById(id)
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error(`Failed to fetch payable account ${id}`)
  }
}

// export async function updateAccount(
//   id: string,
//   prevState: AccountStateForm,
//   formData: FormData
// ) {}
