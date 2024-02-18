import { CommpanyModel } from '@/models'
import { Company } from '@/models/Company'
import { Invoice } from '@/models/Invoice'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const newCompanies: Company[] = []
  const invoices: Invoice[] = []

  // console.log(body)

  body.companies.forEach(async (element: Company) => {
    const issuer = await CommpanyModel.findOne({
      nit: element.nit,
    })

    if (issuer === null) {
      const newIssuer = await CommpanyModel.create(element)
      await newIssuer.save()
      newCompanies.push(newIssuer)
    } else {
      newCompanies.push(issuer)
    }
  })

  body.data.map(
    (invoice) =>
      (data['issuer'] = newCompanies.find((company) => company.id)[0])
  )

  const url = `${process.env.MONGO_API as string}/action/insertMany`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'API-Key': process.env.MONGO_API_KEY!,
    },
    body: JSON.stringify({
      dataSource: 'Cluster0',
      database: 'erp',
      collection: 'invoices',
      documents: body.data,
    }),
  })
  const data = await res.json()
  console.log('data', data)

  return Response.json(data)
}

export async function GET() {
  const url = `${process.env.MONGO_API as string}/action/find`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'API-Key': process.env.MONGO_API_KEY!,
    },
  })

  const data = await res.json()

  console.log('data', data)

  return Response.json(data)
}
