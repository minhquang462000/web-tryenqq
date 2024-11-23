"use client";
import { convertNumber } from "@/utils";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
export interface IRootPaginationProps {
  page: any;
  limit: number;
  total: number;
  handleQuery?: any;
}
export default function RootPagination(props: IRootPaginationProps) {
  const { page, limit, total, handleQuery } = props;
  const pathName = usePathname();
  const totalPage = Math.ceil(total / Number(limit));
  const nextPage = page + 1 > totalPage ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;
  const router = useRouter();
  const handleChangPage = (page: number) => {
    if (handleQuery) {
      handleQuery("page", page);
    } else {
      router.push(`${pathName}/?page=${page}`);
    }
  };
  const renderPagination = () => {
    if (totalPage <= 10) {
      return Array.from({ length: totalPage }, (_, index) => (
        <button
          key={index}
          onClick={() => handleChangPage(index + 1)}
          className={`border border-[#cdcdcd] w-10 h-10  transition-all duration-300 flex justify-center   items-center rounded-full ${
            page === index + 1
              ? "bg-[#f18121] text-white border-[#f18121]"
              : "hover:bg-[#f18121] hover:text-white hover:border-[#f18121]"
          } 
        `}
        >
          {index + 1}
        </button>
      ));
    }
    let pages = [page];
    let results: string[] = [];
    const firstPages = [1, 2];
    const lastPages = [totalPage - 1, totalPage];
    let i = 1;
    const doneSides: string[] = [];

    while (pages.length < 7) {
      const left = page - i;
      if (left <= 0 || firstPages.includes(left)) {
        if (!doneSides.includes("left")) {
          const filter = pages.filter((item) => !firstPages.includes(item));
          pages = [...firstPages, ...filter];
          doneSides.push("left");
        }
      } else {
        pages = [left, ...pages];
      }

      const right = page + i;

      if (right > totalPage || lastPages.includes(right)) {
        if (!doneSides.includes("right")) {
          const filter = pages.filter((item) => !lastPages.includes(item));
          pages = [...filter, ...lastPages];
          doneSides.push("right");
        }
      } else {
        if (!pages.includes(right)) {
          pages = [...pages, right];
        }
      }
      i++;
    }

    results = pages.map((item) => item.toString());
    if (!doneSides.includes("left")) {
      results = [
        ...firstPages.map((item) => item.toString()),
        "...",
        ...pages.map((item) => item.toString()),
      ];
    }

    if (!doneSides.includes("right")) {
      results = [
        ...results.map((item) => item.toString()),
        "...",
        ...lastPages.map((item) => item.toString()),
      ];
    }
    return results.map((item, index) => {
      if (item == "...") {
        return (
          <li
            key={index}
            className={`border border-[#cdcdcd] w-10 h-10  transition-all duration-300 flex justify-center hover:bg-[#f18121] hover:border-[#f18121] hover:text-white items-center rounded-full`}
          >
            {item}
          </li>
        );
      }
      return (
        <button
          key={index}
          className={` ${
            parseInt(item) == page
              ? "bg-[#f18121] text-white border-[#f18121]"
              : "hover:bg-[#f18121] hover:text-white hover:border-[#f18121]"
          } border border-[#cdcdcd] w-10 h-10  transition-all duration-300 flex justify-center   items-center rounded-full `}
        >
          {convertNumber(parseInt(item))}
        </button>
      );
    });
  };
  return (
    <div
      className={`w-max max-w-full m-auto  p-[1px]  ${
        totalPage <= 1 && "hidden"
      }`}
      aria-label="Page navigation example"
    >
      <div className="flex justify-center  gap-1  font-medium flex-wrap items-center">
        <button
          disabled={page == 1}
          onClick={() => handleChangPage(prevPage ?? 1)}
          className={` border border-[#cdcdcd] w-10 h-10 transition-all duration-300 flex justify-center hover:bg-[#f18121] hover:border-[#f18121] hover:text-white items-center rounded-full
            ${page == 1 && "cursor-wait"}`}
        >
          <MdKeyboardArrowLeft />
        </button>

        {renderPagination()}
        <button
          disabled={page == totalPage}
          onClick={() => handleChangPage(nextPage ?? totalPage)}
          className={`border border-[#cdcdcd] w-10 h-10  transition-all duration-300 flex justify-center hover:bg-[#f18121] hover:border-[#f18121] hover:text-white items-center rounded-full
            ${page == totalPage && "cursor-wait"}`}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
