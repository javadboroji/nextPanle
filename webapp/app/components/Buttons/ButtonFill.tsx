import React from "react";
interface IButton {
  type: "submit" | "button";
  action?: (props: any) => void;
  children: React.ReactNode |string;
}
const ButtonFill: React.FC<IButton> = ({ children, type, action }) => {
  return (
    <button
      onClick={() => action}
      type={type}
      className="p-4 hover:cursor-pointer "
    > 
      {children}
    </button>
  );
};

export default ButtonFill;
