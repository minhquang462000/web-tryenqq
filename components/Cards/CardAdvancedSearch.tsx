"use client";
import { ICategory } from "@/interfaces";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { ImCheckmark } from "react-icons/im";

export interface IAppProps {
  categories: ICategory[];
  handleQuery: (queryType: string, value: any) => void;
  chapter: string;
  nation: string;
  status: any;
  query: { [key: string]: any };
  search: string;
  setQuery: (query: { [key: string]: any }) => void;
}
export default function CardAdvancedSearch({
  categories,
  handleQuery,
  chapter,
  nation,
  search,
  status,
  query,
  setQuery,
}: IAppProps) {
  const router = useRouter();
  const [showCardFindStory, setShowCardFindStory] = useState(false);
  const handleFilterCategory = (id: string) => {
    if (!query.categories.includes(id)) {
      setQuery({ ...query, categories: [...query.categories, id] });
    } else {
      setQuery({
        ...query,
        categories: query.categories.filter((item: string) => item !== id),
      });
    }
  };
  const handleReset = () => {
    if (search !== "") {
      router.push(`/tim-kiem-nang-cao?search=${search}`);
      setQuery({ search });
    } else {
      router.push(`/tim-kiem-nang-cao`);
      setQuery({});
    }
  };
  // Các trạng thái khác nhau
  return (
    <section className="bg-white dark:bg-[#242526] rounded-md text-xs md:text-sm  shadow px-5  py-4 w-full  lg:max-w-[1200px] m-auto">
      <button
        onClick={() => setShowCardFindStory(!showCardFindStory)}
        className=" flex w-max m-auto  bg-[#5bc0de] text-white font-bold p-2 rounded-md"
      >
        {!showCardFindStory ? "Ẩn khung tìm kiếm" : "Hiện khung tìm kiếm"}
      </button>
      <div
        className={`flex flex-col mb-5 gap-4 ${
          !showCardFindStory ? "block" : "hidden"
        }`}
      >
        <ul className="w-full flex flex-col gap-1">
          <li className="flex items-center gap-2">
            <button className="border w-[15px] flex justify-center items-center h-[15px] border-[#666666]">
              <ImCheckmark color="#6cb463" />
            </button>
            Tìm trong những thể loại này
          </li>
          <li className="flex items-center gap-2">
            <button className="border w-[15px] flex justify-center items-center h-[15px] border-[#666666]"></button>
            Truyện có thể thuộc hoặc không thuộc thể loại này
          </li>
        </ul>
        <button
          onClick={handleReset}
          className="bg-[#428bca] border font-semibold flex items-center gap-1 m-auto w-max border-[#357ebd] text-white hover:text-[#f18121] md:p-2 p-1 rounded-md"
        >
          <GrPowerReset className="" /> Reset
        </button>
        <div className="w-full flex flex-col gap-1">
          <h3 className="text-[#666666] font-semibold text-base lg:text-lg">
            Thể loại truyện
          </h3>
          <ul className="w-full px-2 grid grid-cols-2 md:grid-cols-3 gap-1">
            {categories.map((category, index) => (
              <li
                onClick={() => handleFilterCategory(category?._id)}
                key={index}
                className="flex  items-center gap-2"
              >
                <button className="w-4 h-4 overflow-hidden relative border border-[#666] rounded-sm">
                  <span
                    className={`absolute w-full h-full  transition-all  flex justify-center items-center duration-300  ${
                      query?.categories?.includes(category?._id)
                        ? "top-0"
                        : "top-[100%]"
                    } left-0 `}
                  >
                    <ImCheckmark color="#6cb463" />
                  </span>
                </button>
                {category?.name}
              </li>
            ))}
          </ul>
        </div>
        <ul className="w-full text-[#4a4a4a] dark:text-[#ebebeb]  grid grid-cols-1 md:grid-cols-2 gap-5">
          <li className="flex items-center font-semibold  justify-between">
            <p className="w-1/2 text-base lg:text-lg ">Quốc gia</p>
            <select
              style={{ fontFamily: "Poppins, sans-serif" }}
              onChange={(e) => setQuery({ ...query, nation: e.target.value })}
              defaultValue={nation}
              className="w-1/2  border-2 px-3 outline-none  bg-transparent dark:bg-white dark:text-[#4a4a4a] p-2 rounded-md"
              name=""
              id=""
            >
              <option value="all">Tất cả</option>
              <option value="trung-quoc">Trung Quốc</option>
              <option value="viet-nam">Việt Nam</option>
              <option value="han-quoc">Hàn Quốc</option>
              <option value="nhat-ban">Nhật Bản</option>
              <option value="my">Mỹ</option>
            </select>
          </li>
          <li className="flex items-center font-semibold  justify-between">
            <p className="w-1/2 text-base lg:text-lg ">Tình Trạng</p>
            <select
              style={{ fontFamily: "Poppins, sans-serif" }}
              onChange={(e) => setQuery({ ...query, status: e.target.value })}
              defaultValue={status}
              className="w-1/2  border-2 px-3 outline-none  bg-transparent dark:bg-white dark:text-[#4a4a4a] p-2 rounded-md"
              name=""
              id=""
            >
              <option value="">Tất cả</option>
              <option value="1">Đang tiến hành</option>
              <option value="2">Hoàn thành</option>
            </select>
          </li>
          <li className="flex items-center font-semibold  justify-between">
            <p className="w-1/2 text-base lg:text-lg ">Số lượng chương</p>
            <select
              style={{ fontFamily: "Poppins, sans-serif" }}
              onChange={(e) => setQuery({ ...query, chapter: e.target.value })}
              defaultValue={chapter}
              className="w-1/2  border-2 px-3 outline-none  bg-transparent dark:bg-white dark:text-[#4a4a4a] p-2 rounded-md"
              name=""
              id=""
            >
              <option value="all">{"> 0"}</option>
              <option value="50">{">= 50"}</option>
              <option value="100">{">= 100"}</option>
              <option value="200">{">= 200"}</option>
              <option value="300">{">= 300"}</option>
              <option value="400">{">= 400"}</option>
              <option value="500">{">= 500"}</option>
            </select>
          </li>
          <li className="flex items-center font-semibold  justify-between">
            <p className="w-1/2 text-base lg:text-lg ">Sắp xếp</p>
            <select
              style={{ fontFamily: "Poppins, sans-serif" }}
              onChange={(e) => setQuery({ ...query, q: e.target.value })}
              className="w-1/2  border-2 px-3 outline-none  bg-transparent dark:bg-white dark:text-[#4a4a4a] p-2 rounded-md"
              name=""
              id=""
            >
              <option value="post-desc">Ngày đăng giảm dần</option>
              <option value="post-asc">Ngày đăng tăng dần</option>
              <option value="update-desc">Ngày cập nhật giảm dần</option>
              <option value="update-asc">Ngày cập nhật tăng dần</option>
              <option value="view-desc">Ngày xem giảm dần</option>
              <option value="view-asc">Ngày xem tăng dần</option>
            </select>
          </li>
        </ul>
        <button
          onClick={() => handleQuery("", "")}
          className=" flex w-max m-auto border border-[#4cae4c] hover:bg-[#1c911c]  bg-[#5cb85c] text-white font-bold p-2 lg:px-3 rounded-md"
        >
          Tìm kiếm
        </button>
      </div>
    </section>
  );
}
