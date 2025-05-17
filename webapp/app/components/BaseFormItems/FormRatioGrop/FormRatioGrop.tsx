import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TRadioGroupItem } from "@/types";
interface IProps {
  radioGroupItems: TRadioGroupItem[];
  defultValue?: string;
}

const FormRatioGrop: React.FC<IProps> = ({ radioGroupItems,defultValue }) => {
  return (
    <RadioGroup defaultValue={defultValue}>
      {radioGroupItems?.map((item) => {
        return (
          <div className="flex items-center space-x-2" key={item.id}>
            <RadioGroupItem value={item.value} id={item.id} />
            <Label htmlFor={item.id}>{item.Label}</Label>
          </div>
        );
      })}
    </RadioGroup>
  );
};

export default FormRatioGrop;
