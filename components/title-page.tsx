type TitlePageProps = {
  title: string
}

export default function TitlePage({ title }: TitlePageProps) {
  return (
    <div className='flex w-full items-center justify-between'>
      <h1 className='text-2xl'>{title}</h1>
    </div>
  )
}
