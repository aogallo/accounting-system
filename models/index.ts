import { addModelToTypegoose, buildSchema } from '@typegoose/typegoose'
import { Account } from './Account'
import { model, models } from 'mongoose'
import { Issuer } from './Issuer'
import { User } from './User'

// Account Model
const accountSchema = buildSchema(Account)
const accountModel = models.Account || model('Account', accountSchema)
export const AccountModel = addModelToTypegoose(accountModel, Account)

// Issuer Model (emisor)
const issuerSchema = buildSchema(Issuer)
const issuerModel = models.Issuer || model('Issuer', issuerSchema)
export const IssuerModel = addModelToTypegoose(issuerModel, Issuer)

// User Model
const userSchema = buildSchema(User)
const userModel = models.User || model('User', userSchema)
export const UserModel = addModelToTypegoose(userModel, User)
