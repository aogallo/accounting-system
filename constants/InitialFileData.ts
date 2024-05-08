import { IInvoice, InvoiceState, InvoiceType, Currency } from '@/models/Invoice'

export const initialState: IInvoice = {
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
