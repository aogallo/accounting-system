import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const Header = () => {
  return (
    <div className='grid  justify-items-end'>
      <div className='flex justify-items-center gap-5'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
        <div className='w-52'>
          <h1>Allan</h1>
          <small>Admin</small>
        </div>
      </div>
    </div>
  )
}
