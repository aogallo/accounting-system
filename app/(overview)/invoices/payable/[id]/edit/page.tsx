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

  const invoice = await fetchAccountById(id)

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Payable Invoice', href: '/invoices/payable' },
          {
            href: `/invoices/payable/${id}/edit`,
            label: 'Edit Account',
            active: true,
          },
        ]}
      />
      <EditPayableForm invoice={invoice} />
    </main>
  )
}
