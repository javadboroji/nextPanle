import { ConfigProvider } from "antd";
import React from "react";
import fa_IR from "antd/es/locale/fa_IR";
interface IAntProviderLayout {
  children: React.ReactNode;
}
const AntProviderLayout: React.FC<IAntProviderLayout> = ({ children }) => {
    const customLocale = {
        ...fa_IR,
        Pagination: {
          ...fa_IR.Pagination,
          items_per_page: '', 
        },
      };
  return (
    <ConfigProvider
      direction="rtl"
      locale={customLocale}
      theme={{
        components: {
          Button: {
            colorPrimary: "#00b96b",
          },
          
          Input: {
            paddingInline: 12,
            paddingBlock: 12,
          },
          DatePicker: {
            paddingInline: 24,
            paddingBlock: 24,
          }
        
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntProviderLayout;
