import { getAllUsers } from '@/app/lib/actions/users'
import { DataTable } from '@/components/DataTable'
import Search from '@/components/search'
import TitlePage from '@/components/title-page'
import { Button } from '@/components/ui/button'
import { columns } from '@/components/users/columns'
import { Filter, SlidersHorizontal } from 'lucide-react'

export default async function Page() {
  const data = await getAllUsers()

  return (
    <>
      <TitlePage title='Users' />
      <div className='my-3 flex items-center gap-5'>
        <Search className='' />
        <Button>Add user</Button>
        <SlidersHorizontal />
      </div>
      <DataTable columns={columns} data={data} />
    </>
  )
}
