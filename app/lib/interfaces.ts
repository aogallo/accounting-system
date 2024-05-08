import { z } from 'zod'

export const AccountSchema = z.object({
  name: z.string(),
  account: z.string(),
})

export type IAccount = z.infer<typeof AccountSchema>
