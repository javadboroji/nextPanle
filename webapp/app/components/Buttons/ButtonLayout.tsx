import clsx from "clsx";
import React from "react";
interface ICbutton {
  children: React.ReactNode;
  btnType: "fill" | "outline" | "link";
  type?: "submit" | "reset" | "button";
  size?: "sm" | "md" | "lg";
  customizseClass?: string
  onClick?: (data?: any) => void;
}
const ButtonLayout: React.FC<ICbutton> = ({
  children,
  btnType,
  type,
  size,
  customizseClass,
  onClick,
}) => {
  const renderbtnTypeClassName = () => {
    switch (btnType) {
      case "fill":
        return "bg-blue-500 text-white";
      case "outline":
        return "bg-white dark:bg-midnight-slate  border-[1px] border-blue-500 text-blue-500";
      case "link":
        return "text-blue-500";
      default:
        return "";
    }
  };
  const renderSizeClassName = () => {
    switch (size) {
      case "sm":
        return "px-4 py-1 text-sm";
      case "md":
        return "px-6 py-2 text-base";
      case "lg":
        return "px-10 py-3 text-lg";
      default:
        return "px-4 py-1 text-base";
    }
  };
  return (
    <button
      type={type}
      onClick={(data) => {
        if (onClick) onClick(data);
      }}
      className={clsx('hover:cursor-pointer  rounded-xl m-2', renderbtnTypeClassName(), renderSizeClassName(), customizseClass)}
    >
      {children}
    </button>
  );
};
export default ButtonLayout;
