import { z } from 'zod'

export const FileSchema = z.object({
  date: z.string(),
  authorizationNumber: z.string(),
  type: z.string(),
  serie: z.string(),
  dteNumber: z.string(),
  issuerId: z.string(), //nit del emisor
  issuerName: z.string(),
  receiverId: z.string(), //nit del receptor
  receiverName: z.string(),
  currency: z.string(),
  amount: z.string(),
  state: z.string(),
  iva: z.string(),
  accountType: z.string(),
  voidDate: z.optional(z.string()),
  //metadata
  petroleum: z.coerce.number(),
  accommodation: z.coerce.number(),
  tickets: z.coerce.number(),
  pressStamp: z.coerce.number(),
  firefighters: z.coerce.number(),
  municipalTax: z.coerce.number(),
  alcoholicBeverages: z.coerce.number(),
  tobacco: z.coerce.number(),
  cement: z.coerce.number(),
  nonAlcoholicBeverages: z.coerce.number(),
  portFee: z.coerce.number(),
})
