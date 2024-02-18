import { dbConnect } from './mongodb'
import { Invoice } from '@/models/Invoice'
import { InvoiceModel } from '@/models'

const ITEMS_PER_PAGE = 10

export async function fetchAccount(query: string, currentPage: number) {
  await dbConnect()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE

  try {
    return await InvoiceModel.find(
      {},
      {},
      { limit: ITEMS_PER_PAGE, skip: offset }
    ).populate('company')
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
