import { z } from 'zod'

export const InvoiceMetadataSchema = z.object({
  petroleum: z.optional(z.string()),
  accommodation: z.optional(z.string()),
  tickets: z.optional(z.string()),
  pressStamp: z.optional(z.string()),
  firefighters: z.optional(z.string()),
  municipalTax: z.optional(z.string()),
  alcoholicBeverages: z.optional(z.string()),
  tobacco: z.optional(z.string()),
  cement: z.optional(z.string()),
  nonAlcoholicBeverages: z.optional(z.string()),
  portFee: z.optional(z.string()),
})

export const InvoiceSchema = z.object({
  date: z.string(),
  authorizationNumber: z.string(),
  type: z.string(),
  serie: z.string(),
  dteNumber: z.string(),
  issuerId: z.string(), //nit del emisor
  receiverId: z.string(), //nit del receptor
  currency: z.string(),
  amount: z.string(),
  state: z.string(),
  iva: z.string(),
  accountType: z.string(),
  voidDate: z.string(),
  metadata: z.optional(InvoiceMetadataSchema),
})

export type Invoice = z.infer<typeof InvoiceSchema>
