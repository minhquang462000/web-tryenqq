"use client";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils";
import Link from "next/link";
import { CgCloseO } from "react-icons/cg";
import Image from "next/image";
import { handleUpdateView } from "@/api/updateView";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL || "";

export default function CardStoryFollow({ book }: { book: IBook }) {
  return (
    <div className="w-full text-center relative">
      <Link
        href={`/truyen-tranh/${convertToSlug(book?.name)}-${book?._id}.html`}
      >
        <Image
          onClick={() => handleUpdateView(book?._id)}
          width={200}
          height={300}
          className="w-full  object-cover rounded-md  aspect-[3/4] cursor-pointer"
          src={`${DOMAIN}/api/books/${book?.images[0]}`}
          alt={book?.name}
        />
      </Link>
      <Link
        href={`/truyen-tranh/${convertToSlug(book?.name)}-${book?._id}.html`}
      >
        <h4
          onClick={() => handleUpdateView(book?._id)}
          className="cursor-pointer hover:text-[#f18121] transition-all duration-300  w-full mt-2 overflow-hidden truncate font-bold text-base"
        >
          {book?.name}
        </h4>
      </Link>
      <button className="hover:text-[#f18121] transition-all duration-300 font-semibold text-sm">
        {" "}
        Đọc tiếp chương 1
      </button>
      <div className="absolute top-0 right-0 w-full p-[5px] flex items-center justify-between">
        <p className="bg-[#56ccf2] px-2 text-white py-1 text-xs lg:px-1 rounded-md">
          1 Ngày trước
        </p>
        <button className=" bg-white w-6 h-6 flex justify-center text-black items-center font-bold rounded-full">
          <CgCloseO size={18} />
        </button>
      </div>
    </div>
  );
}
