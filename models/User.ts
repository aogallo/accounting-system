import { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    user: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    roles: {
      type: [String],
    },
  },
  { timestamps: true }
)

export interface User {
  user: string
  email: string
  password: string
  roles?: string[]
}

export default userSchema
