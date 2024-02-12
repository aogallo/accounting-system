import { modelOptions, prop } from '@typegoose/typegoose'
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export enum Currency {
  GTQ = 'GTQ',
}

export enum AccountState {
  VIGENTE = 'VIGENTE',
  ANULADO = 'ANULADO',
}

export enum AccountType {
  PAYABLE = 'PAYABLE',
  RECEIVABLE = 'RECEIVABLE',
}

export class AccountMetadata {
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

export class Account extends TimeStamps {
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

  @prop()
  public issuerId: string //nit del emisor

  @prop()
  public issuerName: string //nombre del emisor

  @prop()
  public receiverId: string //nit del receptor

  @prop()
  public receiverName: string //nombre del receptor

  @prop({ enum: Currency })
  public currency: Currency

  @prop()
  public amount: number

  @prop({ enum: AccountState })
  public state: AccountState

  @prop()
  public iva: number

  @prop({ enum: AccountType })
  public accountType: AccountType

  @prop()
  public cancellationDate: string

  @prop({ allowMixed: 0 })
  public metadata: Partial<AccountMetadata>
}
