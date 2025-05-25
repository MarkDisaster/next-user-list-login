import React, { ComponentProps, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type InputBaseProps = {
  isRequired?: boolean;
  icon?: React.ReactNode;
  validationIcon?: boolean;
  error?: FieldError;
  isValid?: boolean;
  id: string;
};

const InputBase = forwardRef<
  HTMLInputElement,
  ComponentProps<"input"> & InputBaseProps
>(
  (
    {
      isRequired = false,
      icon,
      error,
      isValid,
      id,
      placeholder,
      type,
      validationIcon = true,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        <div className="relative">
          <input
            {...props}
            type={type}
            id={id}
            className={twMerge(
              "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              validationIcon && icon && "pr-11",
              error && "border-red-500 focus:border-red-500"
            )}
            placeholder=" "
            ref={ref}
            value={props.value ?? ""}
          />
          <label
            htmlFor={id}
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            {placeholder}
          </label>
          {validationIcon && icon && (
            <div className="absolute top-3 right-3">{icon}</div>
          )}
        </div>
        {error && (
          <span className="text-red-500 text-sm mt-1 block">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

export default InputBase;
