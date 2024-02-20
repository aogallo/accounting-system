import { prop, modelOptions, index } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true, versionKey: false } })
@index({nit: 1}, {unique:true})
export class Company {
  @prop()
  public name: string

  @prop({required:true, unique: true })
  public nit: string
}
