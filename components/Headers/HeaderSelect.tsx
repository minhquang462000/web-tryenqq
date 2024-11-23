"use client";
import { ICategory } from "@/interfaces";
import { convertToSlug } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaListAlt, FaWindowClose } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
export interface IHeaderSelectProps {
  categories: ICategory[];
}

export default function HeaderSelect({ categories }: IHeaderSelectProps) {
  const [openTabSelect, setOpenTabSelect] = useState(false);
  const [openTabCategories, setOpenTabCategories] = useState(false);
  const [openTabTop, setOpenTabTop] = useState(false);
  const router = useRouter();
  const user = Cookies.get("user");
  const handleChangePageFollow = () => {
    if (user) {
      router.push("/truyen-dang-theo-doi");
    } else {
     toast.error("Hãy đăng nhập để vào danh sách!");
    }
  }
  return (
    <section className="w-full sticky top-0 z-50 text-white px-2  text-sm dark:bg-[#242526] bg-[#f18121]">
      <div className="lg:max-w-[1200px] lg:flex lg:px-3 mx-auto">
        <ToastContainer  autoClose={1500}/>
        <nav className="p-2 py-3  lg:w-max flex md:hover:bg-[#f29c57] justify-between items-center cursor-pointer  ">
          <Link href={"/"}>Trang Chủ</Link>
          <button
            className="lg:hidden"
            onClick={() => setOpenTabSelect(!openTabSelect)}
          >
            {!openTabSelect ? (
              <FaListAlt size={30} />
            ) : (
              <FaWindowClose size={30} />
            )}
          </button>
        </nav>
        <ul
          className={` ${
            openTabSelect ? "block lg:inline-flex" : "hidden lg:inline-flex"
          } lg:gap-0    gap-2`}
        >
          <li className=" w-full group   lg:w-max ">
            <button
              onClick={() => setOpenTabCategories(!openTabCategories)}
              className="p-2 w-full py-4 hover:bg-[#f29c57] flex items-center"
            >
              Thể Loại
              <IoMdArrowDropdown size={20} />
            </button>
            <div
              className={`lg:group-hover:block  ${
                openTabCategories ? "block lg:hidden" : "hidden "
              }  lg:p-2 z-20 w-full  bg-white dark:bg-[#242526] dark:border-y left-0 lg:absolute`}
            >
              <ul
                className={`  lg:max-w-[1200px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 lg:mx-auto lg:font-normal  gap-y-3 p-2  bg-white dark:bg-transparent dark:text-[#ebebeb]  text-black font-light`}
              >
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className=" hover:text-[#f29c57] pl-6  overflow-hidden  truncate"
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
            </div>
          </li>
          <li className=" w-full group   lg:w-max ">
            <button
              onClick={() => setOpenTabTop(!openTabTop)}
              className="p-2 w-full py-4 hover:bg-[#f29c57] flex items-center"
            >
              Xếp Hạng
              <IoMdArrowDropdown size={20} />
            </button>
            <div
              className={`lg:group-hover:block  ${
                openTabTop ? "block lg:hidden" : "hidden "
              } lg:p-2 z-20 w-full  bg-white dark:bg-[#242526] dark:border-y left-0 lg:absolute`}
            >
              <ul
                className={`lg:max-w-[1200px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8  lg:mx-auto gap-y-3 p-2 bg-white dark:bg-transparent dark:text-[#ebebeb]  text-black font-light`}
              >
                <li className=" hover:text-[#f29c57] pl-6 overflow-hidden  truncate">
                  <Link href={`/tim-kiem-nang-cao?q=day`}>Top Ngày</Link>
                </li>
                <li className=" hover:text-[#f29c57] pl-6 overflow-hidden  truncate">
                  <Link href={"/tim-kiem-nang-cao?q=weekly"}>Top Tuần</Link>
                </li>
                <li className=" hover:text-[#f29c57] pl-6 overflow-hidden  truncate">
                  <Link href={"/tim-kiem-nang-cao?q=monthly"}>Top Tháng</Link>
                </li>
                <li className=" hover:text-[#f29c57] pl-6 overflow-hidden  truncate">
                  <Link href={"/tim-kiem-nang-cao?q=views"}>Yêu Thích</Link>
                </li>
                <li className=" hover:text-[#f29c57] pl-6 overflow-hidden  truncate">
                  <Link href={"/tim-kiem-nang-cao?q=moi-cap-nhat"}>
                    Mới Cập Nhật
                  </Link>
                </li>
                <li className=" hover:text-[#f29c57] pl-6 overflow-hidden  truncate">
                  <Link href={"/tim-kiem-nang-cao?q=truyen-moi"}>
                    Truyện Mới
                  </Link>
                </li>
                <li className=" hover:text-[#f29c57] pl-6 overflow-hidden  truncate">
                  <Link href={"/tim-kiem-nang-cao?q=2"}>Truyện Full</Link>
                </li>
                <li className=" hover:text-[#f29c57] pl-6 overflow-hidden  truncate">
                  <Link href={"/tim-kiem-nang-cao"}>Truyện Ngẫu Nhiên</Link>
                </li>
              </ul>
            </div>
          </li>
          {/* <Link href={"/truyen-con-gai"}>
            <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57] cu">Con Gái</li>
          </Link>
          <Link href={"/truyen-con-trai"}>
            <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57] cu">
              Con Trai
            </li>
          </Link> */}
          <Link href={"/tim-kiem-nang-cao"}>
            <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57] cu">
              Tìm Truyện
            </li>
          </Link>
          <Link href={"/lich-su"}>
            <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57] cu">Lịch Sử</li>
          </Link>
          <li onClick={handleChangePageFollow} className="p-2 cursor-pointer py-4 lg:w-max hover:bg-[#f29c57] cu">
              Theo Dõi
            </li>
          <Link href={""}>
            {" "}
            <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57] cu">Tải App</li>
          </Link>
          <Link href={""}>
            <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57] cu">
              Thảo Luận
            </li>
          </Link>
          <Link href={""}>
            <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57] cu">Fanpage</li>
          </Link>
          <Link href={""}>
            <li className="p-2 py-4 lg:w-max hover:bg-[#f29c57] cu">Discord</li>
          </Link>
        </ul>
      </div>
    </section>
  );
}
