import Link from 'next/link';
import * as React from 'react';
import { FaBook, FaHeart, FaPlus, FaRegEye, FaRss, FaThumbsUp, FaUser } from 'react-icons/fa';
import { TiLocationArrow } from 'react-icons/ti';

export interface ICardItemDetailProps {
}

export default function CardItemDetail(props: ICardItemDetailProps) {
    return (
        <div className='my-3 lg:my-8 flex  flex-col lg:flex-row lg:items-start lg:gap-8 gap-4'>
            <img className=" w-[200px] rounded-md shadow-md shadow-[#666666] m-auto lg:m-0 object-cover"
                src={"https://i.truyenvua.com/ebook/190x247/loi-thu-nhan-cua-chua-te-bong-toi_1710578139.jpg?gt=hdfgdfg&mobile=2"}
                alt="img" />
            <div className='flex flex-col w-full gap-2'>
                <h3 className='font-semibold text-xl'>Lời Thú Nhận Của Chúa Tể Bóng Tối</h3>
                <ul className='flex flex-col gap-2'>
                    <li className='flex items-center'>
                        <span className='flex items-center gap-2 w-[150px]'><FaPlus />Tên khác</span>
                        <p className='font-semibold'>The Dark Lord's Confession</p>
                    </li>
                    <li className='flex items-center'>
                        <span className='flex items-center gap-2 w-[150px]'><FaUser />Tác giả </span>
                        <p className='hover:text-[#f18121]'><Link href={""}>Topseung</Link></p>
                    </li>
                    <li className='flex items-center'>
                        <span className='flex items-center gap-2 w-[150px]'><FaRss />Tình trạng </span>
                        <p>Đang Cập Nhật</p>
                    </li>
                    <li className='flex items-center'>
                        <span className='flex items-center gap-2 w-[150px]'><FaThumbsUp />Lượt thích </span>
                        <p>159</p>
                    </li>
                    <li className='flex items-center'>
                        <span className='flex items-center gap-2 w-[150px]'><FaHeart />Lượt theo dõi</span>
                        <p>1,683</p>
                    </li>
                    <li className='flex items-center'>
                        <span className='flex items-center gap-2 w-[150px]'><FaRegEye />Lượt xem </span>
                        <p>128,025</p>
                    </li>
                </ul>
                <ul className="flex gap-2 flex-wrap text-[#f18121] dark:text-white ">
                    <li className="border-[#f18121] hover:bg-[#f18121] hover:text-white border-[1px] px-[5px] py-[2px] rounded "><Link href={"/the-loai/a"}>Action</Link></li>
                    <li className="border-[#f18121] hover:bg-[#f18121] hover:text-white border-[1px] px-[5px] py-[2px] rounded "><Link href={"/the-loai/c"}>Comedy</Link></li>
                    <li className="border-[#f18121] hover:bg-[#f18121] hover:text-white border-[1px] px-[5px] py-[2px] rounded "><Link href={"/the-loai/d"}>Drama</Link></li>
                    <li className="border-[#f18121] hover:bg-[#f18121] hover:text-white border-[1px] px-[5px] py-[2px] rounded "><Link href={"/the-loai/w"}>WebTool</Link></li>
                </ul>
                <div className='flex flex-wrap text-white gap-x-1 gap-y-3 justify-center lg:justify-start'>
                    <button className='w-[49%] lg:max-w-[120px] py-2 rounded-md flex hover:bg-opacity-60 transition-all duration-300 bg-[#8bc34a]  items-center gap-1 justify-center'><FaBook className='-skew-x-12 ' size={14} /><Link href={"/truyen-tranh/ten-truyen/-a"}> Đọc từ đầu</Link></button>
                    <button className='w-[49%] lg:max-w-[120px] py-2 rounded-md flex hover:bg-opacity-60 transition-all duration-300 bg-[#ff3860] items-center gap-1 justify-center'><FaHeart size={14} /> Theo dõi</button>
                    <button className='w-[49%] lg:max-w-[120px] py-2 rounded-md flex hover:bg-opacity-60 transition-all duration-300 bg-[#bd10e0] items-center gap-1 justify-center'><FaThumbsUp size={14} />Thích</button>
                    <button className='w-[49%] lg:max-w-[120px] py-2 rounded-md flex hover:bg-opacity-60 transition-all duration-300 bg-[#209cee] items-center gap-1 justify-center'><TiLocationArrow size={14} />Đọc tiếp</button>
                </div>
            </div>

        </div>
    );
}
