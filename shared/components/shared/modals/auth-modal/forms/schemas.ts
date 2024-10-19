import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(4, { message: " Zadejte správné heslo" });

export const formLoginSchema = z.object({
  email: z.string().email({ message: " Zadejte správný e-mail" }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: "Zadejte své jméno a příjmení" }),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hesla se neshodují",
    path: ["confirmPassword"],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
