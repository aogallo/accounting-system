import { Account, AccountState, AccountType, Currency } from '@/models/Account'

export const initialState: Account = {
  date: '',
  authorizationNumber: '',
  dteNumber: '',
  currency: Currency.GTQ,
  iva: 0,
  issuerName: '',
  accountType: AccountType.PAYABLE,
  type: '',
  recipientName: '',
  receiverId: '',
  issuerId: '',
  serie: '',
  state: AccountState.VIGENTE,
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

export const headers = [
  'Fecha de emisión',
  'Número de Autorización',
  'Tipo de DTE ',
  'Serie',
  'Número del DTE',
  'NIT del emisor',
  'Nombre completo del emisor',
  'Código de establecimiento',
  'Nombre del establecimiento',
  'ID del receptor',
  'Nombre completo del receptor',
  'NIT del Certificador',
  'Nombre completo del Certificador',
  'Moneda',
  'Monto ',
  'Estado',
  'Marca de anulado',
  'IVA ',
  'Petróleo ',
  'Turismo Hospedaje ',
  'Turismo Pasajes ',
  'Timbre de Prensa ',
  'Bomberos ',
  'Tasa Municipal ',
  'Bebidas alcohólicas ',
  'Tabaco ',
  'Cemento ',
  'Bebidas no Alcohólicas ',
  'Tarifa Portuaria ',
]

const noPayableValues = [
  'NIT del Certificador',
  'Nombre completo del Certificador',
]

export const normalizeData = (
  data: Record<string, any>[],
  isPayable: boolean = false
): Record<string, any>[] => {
  return data.map((row) => {
    for (const [key, value] of Object.entries(row)) {
      if (key === 'Fecha de emisión') {
        row[key] = value.split('T')[0]
      }

      if (isPayable) {
        if (noPayableValues.includes(key)) {
          delete row[key]
        }
      }
    }

    return row
  })
}

export const normalizeDataToSave = (
  data: Record<string, any>[],
  isPayable = true
) => {
  const register: Account = {
    date: '',
    authorizationNumber: '',
    dteNumber: '',
    currency: Currency.GTQ,
    iva: 0,
    issuerName: '',
    accountType: AccountType.PAYABLE,
    type: '',
    recipientName: '',
    receiverId: '',
    issuerId: '',
    serie: '',
    state: AccountState.VIGENTE,
    amount: 0,
    metadata: {},
  }
  const registers: Account[] = []

  data.forEach((row) => {
    for (const [key, value] of Object.entries(row)) {
      if (key === 'Fecha de emisión' && value) register.date = value

      if (key === 'Número de Autorización' && value)
        register.authorizationNumber = value

      if (key.trim() === 'Tipo de DTE (nombre)' && value) register.type = value

      if (key === 'Serie' && value) register.serie = value

      if (key === 'Número del DTE' && value) register.dteNumber = value

      if (key === 'NIT del emisor' && value) register.issuerId = value //nit del emisor

      if (key === 'Nombre completo del emisor' && value)
        register.issuerName = value //nombre del emisor

      if (key === 'ID del receptor' && value) register.receiverId = value

      if (key === 'Nombre completo del receptor' && value)
        register.recipientName = value

      if (key === 'Moneda' && value) register.currency = value

      if (key === 'Monto (Gran Total)' && value) register.amount = value

      if (key.trim() === 'Estado' && value) {
        console.log('estado', value)

        register.state = value
      }

      if (key === 'IVA (monto de este impuesto)' && value) register.iva = value

      register.accountType = isPayable
        ? AccountType.PAYABLE
        : AccountType.RECEIVABLE

      if (key === 'Petróleo (monto de este impuesto)' && value)
        register.metadata.petroleum = value

      if (key === 'Turismo Hospedaje (monto de este impuesto)' && value)
        register.metadata.accommodation = value

      if (key === 'Turismo Pasajes (monto de este impuesto)' && value)
        register.metadata.tickets = value

      if (key === 'Timbre de Prensa (monto de este impuesto)' && value)
        register.metadata.pressStamp = value

      if (key === 'Bomberos (monto de este impuesto)' && value)
        register.metadata.firefighters = value

      if (key === 'Tasa Municipal (monto de este impuesto)' && value)
        register.metadata.municipalTax = value

      if (key === 'Bebidas alcohólicas (monto de este impuesto)' && value)
        register.metadata.alcoholicBeverages = value

      if (key === 'Tabaco (monto de este impuesto)' && value)
        register.metadata.tobacco = value

      if (key === 'Cemento (monto de este impuesto)' && value)
        register.metadata.cement = value

      if (key === 'Bebidas no Alcohólicas (monto de este impuesto)' && value)
        register.metadata.nonAlcoholicBeverages = value

      if (key === 'Tarifa Portuaria (monto de este impuesto)' && value)
        register.metadata.portFee = value
    }

    registers.push({ ...register })
    register.metadata = {}
  })

  return registers
}
