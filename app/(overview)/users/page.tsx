import { getAllUsers } from '@/app/lib/actions/users'
import { DataTable } from '@/app/ui/DataTable'
import Search from '@/app/ui/search'
import TitlePage from '@/components/title-page'
import { columns } from '@/components/users/columns'

export default async function Page() {
  const data = await getAllUsers()

  return (
    <>
      <TitlePage title='Users' />
      <Search />
      <DataTable columns={columns} data={data} />
    </>
  )
}
