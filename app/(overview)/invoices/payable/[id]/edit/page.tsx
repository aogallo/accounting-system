import { fetchAccountById } from '@/app/lib/actions'
import Breadcrumbs from '@/app/ui/Breadcrumbs'
import EditPayableForm from '@/app/ui/invoices/EditPayableForm'

type PageProps = {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  const id = params.id
  const account = await fetchAccountById(id)

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Payable Accounts', href: '/invoices/payable' },
          {
            label: 'Edit Account',
            href: `/invoices/payable/${id}/edit`,
            active: true,
          },
        ]}
      />
      {account ? (
        <EditPayableForm account={account} />
      ) : (
        <p className='text-red-100'>No existe la cuenta selecionada</p>
      )}
    </main>
  )
}
