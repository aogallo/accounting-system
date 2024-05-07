import { Schema } from 'mongoose'

const accountSchema = new Schema(
  {
    account: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export interface Account {
  name: string
  account: string
}

export default accountSchema
