import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITabComponent } from "./type";

const TabComponent: React.FC<ITabComponent> = ({ tabsTrigger, tabContent }) => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        {tabsTrigger.map((item, index) => {
          return (
            <TabsTrigger value={item.value} key={`${item.value}-${index}`}>
              {item.label}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {tabContent.map((item, index) => {
        return (
          <TabsContent
            value={item.value}
            key={`${tabsTrigger[index].value}-${index}`}
          >
            {item.children}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default TabComponent;
