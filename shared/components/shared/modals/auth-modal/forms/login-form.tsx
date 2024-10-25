import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TFormLoginValues, formLoginSchema } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Title } from "../../../title";
import { FormInput } from "../../../form";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { Button } from "@/shared/components/ui/button";

interface Props {
  onClose?: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        throw Error();
      }

      toast.success("Úspěšně jste se přihlásili ke svému účtu", {
        icon: "✅",
      });

      onClose?.();
    } catch (error) {
      console.error("Error [LOGIN]", error);
      toast.error("Nelze se přihlásit k účtu", {
        icon: "❌",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title text="Přihlášení k účtu" size="md" className="font-bold" />
            <p className="text-gray-400">
              Zadejte svůj e-mail a přihlaste se ke svému účtu
            </p>
          </div>
          <img
            src="https://i.postimg.cc/sD0z3Zf1/phone-icon.png"
            alt="phone-icon"
            width={60}
            height={60}
          />
        </div>

        <FormInput name="email" label="E-Mail" required />
        <FormInput name="password" label="Heslo" type="password" required />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
           Přihlásit se
        </Button>
      </form>
    </FormProvider>
  );
};
