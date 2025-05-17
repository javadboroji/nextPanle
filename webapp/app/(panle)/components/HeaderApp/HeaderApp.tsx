import React from "react";
import HeaderAction from "./HeaderAction";


function HeaderApp() {
  return (
    <div className="border-b-1 border-gray-100 w-full h-16 flex ">
      {/* <div className={"flex-shrink flex bg-gray-bg items-center "}>
        <h2 className={"text-wihte text-xl px-20 "}> داشبورد</h2>
      </div> */}
      <div className={"flex-1 items-center justify-between flex"}>
      
        <HeaderAction />
      </div>
    </div>
  );
}

export default HeaderApp;
