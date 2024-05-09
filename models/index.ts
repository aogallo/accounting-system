import { model, models } from 'mongoose'
import userSchema, { IUser } from './User'
import invoiceSchema, { IInvoice } from './Invoice'
import companySchema from './Company'
import accountSchema from './Account'
import { Account, Company } from '@/app/lib/definitions'

export const InvoiceModel =
  models.Invoice || model<IInvoice>('Invoice', invoiceSchema)
export const UserModel = models.User || model<IUser>('User', userSchema)
export const CompanyModel =
  models.Company || model<Company>('Company', companySchema)
export const AccountModel =
  models.Account || model<Account>('Account', accountSchema)
