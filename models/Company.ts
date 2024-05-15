import { Schema } from 'mongoose'

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
    toJSON: {
      transform: (_document, record) => {
        record.id = record._id as string
        delete record._id
        delete record.__v
        return record
      },
    },
  }
)

export default companySchema
