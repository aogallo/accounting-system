import { InvoiceType } from '@/app/lib/definitions'

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
  const companies: { nit: string; name: string }[] = []

  const newData = data.map((rowT) => {
    try {
      const row = { ...rowT }

      // console.log('original row', rowT)
      //
      row['metadata'] = {}

      row['date'] = row['Fecha de emisión']

      row['accountType'] = isPayable
        ? InvoiceType.PAYABLE
        : InvoiceType.RECEIVABLE

      row['authorizationNumber'] = row['Número de Autorización']

      row['type'] = row['Tipo de DTE (nombre)']

      row['serie'] = row['Serie']

      row['dteNumber'] = row['Número del DTE']

      row['issuer'] = `${row['NIT del emisor']}`

      companies.findIndex((e) => e.nit === row['NIT del emisor']) === -1
        ? companies.push({
            nit: `${row['NIT del emisor']}`,
            name: row['Nombre completo del emisor'],
          })
        : console.log(`emisor already exists}`)
      // row['issuerName'] = row['Nombre completo del emisor']
      delete row['Nombre completo del emisor']

      row['receiver'] = `${row['ID del receptor']}`
      // row['receiverName'] = row['Nombre completo del receptor']

      companies.findIndex((e) => e.nit === row['ID del receptor']) === -1
        ? companies.push({
            // TODO: Replace with tuples type

            nit: `${row['ID del receptor']}`,
            name: row['Nombre completo del receptor'],
          })
        : console.log(`receptor already exists}`)

      delete row['ID del receptor']
      delete row['Nombre completo del receptor']

      row['currency'] = row['Moneda']
      delete row['Moneda']

      row['amount'] = row['Monto (Gran Total)']
      delete row['Monto (Gran Total)']

      row['state'] = row['Estado']
      delete row['Estado']

      row['iva'] = row['IVA (monto de este impuesto)']
      delete row['IVA (monto de este impuesto)']

      if (row['Petróleo (monto de este impuesto)'] > 0) {
        row['metadata']['petroleum'] = row['Petróleo (monto de este impuesto)']
      }

      if (row['Turismo Hospedaje (monto de este impuesto)'] > 0) {
        row['metadata']['accommodation'] =
          row['Turismo Hospedaje (monto de este impuesto)'] > 0
      }
      if (row['Turismo Pasajes (monto de este impuesto)'] > 0) {
        row['metadata']['accommodation'] =
          row['Turismo Pasajes (monto de este impuesto)']
      }

      if (row['Timbre de Prensa (monto de este impuesto)'] > 0) {
        row['metadata']['pressStamp'] =
          row['Timbre de Prensa (monto de este impuesto)']
      }

      if (row['Bomberos (monto de este impuesto)'] > 0) {
        row['metadata']['firefighters'] =
          row['Bomberos (monto de este impuesto)']
      }

      if (row['Tasa Municipal (monto de este impuesto)'] > 0) {
        row['metadata']['municipalTax'] =
          row['Tasa Municipal (monto de este impuesto)']
      }

      if (row['Bebidas alcohólicas (monto de este impuesto)'] > 0) {
        row['metadata']['alcoholicBeverages'] =
          row['Bebidas alcohólicas (monto de este impuesto)']
      }
      delete row['Código de establecimiento']

      if (row['Tabaco (monto de este impuesto)'] > 0) {
        row['metadata']['tobacco'] = row['Tabaco (monto de este impuesto)']
      }

      if (row['Cemento (monto de este impuesto)'] > 0) {
        row['metadata']['cement'] = row['Cemento (monto de este impuesto)']
      }

      if (row['Bebidas no Alcohólicas (monto de este impuesto)'] > 0) {
        row['metadata']['onAlcoholicBeverages'] =
          row['Bebidas no Alcohólicas (monto de este impuesto)']
      }

      if (row['Tarifa Portuaria (monto de este impuesto)'] > 0) {
        row['metadata']['fee'] =
          row['Tarifa Portuaria (monto de este impuesto)']
      }

      row['voidDate'] = row['Fecha de anulación']

      delete row['Fecha de emisión']
      delete row['Número de Autorización']
      delete row['Tipo de DTE (nombre)']
      delete row['Serie']
      delete row['Número del DTE']
      delete row['NIT del emisor']

      delete row['NIT del Certificador']
      delete row['Nombre completo del Certificador']
      delete row['Petróleo (monto de este impuesto)']
      delete row['Código de establecimiento']
      delete row['Bebidas alcohólicas (monto de este impuesto']
      delete row['Cemento (monto de este impuesto)']
      delete row['Tabaco (monto de este impuesto)']
      delete row['Bebidas alcohólicas ']
      delete row['Tasa Municipal (monto de este impuesto)']
      delete row['Bomberos (monto de este impuesto)']
      delete row['Turismo Pasajes (monto de este impuesto)']
      delete row['Bebidas no Alcohólicas (monto de este impuesto)']
      delete row['Timbre de Prensa (monto de este impuesto)']
      delete row['Tarifa Portuaria (monto de este impuesto)']
      delete row['Marca de anulado']
      delete row['Turismo Hospedaje (monto de este impuesto)']
      delete row['Nombre del establecimiento']
      delete row['Bebidas alcohólicas (monto de este impuesto)']
      delete row['Fecha de anulación']

      // console.log('row', row)
      // companies.length = 0

      return row
    } catch (error) {
      console.error(error)
      return {}
    }
  })

  return [newData, companies]
}
