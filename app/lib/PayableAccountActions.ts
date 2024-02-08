'use sever'

import { PayableAccountService } from './PayableAccountService'
import { Bill } from './definitions'

export const fetchPayableAccounts = async (pageNumber: number) => {
  const payableService = new PayableAccountService()
  return await payableService.searchBook({}, pageNumber, 10)
}

export const createPayableAccount = async (payableAccount: Bill) => {
  const payableService = new PayableAccountService()
  return await payableService.createPayableAccount(payableAccount)
}
