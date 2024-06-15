'use client'
import Link from 'next/link';
import { useState } from 'react';
export interface IListFillterStoryOfTypeProps {
}

export default function ListFillterStoryOfType(props: IListFillterStoryOfTypeProps) {
    const [complateFilter, setComplateFilter] = useState(0)
    const [nationalFilter, setNationalFilter] = useState(0)
    return (
        <ul className='bg-white dark:bg-[#242526]  w-full shadow flex text-[#333333] dark:text-white flex-col gap-3 p-4 rounded'>
            <li className='flex w-full items-center gap-2'>
                <p className='text-[#9e9e9e] min-w-[120px]'>Thể loại truyện</p>
                <select style={{ fontFamily: "Poppins, sans-serif" }} className='bg-transparent border px-4 py-2  outline-none rounded' name="" id="">
                    <option value="">Thể loại 1</option>

                </select>
            </li>
            <li className='flex w-full items-center flex-wrap gap-y-1 gap-2'>
                <p className=' min-w-[120px] text-[#9e9e9e]'>Tình trạng</p>
                <ul className='flex items-center flex-wrap text-center gap-3'>
                    <li onClick={() => setComplateFilter(1)} className={`font-medium min-w-[80px] border p-2  rounded-md ${complateFilter === 1 && "bg-[#f18121] border-[#f18121] "}`}>
                        <Link href={""}>Đang tiến hành</Link>
                    </li>
                    <li onClick={() => setComplateFilter(2)} className={`font-medium min-w-[80px] border p-2 rounded-md ${complateFilter === 2 && "bg-[#f18121] border-[#f18121] "}`}>
                        <Link href={""}>Hoàn thành</Link>
                    </li>
                </ul>
            </li>
            <li className='flex w-full items-center gap-2'>
                <p className='text-[#9e9e9e] min-w-[120px]'>Quốc gia</p>
                <ul className='flex flex-wrap items-center mt-2 text-center gap-3'>
                    <li onClick={() => setNationalFilter(1)} className={`font-medium min-w-[80px] border p-2 ${nationalFilter === 1 && "bg-[#f18121] border-[#f18121] "} rounded-md`}>
                        <Link href={""}>Trung Quốc</Link>
                    </li>
                    <li onClick={() => setNationalFilter(2)} className={`font-medium min-w-[80px] border p-2 ${nationalFilter === 2 && "bg-[#f18121] border-[#f18121] "} rounded-md`}>
                        <Link href={""}>Việt Nam</Link>
                    </li>
                    <li onClick={() => setNationalFilter(3)} className={`font-medium min-w-[80px] border p-2 ${nationalFilter === 3 && "bg-[#f18121] border-[#f18121] "} rounded-md`}>
                        <Link href={""}>Hàn Quốc</Link>
                    </li>
                    <li onClick={() => setNationalFilter(4)} className={`font-medium min-w-[80px] border p-2 ${nationalFilter === 4 && "bg-[#f18121] border-[#f18121] "} rounded-md`}>
                        <Link href={""}>Nhật Bản</Link>
                    </li>
                    <li onClick={() => setNationalFilter(5)} className={`font-medium min-w-[80px] border p-2 ${nationalFilter === 5 && "bg-[#f18121] border-[#f18121] "} rounded-md`}>
                        <Link href={""}>Mỹ</Link>
                    </li>

                </ul>
            </li>
            <li className='flex w-full items-center gap-2'>
                <p className='text-[#9e9e9e] min-w-[120px]'>Sắp xếp</p>
                <select style={{ fontFamily: "Poppins, sans-serif" }} className='border px-4 bg-transparent  py-2 boutline-none rounded' name="" id="">
                    <option value="">Ngày đăng giảm dần</option>
                    <option value="">Ngày đăng tăng dần</option>
                    <option value="">Ngày cập nhật giảm dần</option>
                    <option value="">Ngày cậ nhật tăng dần</option>
                    <option value="">Lượt xem giảm dần</option>
                    <option value="">Lượt xem tăng dần</option>
                </select>
            </li>
        </ul>
    );
}
