import { getModelForClass } from '@typegoose/typegoose'
import { Account } from './Account'

export const AccountModel = getModelForClass(Account)
