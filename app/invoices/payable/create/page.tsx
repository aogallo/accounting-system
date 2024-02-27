import Breadcrumbs from '@/app/ui/Breadcrumbs'

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Payable Accounts', href: '/invoices/payable' },
          {
            label: 'Create Payable Account',
            href: '/invoices/payable/create',
            active: true,
          },
        ]}
      />
      {/* <Form customers={customers} /> */}
    </main>
  )
}
