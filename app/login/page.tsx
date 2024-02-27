import LoginForm from '../ui/login/login-form'

export default function Page() {
  return (
    <main>
      <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:mt-32'>
        <div className='flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36'>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
