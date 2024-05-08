import { model, models } from 'mongoose'
import userSchema, { IUser } from './User'
import invoiceSchema, { IInvoice } from './Invoice'
import companySchema, { ICompany } from './Company'
import accountSchema, { IAccount } from './Account'

export const InvoiceModel =
  models.Invoice || model<IInvoice>('Invoice', invoiceSchema)
export const UserModel = models.User || model<IUser>('User', userSchema)
export const CompanyModel =
  models.Company || model<ICompany>('Company', companySchema)
export const AccountModel =
  models.Account || model<IAccount>('Account', accountSchema)
