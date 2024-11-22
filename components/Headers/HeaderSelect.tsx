'use client'
import { ICategory } from "@/interfaces";
import { convertToSlug } from "@/utils";
import Link from "next/link";
import { useState } from "react";
import { FaListAlt, FaWindowClose } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export interface IHeaderSelectProps {
    categories: ICategory[]
}

export default function HeaderSelect({ categories }: IHeaderSelectProps) {
    const [openTabSelect, setOpenTabSelect] = useState(false)
    const [openTabCategories, setOpenTabCategories] = useState(false)
    const [openTabTop, setOpenTabTop] = useState(false)
    return (
        <section className='w-full sticky top-0 z-50 text-white px-2  text-sm dark:bg-[#242526] bg-[#f18121]'>
            <div className="lg:max-w-[1200px] lg:flex lg:px-3 mx-auto">
                <nav className='p-2 py-3  lg:w-max flex md:hover:bg-[#f29c57] justify-between items-center cursor-pointer  '>
                    <h2><Link href={"/"}>Trang Chủ</Link></h2>
                    <button className="lg:hidden" onClick={() => setOpenTabSelect(!openTabSelect)}>
                        {!openTabSelect ? <FaListAlt size={30} /> : <FaWindowClose size={30} />}
                    </button>
                </nav>
                <ul className={` ${openTabSelect ? "block lg:inline-flex" : "hidden lg:inline-flex"} lg:gap-0    gap-2`}>
                    <li className=" w-full group   lg:w-max ">
                        <button
                            onClick={() => (setOpenTabCategories(!openTabCategories))}
                            className="p-2 w-full py-4 hover:bg-[#f29c57] flex items-center">
                            Thể Loại
                            <IoMdArrowDropdown size={20} />
                        </button>
                        <div className={`lg:group-hover:block  ${openTabCategories ? "block lg:hidden" : "hidden "}  lg:p-2 z-20 w-full  bg-white dark:bg-[#242526] dark:border-y left-0 lg:absolute`}>
                            <ul className={`  lg:max-w-[1200px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 lg:mx-auto lg:font-normal  gap-y-3 p-2  bg-white dark:bg-transparent dark:text-[#ebebeb]  text-black font-light`}>
                                {categories.map((category, index) => (
                                    <li key={index} className=" hover:text-[#f29c57] overflow-hidden  truncate">
                                        <Link href={`/the-loai/${convertToSlug(category?.name)}-${category?._id}.html`}>
                                            {category?.name.split(" ").slice(0, 2).join(" ")}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className=" w-full group   lg:w-max ">
                        <button onClick={() => (setOpenTabTop(!openTabTop))}
                            className="p-2 w-full py-4 hover:bg-[#f29c57] flex items-center">
                            Xếp Hạng
                            <IoMdArrowDropdown size={20} />
                        </button>
                        <div className={`lg:group-hover:block  ${openTabTop ? "block lg:hidden" : "hidden "} lg:p-2 z-20 w-full  bg-white dark:bg-[#242526] dark:border-y left-0 lg:absolute`}>
                            <ul className={`lg:max-w-[1200px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8  lg:mx-auto gap-y-3 p-2 bg-white dark:bg-transparent dark:text-[#ebebeb]  text-black font-light`}>
                                <li className=" hover:text-[#f29c57] overflow-hidden  truncate"><Link href={""} >Top Ngày</Link></li>
                                <li className=" hover:text-[#f29c57] overflow-hidden  truncate"><Link href={""}>Top Tuần</Link></li>
                                <li className=" hover:text-[#f29c57] overflow-hidden  truncate"><Link href={""}>Top Tháng</Link></li>
                                <li className=" hover:text-[#f29c57] overflow-hidden  truncate"><Link href={""}>Yêu Thích</Link></li>
                                <li className=" hover:text-[#f29c57] overflow-hidden  truncate"><Link href={""}>Mới Cập Nhật</Link></li>
                                <li className=" hover:text-[#f29c57] overflow-hidden  truncate"><Link href={""}>Truyện Mới</Link></li>
                                <li className=" hover:text-[#f29c57] overflow-hidden  truncate"><Link href={""}>Truyện Full</Link></li>
                                <li className=" hover:text-[#f29c57] overflow-hidden  truncate"><Link href={""}>Truyện Ngẫu Nhiên</Link></li>
                            </ul>
                        </div>

                    </li>
                    <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57]"><Link href={"/truyen-con-gai"}>Con Gái</Link></li>
                    <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57]"><Link href={"/truyen-con-trai"}>Con Trai</Link></li>
                    <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57]"><Link href={"/tim-kiem-nang-cao"}>Tìm Truyện</Link></li>
                    <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57]"><Link href={"/lich-su"}>Lịch Sử</Link></li>
                    <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57]"><Link href={"/truyen-dang-theo-doi"}>Theo Dõi</Link></li>
                    <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57]"><Link href={""}>Tải App</Link></li>
                    <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57]"><Link href={""}>Thảo Luận</Link></li>
                    <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57]"><Link href={""}>Fanpage</Link></li>
                    <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57]"><Link href={""}>Discord</Link></li>

                </ul>
            </div>
        </section>
    );
}
