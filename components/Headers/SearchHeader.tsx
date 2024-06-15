'use client'
import { IoSearch } from "react-icons/io5";
import CardStorySearch from "../Cards/CardStorySreach";
import Link from "next/link";
export interface IAppProps {
}

export default function SearchHeader(props: IAppProps) {
  return (
    <div className={`border mx-3  relative dark:border-none dark:bg-[#3a3b3c]  flex justify-between lg:w-[450px]   px-4 py-3 rounded-full`}>
      <input className="font-light w-full outline-none bg-transparent" type="text" placeholder="Bạn muốn tìm truyện gì..." />
      <IoSearch size={18} className="text-[#f18121] dark:text-[#ebebeb]" />
      <div className="w-full z-[999] absolute max-h-[400px] overflow-y-auto top-[110%] shadow-[0px_1px_3px_0px_#999] right-0 bg-white dark:bg-[#3a3b3c]   rounded-md">
        <p className="text-sm p-3">Không Tìm Thấy Kết Quả Nào!</p>
        <Link href={""}><CardStorySearch /></Link>
        <Link href={""}><CardStorySearch /></Link>
        <Link href={""}><CardStorySearch /></Link>
      </div>
    </div>
  );
}
