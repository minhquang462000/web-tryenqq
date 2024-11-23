import * as React from "react";

export interface IAppProps {}

export default function AccountNotification(props: IAppProps) {
  return (
    <div className="dark:text-white  text-sm lg:text-base">
      <h3 className="text-2xl col-span-2 font-bold h-max flex flex-col gap-1">
        THÔNG BÁO
        <span className="w-[80px] h-[2px] bg-[#ee2c74]" />
      </h3>
      <ul className="bg-[#222222] mt-5 text-white border-t-2 border-[#ee2c74] h-[40px] flex items-center text-start  font-bold">
        <li className="w-1/2 pl-3 lg:pl-10 ">NỘI DUNG</li>
        <li className="w-1/2 pl-3 lg:pl-10 ">THỜI GIAN </li>
      </ul>
    </div>
  );
}
