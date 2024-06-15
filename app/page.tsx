
import CardMain from "@/components/Cards/CarsdMain";
import SlideHome from "@/components/Slides/SlideHome";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import { FaCloudDownloadAlt, FaFilter } from "react-icons/fa";


export default function Home() {
  return (
    <MainLayout>
      <main className="min-w-screen px-2 lg:px-0  bg-[#ebebeb] dark:bg-[#18191a] ">
        <div className=" lg:max-w-[1200px] flex flex-col gap-5 p-4  pb-8 md:pb-10 m-auto">
          <SlideHome />
          <nav className=" flex my-3 lg:mb-1 items-center justify-between">
            <Link href={"/"}><h2 className="flex gap-1 text-xl font-semibold items-center dark:text-white text-[#56ccf2]"><FaCloudDownloadAlt /> Truyện Mới Cập Nhật</h2></Link>
            <button className="w-9 h-9 flex justify-center items-center border border-[#f18121] text-[#f18121] dark:text-white dark:border-white rounded-full">
              <Link href={"/tim-kiem-nang-cao"}> <FaFilter size={10} /></Link>
            </button>
          </nav>
          <div className="w-full grid grid-cols-2  gap-y-8 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-5 gap-3">
            <CardMain />
            <CardMain />
            <CardMain />
            <CardMain />
          </div>
          <button className="w-max bg-[#f18121] text-white font-bold px-5 py-3 rounded-md m-auto">Xem thêm nhiều truyện</button>
        </div>
      </main>
    </MainLayout>

  );
}
