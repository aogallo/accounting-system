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
  'ID del receptor',
  'Nombre completo del receptor',
  'NIT del Certificador',
  'Nombre completo del Certificador',
]

export const normalizeData = (
  data: Record<string, any>[],
  isPayable: boolean = false
) => {
  data.map((row) => {
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
  })
  // console.log(newData)
  return data
}

type Bill = {
  date: string
  authorizationNumber: string
  dteType: string
  serie: string
  dteNumber: string
  nit: string
  state: string
  metadata: {
    currency: string
    amount: string
    iva: string
    petroleum?: number
    tourismAccommodation?: number
    tourismTickets?: number
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

export const normalizeDataToSave = (data: Record<string, any>[]) => {
  let register: Bill
  const registers: Bill[] = []

  data.map((row) => {
    for (const [key, value] of Object.entries(row)) {
      if (key === 'Fecha de emisión') {
        register.date = value
      }
    }

    registers.push(register)
  })

  //   create this schema
  //   date
  //   authorizationNumber
  //   dteType
  //   serie
  //   dteNumber
  //   nit
  //   state
  //   metadata {
  //       currency
  //       amount
  // iva
  // 'Petroleum ',
  //    'Tourism Accommodation',
  //    'Tourism Tickets',
  //    'Press Stamp',
  //    'Firefighters ',
  //    'Municipal tax ',
  //    'Alcoholic beverages ',
  //    'Tobacco',
  //    'Cement',
  //    'Non-alcoholic beverages ',
  //    'Port Fee',
  //
  //   }
}
