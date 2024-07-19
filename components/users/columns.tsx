'use client'

import { User } from '@/app/lib/definitions'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../ui/button'
import { ArrowUpDown } from 'lucide-react'

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'user',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          User
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
]
