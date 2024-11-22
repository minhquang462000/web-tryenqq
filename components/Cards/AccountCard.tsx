'use client'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function AccountCard() {
    const [isShowPopUp, setIsShowPopUp] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (
                wrapperRef.current &&
                !wrapperRef.current!.contains(event.target) &&
                isShowPopUp
            ) {
                setIsShowPopUp(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isShowPopUp, wrapperRef]);
    return (
        <div ref={wrapperRef} className='text-white relative font-normal text-sm '>
            <button onClick={() => setIsShowPopUp(!isShowPopUp)}
                className='flex justify-between font-medium bg-[#3f94d5]  hover:bg-[#3278ae] h-9 lg:px-4 px-2 rounded-md items-center  gap-1'>
                <FaUser />
                Tài Khoản
                <IoMdArrowDropdown size={20} className={`${isShowPopUp ? "-rotate-180" : ""}  transition-all duration-300`} />
            </button>
            <ul className={`absolute p-4 z-[99] text-black text-base dark:text-white bg-white w-[300px] rounded-md border dark:border-[#3a3b3c] dark:bg-[#3a3b3c] border-[#878787] top-[120%] right-0 ${isShowPopUp ? "block" : "hidden"}`}>
                <Link href={""}> <li className='hover:text-[#f18121] py-1'> Danh sách theo dõi</li></Link>
                <Link href={""}> <li className='hover:text-[#f18121] py-1'>Lịch sử đọc truyện</li></Link>
                <Link href={""}> <li className='hover:text-[#f18121] py-1'> Cài đặt thông tin</li></Link>
                <Link href={""}> <li className='hover:text-[#f18121] py-1'>Đăng xuất</li></Link>
            </ul>
        </div>
    );
}
