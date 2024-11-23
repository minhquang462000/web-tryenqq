import * as React from "react";

export interface IAppProps {}

export default function GemHistory(props: IAppProps) {
  return (
    <div className="mt-5  border-b pb-1">
      <ul className="bg-[#222222] text-white border-t-2 border-[#ee2c74] h-[40px] flex items-center text-start  font-bold">
        <li className="w-[40%] pl-3 line-clamp-1 lg:pl-5">THỜI GIAN</li>
        <li className="w-[30%] pl-3 line-clamp-1 lg:pl-10">LOẠI</li>
        <li className="w-[30%] pl-3 line-clamp-1 lg:pl-10">LINH THẠCH</li>
      </ul>
      <div className="w-full text-sm">
        <ul className="w-full flex  items-center py-3">
          <li className="w-[40%] pl-3 lg:pl-5">2024-11-20 15:29:09</li>
          <li className="w-[30%] pl-3 lg:pl-10">Điểm danh</li>
          <li className="w-[30%] pl-3 lg:pl-10 text-[limegreen]">+100</li>
        </ul>
      </div>
    </div>
  );
}
