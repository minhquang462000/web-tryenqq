
'use client'

import { handleUpdateView } from "@/api/updateView";
import { IBook } from "@/interfaces";
import Image from "next/image";

const DOMAIN = process.env.NEXT_PUBLIC_API_URL || '';
export default function CardStorySearch({ book }: { book: IBook }) {
    return (
        <div onClick={() => { () => handleUpdateView(book?._id) }}
            className="flex p-2 px-3 hover:bg-[#cacece] dark:bg-[#3a3b3c] dark:border-[#2a2b2c]  gap-3 border-b-[2.5px] border-[#cacece] justify-between">
            <Image
                width={70}
                height={90}
                className="w-[70px] aspect-[3/4] object-cover"
                src={`${DOMAIN}/api/books/${book?.images[0]}`}
                alt="" />
            <div className="flex py-1 gap-1 flex-col">
                <h4 className="font-semibold text-sm  lg:text-base">{book?.name}</h4>
                <p className="w-full font-medium  line-clamp-3 text-wrap">
                    {book?.description}
                </p>
                <p className="text-xs lg:text-sm font-light">Chương 460</p>
            </div>
        </div>
    );
}
