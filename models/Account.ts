import { Document, Schema } from 'mongoose'

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

export interface IAccount extends Document {
  name: string
  account: string
}

export default accountSchema
