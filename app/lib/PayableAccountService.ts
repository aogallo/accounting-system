import { Repository } from './RepositoryService'
import { Bill, IPayableAccountService } from './definitions'

export class PayableAccountService implements IPayableAccountService {
  private repoistory: Repository<Bill>

  constructor() {
    this.repoistory = new Repository<Bill>('customers')
  }

  async createPayableAccount(
    payableAccount: Partial<Bill>
  ): Promise<{ data: Bill }> {
    return this.repoistory.insertOne(payableAccount)
  }

  async searchBook(
    filter: Partial<Bill>,
    page: number = 1,
    limit: number = 10
  ): Promise<{ data: Bill[]; totalCount: number }> {
    return this.repoistory.find(filter, page, limit)
  }
}
