'use client'
import { handleUpdateView } from "@/api/updateView";
import { IBook, ICategory } from "@/interfaces";
import { convertToSlug } from "@/utils";
import { timeFormat } from "@/utils/getTimeDifference";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export interface IAppProps {
    book: IBook
}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL || '';
export default function CardMain({ book }: IAppProps) {
    const pulseStyle = {
        WebkitAnimation: 'pulse 1s steps(1, start) infinite',
        animation: 'pulse 1s steps(1, start)  infinite',
    };
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<any>(null);
    const [style, setStyle] = useState({});

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            if (containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const newX = event.clientX - containerRect.left;
                const newY = event.clientY - containerRect.top;

                // Giới hạn vị trí trong phần tử cha
                const limitedX = Math.max(0, Math.min(newX, containerRect.width));
                const limitedY = Math.max(0, Math.min(newY, containerRect.height));

                setPosition({
                    x: limitedX,
                    y: limitedY,
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);
    useEffect(() => {
        const handleMouseMove = (event: any) => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const newX = event.clientX;
            const newY = event.clientY;
            ;
            const percentToLeft = (newX / viewportWidth) * 100;
            const percentToTop = (newY / viewportHeight) * 100;

            if (percentToLeft < 50) {
                setStyle({
                    left: `${(position.x) + 25}px`,
                    top: position.y + 20,
                });
            } else {
                setStyle({
                    left: `${-400 + position.x - 20}px`,
                    top: position.y + 20,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [position]);
    return (
        <div className='w-full  text-sm '>
            <div className="w-ful rounded-md text-center  flex flex-col gap-2  cursor-pointer relative h-full  m-auto">
                <div onClick={() => handleUpdateView(book?._id)} className=" rounded-md relative overflow-hidden w-full aspect-[3/4]    " >
                    <Link className="w-full h-full"
                        href={`/truyen-tranh/${convertToSlug(book?.name)}-${book?._id}.html}`}>
                        <Image
                            width={150}
                            height={200}
                            className="h-full w-full object-cover"
                            src={`${DOMAIN}/api/books/${book?.images[0]}`}
                            alt={book?.name} />
                    </Link>
                    <span className='text-white absolute  flex gap-1  top-2 left-2 '>
                        <p className='bg-[#56ccf2] w-max px-2 py-1  rounded-md'>{timeFormat(book?.createdAt)}</p>
                        {book?.views > 100 && <span style={pulseStyle} className='bg-[#ff2853]  py-1 px-2 rounded-md'>Hot</span>}
                    </span>
                </div>
                <div
                    ref={containerRef}
                    className='w-full h-max group relative '>
                    <Link href={`/truyen-tranh/${convertToSlug(book?.name)}-${book?._id}.html`}>
                        <h4 onClick={() => handleUpdateView(book?._id)}
                            className="hover:text-[#f18121] w-full text-lg font-semibold overflow-hidden px-1  transition-all duration-300  truncate  ">
                            {book?.name}
                        </h4>
                    </Link>

                    <div
                        style={{ width: '400px', ...style }}
                        className={`p-2 py-3 hidden group-hover:block  font-light  pointer-events-none  transform  text-start  bg-white border absolute z-40 border-black rounded-md`}>
                        <h4 className="font-semibold text-[#f18121]">  {book?.name}</h4>
                        <h4 className="my-2">Tên khác:</h4>
                        <ul className="flex gap-1 flex-col my-2">
                            <li>Tình Trạng: {book?.status === 1 ? "Đang Tiến Hành" : book?.status === 2 ? "Hoàn Thành" : "Sắp ra mắt"}</li>
                            <li>Lượt Xem: {book?.views?.toLocaleString()}</li>
                            <li>Lượt Theo Dõi: {book?.follows?.toLocaleString()}</li>
                        </ul>
                        <ul className="flex gap-1 flex-wrap text-white ">
                            {book?.categories.map((category: ICategory) =>
                                <li key={category._id} className="bg-[#56ccf2] px-2 py-[2px] rounded  ">{category.name}</li>)}
                        </ul>
                        <p className="mt-2 line-clamp-5">
                            {book?.description}
                        </p>
                    </div>
                </div>
                <p className='text-sm font-semibold'>Chương {book?.totalChap || 0}</p>
            </div>
        </div>
    );
}
