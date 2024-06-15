'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaHeart, FaHome, FaListUl, FaUndo } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

export interface IChangeChapterProps {
}

export default function ChangeChapter(props: IChangeChapterProps) {
    const [follow, setFollow] = useState(false)
    const [openListChapter, setOpenListChapter] = useState(false)
    return (
        <div className='w-full   h-full '>
            <div className='flex w-full fixed bottom-0 z-20 items-center shadow-top dark:text-black shadow-[#494949] bg-[#242526] p-2  text-lg gap-4 overflow-hidden justify-center'>
                <Link href={""}> <span className='md:text-3xl mt-2 hover:text-[#f18121] text-white text-2xl'><FaHome /></span></Link>
                <Link href={""}> <span className='md:text-3xl mt-2 hover:text-[#f18121] text-white text-2xl'><FaUndo /></span></Link>
                <div className='flex items-center justify-center   gap-2'>
                    <button className='bg-[#575859] h-8 w-8 md:w-10 md:h-10 rounded-full flex justify-center items-center'><Link href={""}> <IoIosArrowBack size={20} /></Link></button>
                    <button onClick={() => setOpenListChapter(true)} className=' p-2  md:h-10 text-sm md:text-base rounded outline-none bg-white' name="" id="">
                        Chương 1
                    </button>
                    <button className='bg-[#fff] h-8 w-8 md:w-10 md:h-10 rounded-full flex justify-center items-center'><Link href={""}><IoIosArrowForward size={20} /></Link></button>
                </div>
                <button onClick={() => setFollow(!follow)} className=" flex justify-center items-center gap-1  md:px-4  md:w-max md:h-10 w-9 h-9 border-[d43f3a] bg-[#dbdbdb]  rounded-md ">
                    {follow ? <IoClose size={20} /> : <FaHeart size={15} />}
                    <p className='hidden md:block'>{follow ? "Hủy theo dõi" : "Theo dõi"}</p>
                </button>
            </div>
            <div className={`bg-[#333] fixed top-0 z-[21] w-screen lg:text-lg h-screen bg-opacity-40 ${openListChapter ? "block" : "hidden"}`}>
                <div className=' overflow-hidden md:w-[500px] px-1 md:px-4 py-3 m-auto h-[90%] my-10 bg-white'>
                    <div className='flex px-3 items-center justify-between'>
                        <input className='border p-2 px-4 w-[80%] rounded' type="text" placeholder='Nhập sỗ chương , ví dụ: 100' />
                        <button onClick={() => setOpenListChapter(false)} > <IoClose size={25} /></button>
                    </div>
                    <ul className='max-h-[85%] overflow-y-auto mt-3 border-t mb-10 flex flex-col gap-2 p-3 text-center'>
                        <li className={`border p-1 md:p-2`}><Link href={""}>Chương 1</Link></li>

                        <li className={`border p-1 md:p-2 border-[#f18121] text-[#f18121]`}><Link href={""}>Chương 1</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
