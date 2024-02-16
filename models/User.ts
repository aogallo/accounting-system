import { prop } from '@typegoose/typegoose'
import { Timestamp } from 'mongodb'

export class User extends Timestamp {
  @prop({ unique: true })
  public user: string

  @prop({ unique: true })
  public email: string

  @prop()
  public password: string
}
