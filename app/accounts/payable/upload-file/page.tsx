'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import { headers, normalizeData, normalizeDataToSave } from './normalize-data'
import { Button } from '@/app/ui/Button'

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

  const [dataToSave, setDataToSave] = useState<Record<string, any>[]>([])

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
      const data = XLSX.utils.sheet_to_json<Record<string, any>>(worksheet)
      if (data) {
        setDataToSave(normalizeDataToSave(data, true))
        setFileData(normalizeData(data, true))
      }
    }
  }, [file])

  const handleCreatePayableAccounts = async () => {
    try {
      await fetch('/api/accounts/payable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <section>
      <section className='flex'>
        <input type='file' onChange={handleChange} />
      </section>
      <input type='text' name='name' id='name' />
      <Button onClick={handleCreatePayableAccounts}> save</Button>
      {fileData && (
        <table className='mt-2 border-collapse border border-slate-500'>
          <thead>
            <tr>
              {headers.map((key) => (
                <th key={key} className='border border-slate-600'>
                  <h3 className='text-xs'>
                    {' '}
                    {
                      key

                      // .replace('(Gran Total)', '')
                      // .replace('(monto de este impuesto)', '')
                    }
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
