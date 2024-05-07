import clsx from 'clsx'
import { PropsWithChildren } from 'react'

type BaseFormProps = {
  className?: string
} & PropsWithChildren

const BaseForm = ({ children, className = '' }: BaseFormProps) => {
  return (
    <form>
      <div className={clsx('rounded-md bg-gray-50 p-4 md:p-6', className)}>
        {children}
      </div>
    </form>
  )
}

export default BaseForm
