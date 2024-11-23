import { getListFavorite } from "@/api/books";
import CardStoryFollow from "@/components/Cards/CardStoryFollow";
import CardStoryHistory from "@/components/Cards/CardStoryHistory";
import RootPagination from "@/components/Functions/RootPagination";
import { IBook, IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { FaFlag } from "react-icons/fa";

export async function generateMetadata() {
  return {
    title: "Truyện theo dõi",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: "Lịch sử đọc truyện",
  };
}

export default async function page({ searchParams }: PropParams) {
  const page = Number((await searchParams).page) || 1;
  const limit = 24;
  const { data: listBookFollow, total } = (await getListFavorite({
    page,
    limit,
  } as IFilter)) || { data: [], total: 0 };
  return (
    <MainLayout>
      <main className="min-w-full px-2 lg:px-0  ">
        <div className=" lg:max-w-[1200px] flex flex-col gap-5 p-4 px-2 lg:px-4  pb-10 md:pb-10 m-auto">
          <h2 className="flex gap-1 text-xl font-semibold items-center text-[#56ccf2]">
            <FaFlag /> Truyện Đang Theo Dõi{" "}
          </h2>
          {listBookFollow?.length > 0 ? (
            <div className="grid grid-cols-2  md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-5 gap-3">
              {listBookFollow?.map((book: IBook) => (
                <CardStoryFollow key={book._id} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center">Không có truyện đang theo dõi ...</p>
          )}
          <RootPagination page={page} limit={limit} total={total} />
        </div>
      </main>
    </MainLayout>
  );
}
