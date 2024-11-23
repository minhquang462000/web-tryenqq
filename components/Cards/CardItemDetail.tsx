"use client";
import { addListFavorite } from "@/api/favorite";
import { IBook } from "@/interfaces";
import { convertNumber, convertToSlug } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import {
  FaBook,
  FaHeart,
  FaPlus,
  FaRegEye,
  FaRss,
  FaThumbsUp,
  FaUser,
} from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";

const DOMAIN = process.env.NEXT_PUBLIC_API_URL || "";

export default function CardItemDetail({ book }: { book: IBook }) {
  return (
    <div className="my-3 lg:my-8 flex  flex-col lg:flex-row lg:items-start lg:gap-8 gap-4">
      <Image
        width={200}
        height={250}
        className=" w-[200px] aspect-[3/4] rounded-md shadow-md shadow-[#666666] m-auto lg:m-0 object-cover"
        src={`${DOMAIN}/api/books/${book?.images[0]}`}
        alt="img"
      />
      <div className="flex flex-col w-full gap-2">
        <h3 className="font-semibold text-xl">{book?.name}</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center">
            <span className="flex items-center gap-2 w-[150px]">
              <FaPlus />
              Tên khác
            </span>
            <p className="font-semibold">{book?.name}</p>
          </li>
          <li className="flex items-center">
            <span className="flex items-center gap-2 w-[150px]">
              <FaUser />
              Tác giả{" "}
            </span>
            <p className="hover:text-[#f18121]">
              <Link
                href={`/tac-gia/${convertToSlug(book?.authors[0]?.name)}-${
                  book?.authors[0]?._id
                }.html`}
              >
                {" "}
                {book?.authors[0]?.name}
              </Link>
            </p>
          </li>
          <li className="flex items-center">
            <span className="flex items-center gap-2 w-[150px]">
              <FaRss />
              Tình trạng{" "}
            </span>
            <p>
              {book?.status === 2
                ? "Hoàn thành"
                : book?.status === 1
                ? "Đang tiến hành"
                : "Sắp ra mawtsF"}
            </p>
          </li>
          <li className="flex items-center">
            <span className="flex items-center gap-2 w-[150px]">
              <FaThumbsUp />
              Lượt thích{" "}
            </span>
            <p>{"3,000"}</p>
          </li>
          <li className="flex items-center">
            <span className="flex items-center gap-2 w-[150px]">
              <FaHeart />
              Lượt theo dõi
            </span>
            <p>{book?.follows?.toLocaleString()}</p>
          </li>
          <li className="flex items-center">
            <span className="flex items-center gap-2 w-[150px]">
              <FaRegEye />
              Lượt xem{" "}
            </span>
            <p>{book?.views?.toLocaleString()}</p>
          </li>
        </ul>
        <ul className="flex gap-2 flex-wrap text-[#f18121]  ">
          {book?.categories?.map((category, index) => (
            <li
              key={index}
              className="border-[#f18121] hover:bg-[#f18121] hover:text-white border-[1px] px-[5px] py-[2px] rounded "
            >
              <Link
                href={`/the-loai/${convertToSlug(category?.name)}-${
                  category?._id
                }.html`}
              >
                {category?.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-2 md:flex text-white gap-x-1 gap-y-3  justify-start">
          <Link
            href={`/truyen-tranh/${convertToSlug(book?.name)}/chapter_01.html`}
          >
            {" "}
            <li className=" p-2 w-full  md:w-[120px] rounded-md flex hover:bg-opacity-60 transition-all duration-300 bg-[#8bc34a]  items-center gap-1 justify-center">
              <FaBook className="-skew-x-12 " size={14} />
              Đọc từ đầu
            </li>
          </Link>

          <li
            onClick={() => addListFavorite(book?._id)}
            className=" p-2  w-full md:w-[120px] rounded-md flex hover:bg-opacity-60 transition-all duration-300 bg-[#ff3860] items-center gap-1 justify-center"
          >
            <FaHeart size={14} /> Theo dõi
          </li>
          <li className=" p-2 w-full md:w-[120px] rounded-md flex hover:bg-opacity-60 transition-all duration-300 bg-[#bd10e0] items-center gap-1 justify-center">
            <FaThumbsUp size={14} />
            Thích
          </li>
          <Link
            href={`/truyen-tranh/${convertToSlug(book?.name)}/doc-tiep.html`}
          >
            <li className="  p-2  w-full md:w-[120px] rounded-md flex hover:bg-opacity-60 transition-all duration-300 bg-[#209cee] items-center gap-1 justify-center">
              <TiLocationArrow size={14} />
              Đọc tiếp
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
