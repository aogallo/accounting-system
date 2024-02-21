import { modelOptions, prop } from '@typegoose/typegoose'
import { Company } from './Company'
import { ObjectId } from 'mongodb'

export enum Currency {
  GTQ = 'GTQ',
}

export enum InvoiceState {
  VIGENTE = 'Vigente',
  ANULADO = 'Anulado',
}

export enum InvoiceType {
  PAYABLE = 'PAYABLE',
  RECEIVABLE = 'RECEIVABLE',
}

export class InvoiceMetadata {
  @prop()
  public petroleum: number

  @prop()
  public accommodation: number

  @prop()
  public tickets: number

  @prop()
  public pressStamp: number

  @prop()
  public firefighters: number

  @prop()
  public municipalTax: number

  @prop()
  public alcoholicBeverages: number

  @prop()
  public tobacco: number

  @prop()
  public cement: number

  @prop()
  public nonAlcoholicBeverages: number

  @prop()
  public portFee: number
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
    versionKey: false,
  },
})
export class Invoice {
  @prop()
  public id: ObjectId

  @prop()
  public date: string

  @prop()
  public authorizationNumber: string

  @prop()
  public type: string

  @prop()
  public serie: string

  @prop()
  public dteNumber: string

  @prop({ ref: () => Company })
  public issuer: Company

  @prop({ ref: () => Company })
  public receiver: Company //nit del receptor

  @prop({ enum: Currency })
  public currency: Currency

  @prop()
  public amount: number

  @prop({ enum: InvoiceState })
  public state: InvoiceState

  @prop()
  public iva: number

  @prop({ enum: InvoiceType })
  public accountType: InvoiceType

  @prop()
  public cancellationDate: string

  @prop({ type: () => InvoiceMetadata })
  public metadata: Partial<InvoiceMetadata>
}
