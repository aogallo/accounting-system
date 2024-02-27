export type TableProps = {
  query: string
  currentPage: number
}

export enum Currency {
  GTQ = 'GTQ',
}

export enum InvoiceState {
  VIGENTE = 'VIGENTE',
  ANULADO = 'ANULADO',
}

export enum InvoiceType {
  PAYABLE = 'PAYABLE',
  RECEIVABLE = 'RECEIVABLE',
}
