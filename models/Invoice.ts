import { Schema } from 'mongoose'

const invoiceSchema = new Schema(
  {
    /**
     * Date: Date when the invoce has been created
     */
    date: Date,
    /**
     * Authorization Number: Number from the authorization partner
     */
    authorizationNumber: String,
    /**
     * Type: Type of the invoice can be PAYABLE and RECEIVABLE
     */
    type: {
      type: String,
      enum: ['payable', 'receivable'],
      default: 'payable',
    },
    /**
     * Serie
     */
    serie: String,
    /**
     * DTE NUmber: Invocie Number
     */
    dteNumber: String,
    /**
     *  Customer: Entity who receives the invoice
     */
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
    },
    /**
     *  Company: Entity who creates or give the invoice
     */
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    /**
     * Currency
     */
    currency: { type: String, enum: ['GTQ', 'USD'], default: 'GTQ' },
    /**
     *  Amount
     */
    amount: Number,
    /**
     *  Account: Number of account
     */
    account: {
      type: Schema.Types.ObjectId,
      ref: 'Account',
    },
    /**
     *  Invoice State
     */
    state: {
      type: String,
      enum: ['Vigente', 'Anulado'],
      default: 'Vigente',
    },
    /**
     *  Iva
     */
    iva: Number,
    /**
     *  Avoid date
     */
    avoidDate: {
      type: String,
    },
    /**
     *  Metadata: All extra information for the Invoice i.e. every taxes
     */
    metadata: {
      type: Map,
      of: Number,
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

export default invoiceSchema
