import { getAllUsers } from '@/app/lib/actions/users'
import { DataTable } from '@/components/DataTable'
import Search from '@/components/search'
import TitlePage from '@/components/title-page'
import { Button } from '@/components/ui/button'
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu'
import { columns } from '@/components/users/columns'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@radix-ui/react-dropdown-menu'
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  Link,
  LogOut,
  Mail,
  MessageSquare,
  MoreHorizontal,
  Plus,
  PlusCircle,
  Settings,
  SlidersHorizontal,
  User,
  UserPlus,
  Users,
} from 'lucide-react'

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
