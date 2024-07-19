import TitlePage from '@/components/title-page'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Page() {
  return (
    <>
      <TitlePage title='Receivable Invoices' />

      <div className='grid grid-cols-3 gap-5'>
        <Card>
          <CardHeader>
            {' '}
            <CardTitle>Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <h1>+2222.99</h1>
            <CardDescription>+180.1% from last month</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            {' '}
            <CardTitle>Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <h1>+2222.99</h1>
            <CardDescription>+180.1% from last month</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            {' '}
            <CardTitle>Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <h1>+2222.99</h1>
            <CardDescription>+180.1% from last month</CardDescription>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
