import { Document, Schema } from 'mongoose'

const companySchema = new Schema(
  {
    name: {
      type: String,
    },
    nit: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

export interface ICompany extends Document {
  name: string
  nit: string
}

export default companySchema
