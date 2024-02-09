import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
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
      collection: 'accounts',
      documents: body,
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
