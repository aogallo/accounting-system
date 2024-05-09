import { z } from 'zod'

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

export type ErrorState<T> = Partial<Record<keyof T, string[] | undefined>>

export type State<T> = {
  success: boolean
  errors?: ErrorState<T>
  message?: string
}

export const AccountSchema = z.object({
  name: z.string(),
  account: z.string(),
})

export type Account = z.infer<typeof AccountSchema>

export const CompanySchema = z.object({
  name: z.string(),
  nit: z.string(),
})

export type Company = z.infer<typeof CompanySchema>
