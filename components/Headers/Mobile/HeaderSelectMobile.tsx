'use client'
import Link from "next/link";
import { useState } from "react";
import { FaListAlt, FaWindowClose } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export interface IHeaderSelectProps {
}

export default function HeaderSelectMobile(props: IHeaderSelectProps) {
    const [openTabSelect, setOpenTabSelect] = useState(false)
    const [openTabCategories, setOpenTabCategories] = useState(false)
    const [openTabTop, setOpenTabTop] = useState(false)
    return (
        <div className='w-full text-white px-2 lg:hidden  text-sm dark:bg-[#242526] bg-[#f18121]'>
            <nav className='p-2 py-3 flex hover:bg-[#f29c57] justify-between items-center cursor-pointer  '>
                <h2><Link href={"/"}>Trang Chủ</Link></h2>
                <button onClick={() => setOpenTabSelect(!openTabSelect)}>
                    {!openTabSelect ? <FaListAlt size={30} /> : <FaWindowClose size={30} />}
                </button>
            </nav>
            <ul className={`w-full ${openTabSelect ? "block" : "hidden"} flex flex-col gap-2`}>
                <li className=" w-full  ">
                    <button onClick={() => setOpenTabCategories(!openTabCategories)} className="p-2 w-full py-4 hover:bg-[#f29c57] flex items-center">
                        Thể Loại
                        <IoMdArrowDropdown size={16} />
                    </button>
                    <ul className={`grid grid-cols-2 gap-y-3 p-2 bg-white dark:bg-transparent dark:text-[#ebebeb] dark:border-y  text-black font-light ${openTabCategories ? "block" : "hidden"}`}>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""}>Action</Link></li>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""}>Action</Link></li>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""}>Action</Link></li>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""}>Action</Link></li>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""}>Action</Link></li>
                    </ul>
                </li>
                <li className=" w-full  ">
                    <button onClick={() => setOpenTabTop(!openTabTop)} className="p-2 w-full py-4 hover:bg-[#f29c57] flex items-center">
                        Xếp Hạng
                        <IoMdArrowDropdown size={16} />
                    </button>
                    <ul className={`grid grid-cols-2 gap-y-3 p-2 bg-white dark:bg-transparent dark:text-[#ebebeb] dark:border-y  text-black font-light ${openTabTop ? "block" : "hidden"}`}>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""} >Top Ngày</Link></li>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""}>Top Tuần</Link></li>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""}>Top Tháng</Link></li>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""}>Yêu Thích</Link></li>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""}>Mới Cập Nhật</Link></li>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""}>Truyện Mới</Link></li>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""}>Truyện Full</Link></li>
                        <li className="w-full col-span-1 overflow-hidden  truncate"><Link href={""}>Truyện Ngẫu Nhiên</Link></li>
                    </ul>
                </li>
                <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={"/truyen-con-gai"}>Con Gái</Link></li>
                <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={"/truyen-con-trai"}>Con Trai</Link></li>
                <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={"/tim-kiem-nang-cao"}>Tìm Truyện</Link></li>
                <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={"/lich-su"}>Lịch Sử</Link></li>
                <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={"/truyen-dang-theo-doi"}>Theo Dõi</Link></li>
                <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={""}>Tải App</Link></li>
                <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={""}>Thảo Luận</Link></li>
                <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={""}>Fanpage</Link></li>
                <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={""}>Discord</Link></li>

            </ul>
        </div>
    );
}
