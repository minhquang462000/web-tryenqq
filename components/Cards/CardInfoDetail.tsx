"use client"
import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

export interface ICardInfoDetailProps {
}

export default function CardInfoDetail(props: ICardInfoDetailProps) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className='w-full'>
            <span className='flex items-center gap-1 text-lg dark:text-white  text-[#f18121]'><FaInfoCircle />Giới thiệu</span>
            <p className={`leading-6 text-base border-b overflow-hidden transitionProperty-[max-height] duration-300 py-2 ${showMore ? 'max-h-[500px] overflow-y-auto' : 'max-h-[50px]'}`}>
                Lapis là một cô bé mang trong mình lời nguyền của chúa tể bóng tối, nhưng lại khao khát trở thành một Thánh Hiệp Sĩ – là một điều vốn bất khả thi đối với những “kẻ bị nguyền”. Tuy vậy, thay vì đánh bại, cô lại lỡ tay triệu hồi Chúa Tể Bóng Tối.
            </p>
            <button onClick={() => setShowMore(!showMore)} className='w-max bg-[#fba026] transition-all duration-300 text-white p-2 py-1 mt-1 flex m-auto  rounded-md'>{showMore ? 'Ẩn bớt' : 'Xem thêm'}</button>
        </div>
    );
}
