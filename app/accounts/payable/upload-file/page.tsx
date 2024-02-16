'use client'

import { ChangeEvent, useState, useEffect } from 'react'
import * as XLSX from 'xlsx'
import { normalizeData, normalizeDataToSave } from './normalize-data'
import { Button } from '@/app/ui/Button'
import { payableAccountHeader } from '@/constants/PayableAccountHeader'

export default function Page() {
  const [file, setFile] = useState<string | ArrayBuffer | null | undefined>(
    undefined
  )
  const [fileData, setFileData] = useState<Record<string, any>[]>([])
  const fileTypes = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/csv',
  ]
  const [isLoading, setIsLoading] = useState(false)

  type DataSave = {
    data: Record<string, any>[]
    companies: Record<string, string>[]
  }

  const [dataToSave, setDataToSave] = useState<DataSave>()
  // const [dataToSave, setDataToSave] = useState<Record<string, any>[]>()

  const handleChange = (file: ChangeEvent<HTMLInputElement>) => {
    const newFile = file.target.files?.[0]
    let fileReader: FileReader
    if (newFile && fileTypes.includes(newFile.type)) {
      if (newFile) {
        fileReader = new FileReader()
        fileReader.readAsArrayBuffer(newFile)
        fileReader.onload = (e) => {
          setFile(e.target?.result)
        }
      }
    }
  }

  useEffect(() => {
    if (file) {
      const workbook = XLSX.read(file, { type: 'buffer' })
      const worksheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[worksheetName]
      const sheetData = XLSX.utils.sheet_to_json<Record<string, any>>(worksheet)
      if (sheetData) {
        const [data, companies] = normalizeDataToSave(sheetData, true)
        setDataToSave({ data, companies })
        setFileData(normalizeData(sheetData, true))
      }
    }
  }, [file])

  const handleCreatePayableAccounts = async () => {
    try {
      setIsLoading(true)
      await fetch('/api/accounts/payable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      })
    } catch (error) {
      console.log('error', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section>
      <section className='flex '>
        <input
          className=' text-sm text-slate-500
      file:mr-4 file:rounded-full file:border-0
      file:bg-blue-50 file:px-4
      file:py-2 file:text-sm
      file:font-semibold file:text-blue-700
      hover:file:bg-blue-100'
          type='file'
          onChange={handleChange}
        />
        <Button disabled={isLoading} onClick={handleCreatePayableAccounts}>
          {isLoading ? (
            <>
              <svg
                aria-hidden='true'
                className='h-5 w-5 animate-spin fill-red-50 text-white dark:text-gray-400'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
              <span className='ml-1'>Procesando</span>
            </>
          ) : (
            <span> Cargar archivo</span>
          )}
        </Button>
      </section>
      {fileData && (
        <table className='mt-2 border-collapse border border-slate-500'>
          <thead>
            <tr>
              {payableAccountHeader.map((key) => (
                <th key={key} className='border border-slate-600'>
                  <h3 className='text-xs'>
                    {' '}
                    {key
                      .replace('(Gran Total)', '')
                      .replace('(monto de este impuesto)', '')}
                  </h3>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fileData.map((row, index) => (
              <tr key={index}>
                {Object.keys(row).map((key) => (
                  <td key={key} className='border border-slate-300'>
                    <h3 className='text-xs'> {row[key]}</h3>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}
