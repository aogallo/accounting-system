import { UserIcon } from "@heroicons/react/24/outline";

export default function CreateUserForm() {
  return (
    <form>
      <div className='rounded-md bg-gray-50 p-4 md:p-6'>
        <div className='mb-4'>
          <label htmlFor='user' className='mb-2 block text-sm font-medium'>
            User
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='user'
                name='user'
                type='text'
                placeholder='Enter a user'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
              />
            </div>
            <UserIcon
              className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
          </div>
        </div>
      </div>
    </form>
  )
}
