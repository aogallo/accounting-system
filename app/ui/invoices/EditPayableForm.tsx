import { Invoice } from '@/models/Invoice'
import Input from '../Input'
import { formatCurrency } from '@/app/lib/utils'

export default async function EditPayableForm({
  account,
}: {
  account: Invoice
}) {
  return (
    <form>
      <div className='rounded-md bg-gray-50 p-4 md:p-6'>
        {/* DTE Number */}
        <Input
          type='text'
          defaultValue={account.dteNumber}
          name='dteNumber'
          id='dteNumber'
          label='DTE Number'
          icon='bars-3'
        />
        {/* Serie */}
        <Input
          type='text'
          defaultValue={account.serie}
          name='serie'
          id='serie'
          label='Serie'
          icon='document'
        />
        {/* Amount */}
        <Input
          id='amount'
          name='amount'
          type='text'
          step='0.01'
          defaultValue={formatCurrency(account.amount, false)}
          placeholder='Enter USD amount'
          label='Amount'
          icon='currency'
        />
        {/* Account */}
        <Input
          id='account'
          name='account'
          type='text'
          step='0.01'
          defaultValue={account.account}
          placeholder='Enter USD account'
          label='Account'
          icon='document-glass'
        />
      </div>
    </form>
  )
}
