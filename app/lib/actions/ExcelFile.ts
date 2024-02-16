'use server'
import fs from 'node:fs'

import {
  normalizeData,
  normalizeDataToSave,
} from '@/app/accounts/payable/upload-file/normalize-data'
import * as XLSX from 'xlsx'
//
// fileReader = new FileReader()
// fileReader.readAsArrayBuffer(newFile)
// fileReader.onload = (e) => {
//   file = e.target?.result
//
//   if (file) {
//     const workbook = XLSX.read(file, { type: 'buffer' })
//     const worksheetName = workbook.SheetNames[0]
//     const worksheet = workbook.Sheets[worksheetName]
//     const sheetData =
//       XLSX.utils.sheet_to_json<Record<string, any>>(worksheet)
//     if (sheetData) {
//       const [data, companies] = normalizeDataToSave(sheetData, true)
//       console.log('data', data)
//       console.log('companies', companies)
//       // setDataToSave({ data, companies })
//       fileData = normalizeData(sheetData, true)
//     }
//   }
// }
//

export async function uploadExcel(data: FormData) {
  const file: File = data.get('file') as File
  // const fileReader = new FileReader()
  // let fileData: Record<string, any>[] = []
  // fileReader.readAsArrayBuffer(file)
  // fileReader.onload = (e) => {
  //   const newFile = e.target?.result
  //
  //   if (newFile) {
  //     const workbook = XLSX.read(newFile, { type: 'buffer' })
  //
  //     const worksheetName = workbook.SheetNames[0]
  //     const worksheet = workbook.Sheets[worksheetName]
  //     const sheetData = XLSX.utils.sheet_to_json<Record<string, any>>(worksheet)
  //
  //     if (sheetData) {
  //       const data = normalizeDataToSave(sheetData, true)
  //       console.log('data', data)
  //       fileData = normalizeData(sheetData, true)
  //     }
  //   }
  // }
  // return fileData
  // try {
  //   const data = await fs.readFileSync(file)
  // } catch (error) {
  //
  // }
}
