import Input from '../Input'
import { Button } from '../Button'
import { Invoice } from '@/app/lib/types/Invoice'
import { updateInvoiceById } from '@/app/lib/actions/invoice-action'

type PageProps = {
  invoice: Invoice
}

export default function EditPayableForm({ invoice }: PageProps) {
  return (
    <form action={updateInvoiceById}>
      <Input name='id' id='id' defaultValue={invoice.id} hidden readOnly />
      <div className='rounded-md bg-gray-50 p-4 md:p-6'>
        {/* DTE Number */}
        <Input
          type='text'
          defaultValue={invoice.dteNumber}
          name='dteNumber'
          id='dteNumber'
          label='DTE Number'
          icon='bars-3'
          readOnly
        />
        {/* Serie */}
        <Input
          type='text'
          defaultValue={invoice.serie}
          name='serie'
          id='serie'
          label='Serie'
          icon='document'
        />
        {/* Amount */}
        <Input
          id='amount'
          defaultValue={invoice.amount}
          name='amount'
          type='text'
          step='0.01'
          placeholder='Enter USD amount'
          label='Amount'
          icon='currency'
        />
        {/* Account */}
        <Input
          id='account'
          defaultValue={invoice.account}
          name='account'
          type='text'
          placeholder='Enter an account'
          label='Account'
          icon='document-glass'
        />
        <Button type='submit'>Save</Button>
      </div>
    </form>
  )
}
