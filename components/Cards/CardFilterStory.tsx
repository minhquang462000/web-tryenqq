'use client'

import Link from "next/link";
import { useState } from "react";

export interface IAppProps {
}

export default function CardFilterStory(props: IAppProps) {
    const [complateFilter, setComplateFilter] = useState(0)
    const [nationalFilter, setNationalFilter] = useState(0)
    return (
        <div className="bg-white dark:bg-[#242526] shadow p-5 rounded">
            <ul className='flex items-center text-center gap-3'>
                <li className='w-[100px] text-start text-[#9e9e9e]'>Tình trạng</li>
                <li onClick={() => setComplateFilter(1)} className={`font-medium min-w-[80px] border p-2  rounded-md ${complateFilter === 1 && "bg-[#f18121] border-[#f18121] text-white"}`}>
                    <Link href={""}>Đang tiến hành</Link>
                </li>
                <li onClick={() => setComplateFilter(2)} className={`font-medium min-w-[80px] border p-2 rounded-md ${complateFilter === 2 && "bg-[#f18121] border-[#f18121] text-white"}`}>
                    <Link href={""}>Hoàn thành</Link>
                </li>
            </ul>
            <ul className='flex items-center mt-2 text-center gap-3'>
                <li className='w-[100px] text-start text-[#9e9e9e]'>Quôc gia</li>
                <li onClick={() => setNationalFilter(1)} className={`font-medium min-w-[80px] border p-2 ${nationalFilter === 1 && "bg-[#f18121] border-[#f18121] text-white"} rounded-md`}>
                    <Link href={""}>Trung Quốc</Link>
                </li>
                <li onClick={() => setNationalFilter(2)} className={`font-medium min-w-[80px] border p-2 ${nationalFilter === 2 && "bg-[#f18121] border-[#f18121] text-white"} rounded-md`}>
                    <Link href={""}>Việt Nam</Link>
                </li>
                <li onClick={() => setNationalFilter(3)} className={`font-medium min-w-[80px] border p-2 ${nationalFilter === 3 && "bg-[#f18121] border-[#f18121] text-white"} rounded-md`}>
                    <Link href={""}>Hàn Quốc</Link>
                </li>
                <li onClick={() => setNationalFilter(4)} className={`font-medium min-w-[80px] border p-2 ${nationalFilter === 4 && "bg-[#f18121] border-[#f18121] text-white"} rounded-md`}>
                    <Link href={""}>Nhật Bản</Link>
                </li>
                <li onClick={() => setNationalFilter(5)} className={`font-medium min-w-[80px] border p-2 ${nationalFilter === 5 && "bg-[#f18121] border-[#f18121] text-white"} rounded-md`}>
                    <Link href={""}>Mỹ</Link>
                </li>

            </ul>
        </div>
    );
}
