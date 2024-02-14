import { AccountModel } from '@/models'
import { dbConnect } from './mongodb'
import { Account } from '@/models/Account'
import { AccountStateForm } from './definitions'

const ITEMS_PER_PAGE = 10

export async function fetchAccount(query: string, currentPage: number) {
  await dbConnect()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE

  try {
    return await AccountModel.find(
      {},
      {},
      { limit: ITEMS_PER_PAGE, skip: offset }
    )
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch payable accounts')
  }
}

export async function fetchAccountById(id: string): Promise<Account | null> {
  await dbConnect()
  try {
    return await AccountModel.findById(id)
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error(`Failed to fetch payable account ${id}`)
  }
}

export async function updateAccount(id: string, prevState: AccountStateForm, formData:FormData) {
  const validatedFields =
}
