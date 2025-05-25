import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";
import { ReactNode } from "react";

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: (data: TFormValues) => void;
  children: ReactNode;
  className?: string;
} & UseFormReturn<TFormValues>;

export const Form = <TFormValues extends FieldValues>({
  children,
  className,
  onSubmit,
  ...formMethods
}: FormProps<TFormValues>) => {
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};
