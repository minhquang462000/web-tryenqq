import CardDashboardChapter from "@/components/Cards/CardDashboardChapter";
import ChangeChapter from "@/components/Functions/ChangeChapter";
import ListComment from "@/components/Lists/ListComment";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export interface IpageProps {
}

export default function page(props: IpageProps) {
    return (
        <MainLayout>
            <main className='w-screen relative  bg-[#333333] text-sm py-5   '>
                <div className="flex flex-col lg:max-w-[1200px] m-auto gap-5">
                    <CardDashboardChapter />
                    <div className="w-full flex my-5 flex-col">
                        <div className=" w-full max-h-[1200px] overflow-hidden lg:max-w-[1000px] lg:max-h-[1560px] m-auto">
                            <img className="w-full h-full object-cover" src="https://cdn3.ohay.tv/imgs/9536666aa06642d6be44/728.png" alt="" />
                        </div>

                    </div>

                    <div className="bg-white dark:bg-[#242526]  m-auto p-4 mt-5 w-full rounded">
                        <ul className='flex text-white dark:text-black items-center mt-1 justify-center gap-1'>
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
                        <ListComment />
                    </div>
                </div>
                <ChangeChapter />
            </main>
        </MainLayout>
    );
}
