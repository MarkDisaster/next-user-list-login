"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { InputText } from "@/features/components/UI/Form/InputText";
import { Form } from "@/features/components/UI/Form/Form";
import { InputPassword } from "@/features/components/UI/Form/InputPassword";
import { Button } from "@/features/components/UI/Button";

type LoginFormType = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const formMethods = useForm<LoginFormType>();

  const onSubmit = async (data: LoginFormType) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/users",
    });
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6 mt-36 border rounded-lg border-gray-300 shadow-md bg-white">
      <h2 className="text-lg mb-4 text-blue-600 font-bold">Přihlášení</h2>
      <Form {...formMethods} onSubmit={onSubmit} className="space-y-4">
        <InputText
          name="email"
          placeholder="E-mail"
          control={formMethods.control}
          validationIcon={false}
        />

        <InputPassword
          name="password"
          placeholder="Heslo"
          control={formMethods.control}
          id={"password"}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={formMethods.formState.isSubmitting}
        >
          {formMethods.formState.isSubmitting
            ? "Přihlašuji..."
            : "Přihlásit se"}
        </Button>
      </Form>
    </div>
  );
};
