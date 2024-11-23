"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export interface IListFillterStoryOfTypeProps {
  status: number | any;
  query: string;
  nation: string;
  handleQuery: any;
}

export default function ListFilterStoryOfType({
  status,
  query,
  nation,
  handleQuery,
}: IListFillterStoryOfTypeProps) {
  return (
    <ul className="bg-white dark:bg-[#242526]  w-full shadow flex text-[#333333] dark:text-white flex-col gap-3 p-4 rounded">
      <li className="flex w-full items-center gap-2">
        <p className="text-[#9e9e9e] min-w-[120px]">Thể loại truyện</p>
      </li>
      <li className="flex w-full items-center flex-wrap gap-y-1 gap-2">
        <p className=" min-w-[120px] text-[#9e9e9e]">Tình trạng</p>
        <ul className="flex items-center flex-wrap text-center gap-3">
          <li
            onClick={() => handleQuery("status", "")}
            className={`font-medium min-w-[80px] cursor-pointer border p-2  rounded-md ${
              status === "" && "bg-[#f18121] border-[#f18121] text-white"
            }`}
          >
            Tất cả
          </li>
          <li
            onClick={() => handleQuery("status", 1)}
            className={`font-medium min-w-[80px] cursor-pointer border p-2  rounded-md ${
              parseInt(status) === 1 &&
              "bg-[#f18121] border-[#f18121] text-white"
            }`}
          >
            Đang tiến hành
          </li>
          <li
            onClick={() => handleQuery("status", 2)}
            className={`font-medium min-w-[80px] cursor-pointer border p-2 rounded-md ${
              parseInt(status) === 2 &&
              "bg-[#f18121] border-[#f18121] text-white"
            }`}
          >
            Hoàn thành
          </li>
        </ul>
      </li>
      <li className="flex w-full items-center gap-2">
        <p className="text-[#9e9e9e] min-w-[120px]">Quốc gia</p>
        <ul className="flex flex-wrap items-center mt-2 text-center gap-3">
          <li
            onClick={() => handleQuery("nation", "trung-quoc")}
            className={`font-medium min-w-[80px] cursor-pointer border p-2 ${
              nation === "trung-quoc" &&
              "bg-[#f18121] border-[#f18121] text-white"
            } rounded-md`}
          >
            Trung Quốc
          </li>
          <li
            onClick={() => handleQuery("nation", "viet-nam")}
            className={`font-medium min-w-[80px] cursor-pointer border p-2 ${
              nation === "viet-nam" &&
              "bg-[#f18121] border-[#f18121] text-white"
            } rounded-md`}
          >
            Việt Nam
          </li>
          <li
            onClick={() => handleQuery("nation", "han-quoc")}
            className={`font-medium min-w-[80px] cursor-pointer border p-2 ${
              nation === "han-quoc" &&
              "bg-[#f18121] border-[#f18121] text-white"
            } rounded-md`}
          >
            Hàn Quốc
          </li>
          <li
            onClick={() => handleQuery("nation", "nhat-ban")}
            className={`font-medium min-w-[80px] cursor-pointer border p-2 ${
              nation === "nhat-ban" &&
              "bg-[#f18121] border-[#f18121] text-white"
            } rounded-md`}
          >
            Nhật Bản
          </li>
          <li
            onClick={() => handleQuery("nation", "my")}
            className={`font-medium min-w-[80px] cursor-pointer border p-2 ${
              nation === "my" && "bg-[#f18121] border-[#f18121] text-white"
            } rounded-md`}
          >
            Mỹ
          </li>
        </ul>
      </li>
      <li className="flex w-full items-center gap-2">
        <p className="text-[#9e9e9e] min-w-[120px]">Sắp xếp</p>
        <select
          style={{ fontFamily: "Poppins, sans-serif" }}
          onChange={(e) => handleQuery("q", e.target.value)}
          defaultValue={query}
          className="border px-4 bg-transparent  py-2 outline-none ring-[#56ccf2] focus:ring-1 rounded"
          name=""
          id=""
        >
          <option value="post-desc">Ngày đăng giảm dần</option>
          <option value="post-asc">Ngày đăng tăng dần</option>
          <option value="update-desc">Ngày cập nhật giảm dần</option>
          <option value="update-asc">Ngày cập nhật tăng dần</option>
          <option value="view-desc">Lượt xem giảm dần</option>
          <option value="view-asc">Lượt xem tăng dần</option>
        </select>
      </li>
    </ul>
  );
}
