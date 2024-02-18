import { prop } from '@typegoose/typegoose'
import { ObjectId, Timestamp } from 'mongodb'

export class Company extends Timestamp {
  @prop()
  public id: ObjectId

  @prop()
  public name: string

  @prop({ unique: true })
  public nit: string
}
