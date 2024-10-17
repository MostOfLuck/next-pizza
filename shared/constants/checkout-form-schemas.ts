import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Název musí být dlouhý alespoň 2 znaky" }),
  lastName: z
    .string()
    .min(2, { message: "Příjmení musí obsahovat alespoň 2 znaky" }),
  email: z.string().email({ message: "Zadejte správnou e-mailovou adresu" }),
  phone: z.string().min(10, { message: "Zadejte správné telefonní číslo" }),
  address: z.string().min(5, { message: "Zadejte správnou adresu" }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
