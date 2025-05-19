import React, { Dispatch, SetStateAction } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
interface SheetProps {
  children: React.ReactNode;
  open: boolean;
  setopen: Dispatch<SetStateAction<boolean>>;
}
const SheetLayout: React.FC<SheetProps> = ({ children, open, setopen }) => {
  return (
    <Sheet open={open} onOpenChange={setopen} key={"left"}>
      <SheetContent className="bg-white" side="left">
        <div className="p-2 my-6">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetLayout;
