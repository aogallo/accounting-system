import { lusitana } from '@/app/ui/fonts'
import CreateUserForm from '@/app/ui/register/CreateUserForm'

export default function Page() {
  return (
    <>
      <h1 className={`${lusitana.className} text-2xl`}>Users</h1>

      <CreateUserForm />
    </>
  )
}
