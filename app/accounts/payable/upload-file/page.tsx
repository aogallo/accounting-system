'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import { normalizeData, normalizeDataToSave } from './normalize-data'
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
  const [unNormalizeData, setUnNormalizeData] = useState<Record<string, any>[]>(
    []
  )

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
      setUnNormalizeData(data)
      setFileData(normalizeData(data, true))
    }
  }, [file])

  const handleSave = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    normalizeDataToSave(unNormalizeData)
  }

  return (
    <section>
      <section className='flex'>
        <input type='file' onChange={handleChange} />
        <Button onClick={handleSave}>Save</Button>
      </section>
      {fileData && (
        <table className='mt-2 border-collapse border border-slate-500'>
          <thead>
            <tr>
              {fileData[0] &&
                Object.keys(fileData[0]).map((key) => (
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
