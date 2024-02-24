import { Invoice, InvoiceState, InvoiceType, Currency } from '@/models/Invoice'
import { ObjectId } from 'mongodb'

export const initialState: Invoice = {
  id: new ObjectId('65d53ac56150419fe78c5720'),
  date: '',
  authorizationNumber: '',
  dteNumber: '',
  currency: Currency.GTQ,
  iva: 0,
  issuer: {
    nit: '',
    name: '',
  },
  accountType: InvoiceType.PAYABLE,
  type: '',
  receiver: {
    name: '',
    nit: '',
  },
  serie: '',
  state: InvoiceState.VIGENTE,
  amount: 0,
  metadata: {
    petroleum: 0,
    accommodation: 0,
    tickets: 0,
    pressStamp: 0,
    firefighters: 0,
    municipalTax: 0,
    tobacco: 0,
    alcoholicBeverages: 0,
    cement: 0,
    nonAlcoholicBeverages: 0,
    portFee: 0,
  },
}
