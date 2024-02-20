'use server'

import { CommpanyModel, InvoiceModel } from '@/models'
import { AnyBulkWriteOperation, } from 'mongodb'
import { dbConnect } from '../mongodb'

export const createOrUpdateCompanies = async (
  companies: Record<string, string>[]
) => {
      await dbConnect()

  const bulk: AnyBulkWriteOperation[] = []
  companies.forEach(async (company) => {
    const updateDoc = {
      updateOne: {
        filter: { nit: company.nit },
        update: company,
        upsert: true,
      },
    }

    bulk.push(updateDoc)
  })

  CommpanyModel.bulkWrite(bulk)
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((error) => console.error(error))
}

export async function uploadExcel(data: Record<string, any>[]) {
  try {
    await dbConnect()
    const dbCompanies = await CommpanyModel.find()

    if (dbCompanies.length === 0) {
      return [{ success: false, message: 'Companies failed to upload' }]
    }

    const invoices = data.map((invoice: Record<string, any>) => {
      let company = dbCompanies.find(
        (company) => company.nit === invoice.issuer
      )

      if (company) {
        invoice['issuer'] = company.id
      }

      company = dbCompanies.find((comp) => comp.nit === invoice.receiver)

      if (company) {
        invoice['receiver'] = company.id
      }

      return invoice
    })

    console.info('invoices', invoices)

    await InvoiceModel.insertMany(invoices)

    return [{ success: true, message: 'Upload file' }]
  } catch (error) {
    console.error('error', error)
    return [{ success: false, message: 'Failed to upload file' }]
  }
}
