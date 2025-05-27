import * as React from "react";

import { cn } from "@/lib/utils";
import { CiSearch } from "react-icons/ci";
interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconButton?: React.ReactNode;
  changeHandler: (e:React.ChangeEvent<HTMLInputElement>) => void;
  value: string| number;
}
function Input({
  className,
  value,
  iconButton,
  changeHandler,
  type,
  ...props
}: CustomInputProps) {
  return (
    <div className="flex items-center relative w-full">
      <input
        onChange={(e) => changeHandler(e)}
        value={value}
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground  border-gray-200 flex  w-full  rounded-[8px] border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-9 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "my-2",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-2 py-3 placeholder:text-gray-400",
          className
        )}
        {...props}
      />
      {iconButton}
    </div>
  );
}

export { Input };
