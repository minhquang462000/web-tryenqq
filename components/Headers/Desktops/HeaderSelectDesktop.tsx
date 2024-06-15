
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

export interface IHeaderSelectProps {
}

export default function HeaderSelectDesktop(props: IHeaderSelectProps) {
    return (
        <div className='w-full text-white px-2 hidden dark:bg-[#242526]  lg:block relative text-sm bg-[#f18121]'>
            <div className="max-w-[1200px] m-auto">
                <ul className={`w-full px-3 flex items-center `}>
                    <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={"/"}>Trang chủ</Link></li>
                    <li className="  group  ">
                        <button className="p-2 w-full py-4 hover:bg-[#f29c57] flex items-center">
                            Thể Loại
                            <IoMdArrowDropdown size={20} />
                        </button>
                        <div className="group-hover:block hidden w-screen p-2 bg-white dark:bg-[#242526] dark:border-y z-20 left-0 absolute">
                            <ul className={`grid grid-cols-8  max-w-[1200px] m-auto gap-y-3 py-5  text-black dark:text-[#ebebeb] `}>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""}>Action</Link></li>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""}>Action</Link></li>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""}>Action</Link></li>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""}>Action</Link></li>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""}>Action</Link></li>

                            </ul>
                        </div>
                    </li>
                    <li className="  group ">
                        <button className="p-2 w-full py-4 hover:bg-[#f29c57] flex items-center">
                            Xếp Hạng
                            <IoMdArrowDropdown size={20} />
                        </button>
                        <div className="group-hover:block hidden z-20 w-screen p-2 bg-white dark:bg-[#242526] dark:border-y left-0 absolute">
                            <ul className={`grid grid-cols-8  max-w-[1200px] m-auto gap-y-3 py-5  text-black dark:text-[#ebebeb] `}>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""} >Top Ngày</Link></li>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""}>Top Tuần</Link></li>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""}>Top Tháng</Link></li>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""}>Yêu Thích</Link></li>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""}>Mới Cập Nhật</Link></li>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""}>Truyện Mới</Link></li>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""}>Truyện Full</Link></li>
                                <li className="w-full col-span-1 overflow-hidden hover:text-[#f18121] truncate"><Link href={""}>Truyện Ngẫu Nhiên</Link></li>
                            </ul>
                        </div>

                    </li>
                    <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={"/con-gai"}>Con Gái</Link></li>
                    <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={"/con-trai"}>Con Trai</Link></li>
                    <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={"/tim-kiem-nang-cao"}>Tìm Truyện</Link></li>
                    <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={"/lich-su"}>Lịch Sử</Link></li>
                    <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={"/truyen-dang-theo-doi"}>Theo Dõi</Link></li>
                    <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={""}>Tải App</Link></li>
                    <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={""}>Thảo Luận</Link></li>
                    <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={""}>Fanpage</Link></li>
                    <li className="p-2 py-4 hover:bg-[#f29c57]"><Link href={""}>Discord</Link></li>
                </ul>
            </div>
        </div>
    );
}
