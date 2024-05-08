import { z } from 'zod'

export const AccountSchema = z.object({
  name: z.string(),
  account: z.string(),
})

export type Account = z.infer<typeof AccountSchema>
