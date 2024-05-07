export type TableProps = {
  query: string
  currentPage: number
  accountType?: string
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
