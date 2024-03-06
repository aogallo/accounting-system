export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'es-GT'
) => {
  const date = new Date(dateStr)
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }
  const formatter = new Intl.DateTimeFormat(locale, options)
  return formatter.format(date)
}

export const formatString = (value: string, numberOfCharacter: number = 10) => {
  return value.substring(0, numberOfCharacter - 3).concat('...')
}

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString('es-GT', {
    style: 'currency',
    currency: 'GTQ',
  })
}
