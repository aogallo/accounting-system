import { model, models } from 'mongoose'
import userSchema from './User'
import invoiceSchema from './Invoice'
import companySchema from './Company'

export const InvoiceModel = models.Invoice || model('Invoice', invoiceSchema)
export const UserModel = models.Invoice || model('User', userSchema)
export const CompanyModel = models.Company || model('Company', companySchema)
