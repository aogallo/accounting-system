import Breadcrumbs from '@/app/ui/Breadcrumbs'
import CreateUserForm from '@/app/ui/users/CreateUserForm'

export default function Page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/users' },
          {
            label: 'Create User',
            href: '/users/create',
            active: true,
          },
        ]}
      />

      <CreateUserForm />
    </>
  )
}
