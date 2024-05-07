import { model, models } from 'mongoose'
import userSchema from './User'
import invoiceSchema from './Invoice'
import companySchema from './Company'
import accountSchema from './Account'

export const InvoiceModel = models.Invoice || model('Invoice', invoiceSchema)
export const UserModel = models.User || model('User', userSchema)
export const CompanyModel = models.Company || model('Company', companySchema)
export const Account = models.Account || model('Account', accountSchema)
