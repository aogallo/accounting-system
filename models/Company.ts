import { prop } from '@typegoose/typegoose'
import { Timestamp } from 'mongodb'

export class Company extends Timestamp {
  @prop()
  public name: string

  @prop({ unique: true })
  public nit: string
}
