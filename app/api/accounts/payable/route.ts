import { CommpanyModel, InvoiceModel } from '@/models'
import { Company } from '@/models/Company'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  console.log(body)

  body.companies.forEach(async (element: Company) => {
    const issuer = CommpanyModel.findOne({
      name: element.name,
    })

    if (issuer === null) {
      const newIssuer = await CommpanyModel.create(element)
      await newIssuer.save()
    }
  })

  // const url = `${process.env.MONGO_API as string}/action/insertMany`

  // const res = await fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //     'API-Key': process.env.MONGO_API_KEY!,
  //   },
  //   body: JSON.stringify({
  //     dataSource: 'Cluster0',
  //     database: 'erp',
  //     collection: 'invoices',
  //     documents: body,
  //   }),
  // })

  // const data = await res.json()
  // console.log('data', data)

  return Response.json([])
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
