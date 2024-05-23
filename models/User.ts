import { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    user: String,
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    roles: {
      type: [String],
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

export default userSchema
