
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaHeart, FaHome, FaListUl, FaUndo } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward, IoIosWarning } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export interface IAppProps {
}

export default function CardDashboardChapter(props: IAppProps) {
    return (
        <div className="w-full lg:max-w-[1200px] m-auto flex flex-col gap-2 text-sm bg-white dark:bg-[#242526] p-5 rounded">
            <ul className="flex  font-semibold flex-wrap lg:font-semibold   items-center gap-2 lg:text-base text-sm">
                <li className="">
                    <Link href={"/"}> Trang chủ</Link>
                </li>
                <li className='before:content-["/"] before:mr-3'>
                    <Link href={""}>Kiếm nghịch thương khung</Link>
                </li>
                <li className='before:content-["/"] before:mr-3'>
                    <Link href={""}>Chương 1</Link>
                </li>
            </ul>
            <span className='flex flex-wrap text-lg lg:jus gap-2 font-medium justify-center lg:justify-start  '>
                <h1 className=' cursor-pointer  '>Lời Thú Nhận Của Chúa tể Bóng Tối</h1>
                <p >- Chapter 1</p>
                <p className=' text-[#666666] text-start'>(Cập nhật lúc: 15:43 16/03/2024)</p>
            </span>

            <h3 className=' text-[#666666] text-center'>Nếu không xem được truyện vui lòng đổi "SERVER HÌNH" bên dưới</h3>
            <div className='flex gap-1 justify-center text-white '>
                <button className=' bg-[#5cb85c] p-1 px-2  rounded hover:text-[#f18121] border border-[#4cae4c]'><Link href={""}>Server 1</Link></button>
                <button className=' bg-[#428bca] p-1 px-2  rounded hover:text-[#f18121] border border-[#357ebd]'><Link href={""}>Server 2</Link></button>
                <button className=' bg-[#428bca] p-1 px-2  rounded hover:text-[#f18121] border border-[#357ebd]'><Link href={""}>Server 3</Link></button>
                <button className=' bg-[#428bca] p-1 px-2  rounded hover:text-[#f18121] border border-[#357ebd]'><Link href={""}>Server Vip</Link></button>
            </div>
            <button className="bg-[#f0ad4e] p-1 px-2 w-max m-auto rounded flex items-center text-white gap-1 hover:text-[#f18121] border  border-[#eea236]">
                <IoIosWarning /> Báo Lỗi Chương
            </button>
            <div className="flex items-start italic rounded-md my-2 justify-center text-center gap-1 bg-[#d9edf7] text-[#31708f] px-8 py-4">
                <FaCircleInfo className="mt-1" />
                Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter
            </div>
            <div className='flex items-center mt-1 justify-center gap-1'>
                <Link href={""}>
                    <button className="bg-[#DDDDDD] text-white  hover:text-[#f18121]   border h-8 border-[d43f3a] flex items-center gap-1  p-1 px-4 rounded ">
                        <FaArrowLeft size={13} /> Chap trước
                    </button>
                </Link>
                <Link href={""}>
                    <button className="bg-[#5bc0de;] text-white  hover:text-[#f18121] fborder h-8 border-[d43f3a] flex items-center gap-1  p-1 px-4 rounded ">
                        Chap sau
                        <FaArrowRight size={13} />
                    </button>
                </Link>
            </div>
        </div>
    );
}
