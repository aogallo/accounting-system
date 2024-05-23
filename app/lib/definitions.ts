import userSchema from '@/models/User'
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

export const InvoiceSchema = z.object({
  date: z.string().datetime(),

  authorizationNumber: z.string(),

  type: z.enum(['payable', 'receivable']),

  serie: z.string(),

  dteNumber: z.string(),

  customer: z.object({
    id: z.string(),
    name: z.string(),
  }),

  company: z.object({
    id: z.string(),
    name: z.string(),
  }),

  currency: z.enum(['GTQ', 'USD']),

  amount: z.number(),

  account: z.object({
    id: z.string(),
    account: z.string(),
  }),

  state: z.enum(['Vigente', 'Anulado']),

  iva: z.number(),

  avoidDate: z.string().datetime(),

  metadata: z.record(z.string(), z.number()).optional(),
})

export type Invoice = z.infer<typeof InvoiceSchema>

export const UserSchema = z.object({
  user: z.string().min(3, 'User must contain at least 5 character(s)'),
  name: z.string().min(3, 'Name must contain at least 3 character(s)'),
  email: z.string().email(),
  password: z.string().min(5, 'Password must contain at least 5 character(s)'),
})

export type User = z.infer<typeof UserSchema>
