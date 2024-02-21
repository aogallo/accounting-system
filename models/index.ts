import { addModelToTypegoose, buildSchema } from '@typegoose/typegoose'
import { model, models } from 'mongoose'
import { User } from './User'
import { Company } from './Company'
import { Invoice } from './Invoice'

// Invoice ModelInvoice
const invoiceSchema = buildSchema(Invoice)
const invoiceModel = models.Invoice || model('Invoice', invoiceSchema)
export const InvoiceModel = addModelToTypegoose(invoiceModel, Invoice)

// User Model
const userSchema = buildSchema(User)
const userModel = models.User || model('User', userSchema)
export const UserModel = addModelToTypegoose(userModel, User)

// Company Model
const companySchema = buildSchema(Company)
const companyModel = models.Company || model('Company', companySchema)
export const CommpanyModel = addModelToTypegoose(companyModel, Company)
