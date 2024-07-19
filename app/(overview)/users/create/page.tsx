import Breadcrumbs from '@/components/Breadcrumbs'
import CreateUserForm from '@/components/users/CreateUserForm'

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
