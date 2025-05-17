import { create } from "zustand";
import { IrequestBody } from "@/types"; 
type gridBody = {
  body: IrequestBody;
  updateFieldBody: <k extends keyof IrequestBody>(
    key: k,
    value: IrequestBody[k]
  ) => void;
};

const GridBody = create<gridBody>()(
    (set) => ({
      body: {
        page: 1,
        pageSize: 10,
        total:100,
        searchTerm: "",
      },
      updateFieldBody: (key, value) =>
        set((state) => ({
          body: {
            ...state.body,
            [key]: value,
          },
        })),    
    }),
    
  
);

export default GridBody;