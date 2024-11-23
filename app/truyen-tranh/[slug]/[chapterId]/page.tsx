import CardDashboardChapter from "@/components/Cards/CardDashboardChapter";
import ChangeChapter from "@/components/Functions/ChangeChapter";
import ListComment from "@/components/Lists/ListComment";
import { MainLayout } from "@/layouts";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import chapterImage from "@/public/Images/728.png";
import { PropParams } from "@/interfaces";

export default async function page({ searchParams }: PropParams) {
  const page = Number((await searchParams).page) || 1;
  return (
    <MainLayout>
      <main className="w-full relative  bg-[#333333] text-sm py-5   ">
        <section className="flex flex-col lg:max-w-[1200px] m-auto gap-5">
          <CardDashboardChapter />
          <ul className="w-full flex my-5 gap-3 flex-col">
            {Array.from({ length: 10 }, (_, index) => (
              <li
                key={index}
                className=" w-full  aspect-[3/4] overflow-hidden md:w-[70%] lg:w-[60%]  mx-auto"
              >
                <Image
                  className="w-full h-full object-cover"
                  width={800}
                  height={1000}
                  src={chapterImage}
                  alt=""
                />
              </li>
            ))}
          </ul>

          <div className="bg-white dark:bg-[#242526]  m-auto p-4 mt-5 w-full rounded">
            <ul className="flex text-white dark:text-black items-center mt-1 justify-center gap-1">
              <Link href={""}>
                <li className="bg-[#DDDDDD]  cursor-pointer  hover:text-[#f18121]   border h-8 border-[d43f3a] flex items-center gap-1  p-1 px-4 rounded ">
                  <FaArrowLeft size={13} /> Chap trước
                </li>
              </Link>
              <Link href={""}>
                <li className="bg-[#5bc0de]  cursor-pointer  hover:text-[#f18121] fborder h-8 border-[d43f3a] flex items-center gap-1  p-1 px-4 rounded ">
                  Chap sau
                  <FaArrowRight size={13} />
                </li>
              </Link>
            </ul>
            <ul className="flex w-full my-5 font-medium flex-wrap lg:font-semibold   items-center gap-2 lg:text-base text-sm">
              <li className="">
                <Link href={"/"}> Trang chủ</Link>
              </li>
              <li className='before:content-["/"] before:mr-3'>
                <Link href={""}>Kiếm nghịch thương khung</Link>
              </li>
              <li className='before:content-["/"] before:mr-3'>
                <Link href={""}>Chương 1</Link>
              </li>
            </ul>
          </div>
          <div className="bg-white w-full dark:bg-[#242526]  m-auto p-4 rounded">
            <ListComment total={46} page={page} limit={5} />
          </div>
        </section>
        <ChangeChapter />
      </main>
    </MainLayout>
  );
}
