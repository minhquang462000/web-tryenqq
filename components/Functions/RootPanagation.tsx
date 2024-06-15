import Link from 'next/link';
import * as React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

export interface IPanagationPageProps {
}

export default function RootPanagation(props: IPanagationPageProps) {
  return (
    <ul className='flex font-extrabold  w-max m-auto pb-5 items-center gap-2'>
      <li className='border border-[#cdcdcd] w-10 h-10 cursor-pointer transition-all duration-300 flex justify-center hover:bg-[#f18121] hover:border-[#f18121] hover:text-white items-center rounded-full'>
        <Link href=''><MdOutlineKeyboardDoubleArrowLeft /></Link>
      </li>
      <li className='border border-[#cdcdcd] w-10 h-10 cursor-pointer transition-all duration-300 flex justify-center hover:bg-[#f18121] hover:border-[#f18121] hover:text-white items-center rounded-full'>
        <Link href=''><MdKeyboardArrowLeft /></Link>
      </li>
      <li className='border border-[#cdcdcd] w-10 h-10 cursor-pointer transition-all duration-300 flex justify-center hover:bg-[#f18121] hover:border-[#f18121] hover:text-white items-center rounded-full'>
        <Link href=''>1</Link></li>
      <li className='border border-[#cdcdcd] w-10 h-10 cursor-pointer transition-all duration-300 flex justify-center hover:bg-[#f18121] hover:border-[#f18121] hover:text-white items-center rounded-full'>
        <Link href=''><MdKeyboardArrowRight /></Link>
      </li>
      <li className='border border-[#cdcdcd] w-10 h-10 cursor-pointer transition-all duration-300 flex justify-center hover:bg-[#f18121] hover:border-[#f18121] hover:text-white items-center rounded-full'>
        <Link href=''><MdOutlineKeyboardDoubleArrowRight /></Link>
      </li>
    </ul>
  );
}
