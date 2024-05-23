import { connect, connection } from 'mongoose'

const conn = {
  isConnected: false,
}

export async function dbConnect() {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing connection')
  }

  if (conn.isConnected) {
    return
  }

  const db = await connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/nextjs',
    {
      retryWrites: false,
      dbName: 'erp',
    }
  )
  conn.isConnected = db.connections[0].readyState === 1
}

connection.on('connected', () => console.info('Mongodb connected to db'))

connection.on('error', (err) => console.error('Mongodb Errro:', err.message))
