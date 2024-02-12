import { addModelToTypegoose, buildSchema } from '@typegoose/typegoose'
import { Account } from './Account'
import mongoose, { model, models } from 'mongoose'

const schema = buildSchema(Account)
const Model = models.Account || model('Account', schema)
//
export const AccountModel = addModelToTypegoose(Model, Account)
