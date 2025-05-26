import { Controller, FieldValues } from "react-hook-form";
import InputBase from "./InputBase";
import { Control } from "react-hook-form";
import { Path } from "react-hook-form";
import ErrorSVG from "/public/assets/images/error-icon.svg";
import SuccessSVG from "/public/assets/images/success-icon.svg";

type TextInputWithValidationProps<T extends FieldValues> = {
  control: Control<T>;
  id?: string;
  name: Path<T>;
  placeholder: string;
  className?: string;
  validationIcon?: boolean;
};

export const InputText = <T extends FieldValues>({
  control,
  id,
  name,
  placeholder,
  className,
  validationIcon = true,
}: TextInputWithValidationProps<T>) => {
  return (
    <div className="relative w-full">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          return (
            <InputBase
              {...field}
              id={id ?? name}
              placeholder={placeholder}
              type="text"
              className={className}
              validationIcon={validationIcon}
              error={error}
              icon={
                validationIcon && error ? (
                  <ErrorSVG className="w-6 h-auto text-red-500" />
                ) : field.value?.trim().length > 0 ? (
                  <SuccessSVG className="w-6 h-auto text-green-600" />
                ) : null
              }
            />
          );
        }}
      />
    </div>
  );
};
