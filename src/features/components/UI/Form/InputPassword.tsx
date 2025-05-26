import { Controller, FieldValues } from "react-hook-form";
import InputBase from "./InputBase";
import EyeSVG from "/public/assets/images/eye-icon.svg";
import EyeOffSVG from "/public/assets/images/eye-off-icon.svg";
import { Control } from "react-hook-form";
import { Path } from "react-hook-form";

import { twMerge } from "tailwind-merge";
import { ComponentProps, useState } from "react";
import ErrorSVG from "/public/assets/images/error-icon.svg";

type PasswordInputWithValidationProps<T extends FieldValues> = {
  control: Control<T>;
  id: string;
  name: Path<T>;
  validation?: boolean;
  className?: string;
  placeholder?: string;
};

export const InputPassword = <T extends FieldValues>({
  control,
  id,
  name,
  validation,
  className,
  placeholder,
  ...props
}: ComponentProps<"input"> & PasswordInputWithValidationProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(true);
  };
  const handleHidePassword = () => {
    setShowPassword(false);
  };

  return (
    <div className={twMerge("relative", className)}>
      <Controller
        name={name}
        control={control}
        render={({
          field,
          fieldState: { error },
          formState: { isSubmitted },
        }) => {
          return (
            <div>
              <InputBase
                {...field}
                {...props}
                id={id}
                placeholder={placeholder}
                type={showPassword ? "text" : "password"}
                error={isSubmitted ? error : undefined}
                className={"pr-10"}
                icon={
                  <div className="flex items-center gap-2">
                    {isSubmitted && error && <ErrorSVG />}

                    {showPassword ? (
                      <EyeSVG
                        className="cursor-pointer w-6 h-auto"
                        onClick={handleHidePassword}
                      />
                    ) : (
                      <EyeOffSVG
                        className="cursor-pointer w-6 h-auto"
                        onClick={handleShowPassword}
                      />
                    )}
                  </div>
                }
              />
            </div>
          );
        }}
      />
    </div>
  );
};
