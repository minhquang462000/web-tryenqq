"use client";
import { IoSearch } from "react-icons/io5";
import CardStorySearch from "../Cards/CardStorySreach";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IBook } from "@/interfaces";
import axios from "axios";
import { convertToSlug } from "@/utils";
import { useRouter } from "next/navigation";
export interface IAppProps {}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL || "";
export default function SearchHeader(props: IAppProps) {
  const [keyWord, setKeyWord] = useState("");
  const [dataBookSearch, setDataBookSearch] = useState<IBook[]>([]);
  const router = useRouter();
  useEffect(() => {
    if (keyWord.length > 3) {
      try {
        const fetchData = async () => {
          const res = await axios.get(
            `${DOMAIN}/api/client/books?name=${keyWord}&limit=3`
          );
          setDataBookSearch(res.data);
        };
        fetchData();
      } catch (e) {
        console.log(e);
      }
    }
  }, [keyWord]);
  const handleChangePage = () => {
    if (dataBookSearch.length > 0) {
      router.push(`/tim-kiem-nang-cao?search=${convertToSlug(keyWord)}`);
    }
    setKeyWord("");
  };
  const onPressEnter = (e: any) => {
    if (e.key === "Enter") {
      handleChangePage();
    }
  };
  return (
    <div
      className={`border mx-3 border-[#c0c0c0]  relative dark:border-transparent dark:bg-[#3a3b3c]  flex justify-between lg:w-[450px]   px-4 py-3 rounded-full`}
    >
      <input
        className="font-light w-full outline-none bg-transparent"
        type="text"
        value={keyWord}
        onKeyPress={onPressEnter}
        onChange={(e) => {
          setKeyWord(e.target.value);
        }}
        placeholder="Bạn muốn tìm truyện gì..."
      />
      <button
        className="text-[#f18121] dark:text-[#ebebeb]"
        onClick={handleChangePage}
      >
        <IoSearch size={18} />
      </button>
      <div
        className={`w-full z-[999] p-2 absolute max-h-[400px] overflow-y-auto top-[110%] shadow-[0px_1px_3px_0px_#999] right-0 bg-white dark:bg-[#3a3b3c] rounded-md
         ${keyWord.length > 0 ? "" : "hidden"}`}
      >
        {dataBookSearch.length <= 0 && (
          <p className="text-sm p-3">Không Tìm Thấy Kết Quả Nào!</p>
        )}
        {dataBookSearch.map((book) => (
          <Link
            key={book._id}
            href={`/truyen-tranh/${convertToSlug(book?.name)}-${
              book?._id
            }.html`}
          >
            <CardStorySearch key={book._id} book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
}
