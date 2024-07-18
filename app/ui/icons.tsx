import {
  AtSymbolIcon,
  Bars3Icon,
  ClipboardDocumentIcon,
  CurrencyDollarIcon,
  DocumentMagnifyingGlassIcon,
  LockClosedIcon,
  PencilIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

const classNameIcon =
  'pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900'

export const iconsAvailable = {
  'user-icon': <UserIcon className={classNameIcon} />,
  'at-symbol': <AtSymbolIcon className={classNameIcon} />,
  'lock-closed': <LockClosedIcon className={classNameIcon} />,
  currency: <CurrencyDollarIcon className={classNameIcon} />,
  'bars-3': <Bars3Icon className={classNameIcon} />,
  document: <ClipboardDocumentIcon className={classNameIcon} />,
  'document-glass': <DocumentMagnifyingGlassIcon className={classNameIcon} />,
  'pencil': <PencilIcon className={classNameIcon} />
}
