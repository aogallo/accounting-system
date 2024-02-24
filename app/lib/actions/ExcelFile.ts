'use server'

import { CommpanyModel, InvoiceModel } from '@/models'
import { AnyBulkWriteOperation } from 'mongodb'
import { dbConnect } from '../mongodb'
import { revalidatePath } from 'next/cache'

export const createOrUpdateCompanies = async (
  companies: Record<string, string>[]
) => {
  await dbConnect()

  const bulk: AnyBulkWriteOperation[] = []
  for (const company of companies) {
    const updateDoc = {
      updateOne: {
        filter: { nit: company.nit },
        update: company,
        upsert: true,
      },
    }

    bulk.push(updateDoc)
  }

  CommpanyModel.bulkWrite(bulk)
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((error) => console.error(error))
}

export async function uploadExcel({
  data,
  companies,
}: {
  data: Record<string, any>[]
  companies: Record<string, string>[]
}) {
  try {
    await dbConnect()
    // const dbCompanies = await CommpanyModel.find()
    //
    // if (dbCompanies.length === 0) {
    //   return [{ success: false, message: 'Companies failed to upload' }]
    // }

    const bulk: AnyBulkWriteOperation[] = []

    // for (const company of companies) {
    //   const updateDoc = {
    //     updateOne: {
    //       filter: { nit: company.nit },
    //       update: company,
    //       upsert: true,
    //     },
    //   }
    //
    //   bulk.push(updateDoc)
    // }
    //
    // CommpanyModel.bulkWrite(bulk)
    //   .then(async (result) => {
    //     console.log(JSON.stringify(result, null, 2))
    //   })
    //   .catch((error) => console.error(error))

    const dbCompanies = await CommpanyModel.find()

    if (dbCompanies.length === 0) {
      return [{ success: false, message: 'Companies failed to upload' }]
    }

    data.forEach((invoice: Record<string, any>) => {
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

      const updateDoc = {
        updateOne: {
          filter: { serie: invoice.serie, dteNumber: invoice.dteNumber },
          update: invoice,
          upsert: true,
        },
      }

      bulk.push(updateDoc)
    })

    InvoiceModel.bulkWrite(bulk)
      .then((result) => console.log(JSON.stringify(result, null, 2)))
      .catch((error) => console.error(error))

    revalidatePath('/invoices/payable')
    return [{ success: true, message: 'Upload file' }]
  } catch (error) {
    console.error('error', error)
    return [{ success: false, message: 'Failed to upload file' }]
  }
}
