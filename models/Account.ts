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

export default accountSchema
