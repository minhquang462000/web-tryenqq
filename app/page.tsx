import { getListBooks } from "@/api/books";
import CardMain from "@/components/Cards/CarsdMain";
import SlideHome from "@/components/Slides/SlideHome";
import { IFilter } from "@/interfaces";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import { FaCloudDownloadAlt, FaFilter } from "react-icons/fa";

export default async function Home() {
  const { data: listBookHot } = (await getListBooks({
    sortKey: "views",
  } as IFilter)) || { data: [] };
  const { data: ListBookNew } = (await getListBooks({
    limit: 24,
  } as IFilter)) || { data: [] };
  return (
    <MainLayout>
      <main className="min-w-full  lg:px-0  ">
        <section className=" lg:max-w-[1200px] flex flex-col gap-5 p-2  pb-8 md:pb-10 m-auto">
          <SlideHome listBookHot={listBookHot} />
          <nav className=" flex my-3 lg:mb-1 items-center justify-between">
            <Link href={"/"}>
              <h2 className="flex gap-1 text-xl font-semibold items-center dark:text-white text-[#56ccf2]">
                <FaCloudDownloadAlt /> Truyện Mới Cập Nhật
              </h2>
            </Link>
            <button className="w-9 h-9 flex justify-center items-center border border-[#f18121] text-[#f18121] dark:text-white dark:border-white rounded-full">
              <Link href={"/tim-kiem-nang-cao"}>
                {" "}
                <FaFilter size={10} />
              </Link>
            </button>
          </nav>
          <div className="w-full grid grid-cols-2  gap-y-8 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-5 gap-3">
            {ListBookNew?.map((book) => (
              <CardMain key={book._id} book={book} />
            ))}
          </div>
          <button className="w-max bg-[#f18121] text-white font-bold px-5 py-3 rounded-md m-auto">
            Xem thêm nhiều truyện
          </button>
        </section>
      </main>
    </MainLayout>
  );
}
