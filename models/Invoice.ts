import { Schema, model, models } from 'mongoose'

export interface Invoice {
  date: string

  authorizationNumber: string

  type: string

  serie: string

  dteNumber: string

  issuer: { nit: string; name: string }

  receiver: { nit: string; name: string }

  currency: string

  amount: number

  state: string

  iva: number

  accountType: string

  avoidDate?: string

  metadata: {
    petroleum?: number

    accommodation?: number

    tickets?: number

    pressStamp?: number
    firefighters?: number

    municipalTax?: number

    alcoholicBeverages?: number

    tobacco?: number

    cement?: number

    nonAlcoholicBeverages?: number

    portFee?: number
  }
}

const invoiceSchema = new Schema(
  {
    date: String,

    authorizationNumber: String,

    type: String,

    serie: String,

    dteNumber: String,

    issuer: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
    },

    receiver: { type: Schema.Types.ObjectId, ref: 'Company' }, //nit del receptor

    currency: { type: String, enum: ['GTQ', 'USD'], default: 'GTQ' },

    amount: Number,

    state: {
      type: String,
      enum: ['Vigente', 'Anulado'],
      default: 'Vigente',
    },

    iva: Number,

    accountType: {
      type: String,
      enum: ['PAYABLE', 'RECEIVABLE'],
      default: 'PAYABLE',
    },

    avoidDate: {
      type: String,
    },

    metadata: {
      petroleum: Number,

      accommodation: Number,

      tickets: Number,

      pressStamp: Number,

      firefighters: Number,

      municipalTax: Number,

      alcoholicBeverages: Number,

      tobacco: Number,

      cement: Number,

      nonAlcoholicBeverages: Number,

      portFee: Number,
    },
  },
  {
    timestamps: true,
  }
)

export enum InvoiceState {
  VIGENTE = 'Vigente',
  ANULADO = 'Anulado',
}
export enum InvoiceType {
  PAYABLE = 'PAYABLE',
  RECEIVABLE = 'RECEIVABLE',
}
export enum Currency {
  GTQ = 'GTQ',
  USD = 'USD',
}
export default invoiceSchema
