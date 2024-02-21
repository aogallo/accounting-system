import { prop, modelOptions } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true } })
export class User {
  @prop({ unique: true })
  public user: string

  @prop({ unique: true })
  public email: string

  @prop()
  public password: string
}
