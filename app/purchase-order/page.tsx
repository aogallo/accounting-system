import { lusitana } from '../ui/fonts'
import CreatePurchaseOrder from '../ui/purchase-order/CreatePurchaseOrder'

export default function Page() {
  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`${lusitana.className} text-2xl`}>
          Create Purchase Order
        </h1>
      </div>

      <CreatePurchaseOrder />
    </div>
  )
}
