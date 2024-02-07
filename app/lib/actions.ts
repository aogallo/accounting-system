import { z } from "zod";
const PayableSchema = z.object({
  id: z.string(),
  serie: z.string({ invalid_type_error: "Please enter a serie" }),
  documentNumber: z.string({
    invalid_type_error: "Please enter a document number",
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than Q 0" }),
});

export type State = {
  errors?: {
    serie?: string[];
    amount?: string[];
    documentNumber?: string[];
  };
  message?: string | null;
};
export const createPaybleAccount = async (
  prevState: State,
  formData: FormData,
) => {};
