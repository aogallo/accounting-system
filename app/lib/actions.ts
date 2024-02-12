import { AccountModel } from '@/models'
import { dbConnect } from './mongodb'

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
