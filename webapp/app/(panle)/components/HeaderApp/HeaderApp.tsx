import React from "react";
import HeaderAction from "./HeaderAction";
import ThemeSwitch from "./ThemeSwitch";


function HeaderApp() {
  return (
    <div className="border-b-1 border-gray-100 w-full h-16 flex shadow-xl dark:border-gray-700">
      {/* <div className={"flex-shrink flex bg-gray-bg items-center "}>
        <h2 className={"text-wihte text-xl px-20 "}> داشبورد</h2>
      </div> */}
      <div className={"flex-1 items-center justify-between flex px-8"}>

        <ThemeSwitch />
        <HeaderAction />
      </div>
    </div>
  );
}

export default HeaderApp;
