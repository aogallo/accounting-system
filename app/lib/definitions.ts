export type Bill = {
  date: string
  authorizationNumber: string
  dteType: string
  serie: string
  dteNumber: string
  nit: string
  state: string
  metadata: {
    currency: string
    amount: number
    iva: number
    petroleum?: number
    tourismAccommodation?: number
    tourismTickets?: number
    pressStamp?: number
    firefighters?: number
    municipalTax?: number
    alcoholicBeverages?: number
    tobacco?: number
    cement?: number
    nonAlcoholicBeverages?: number
    portFee?: number
  }
}

export type BillFormData = {
  date: string[]
  authorizationNumber: string[]
  dteType: string[]
  serie: string[]
  dteNumber: string[]
  nit: string[]
  state: string[]
  metadata: {
    currency: string[]
    amount: number[]
    iva: number[]
    petroleum?: number[]
    tourismAccommodation?: number[]
    tourismTickets?: number[]
    pressStamp?: number[]
    firefighters?: number[]
    municipalTax?: number[]
    alcoholicBeverages?: number[]
    tobacco?: number[]
    cement?: number[]
    nonAlcoholicBeverages?: number[]
    portFee?: number[]
  }
}

export interface IRepository<T> {
  find(
    filter: Partial<T>,
    page: number,
    limit: number,
    projection?: Partial<Record<keyof T, 1 | 0>>
  ): Promise<{ data: T[]; totalCount: number }>

  insertOne(data: Partial<T>): Promise<{ data: T }>
}

export interface IPayableAccountService {
  searchBook(
    filter: Partial<Bill>
  ): Promise<{ data: Bill[]; totalCount: number }>

  createPayableAccount(payableAccount: Partial<Bill>): Promise<{ data: Bill }>
}
