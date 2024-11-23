import CardStoryHistory from "@/components/Cards/CardStoryHistory";
import PageHistoryBook from "@/components/Page/PageHistoryBook";
import { PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { FaFlag } from "react-icons/fa";

export async function generateMetadata() {
  return {
    title: "Lịch sử đọc truyện",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: "Lịch sử đọc truyện",
  };
}

export default async function page({ searchParams }: PropParams) {
  const page = Number((await searchParams).page) || 1;
  return (
    <MainLayout>
      <main className="min-w-full px-2 lg:px-0 ">
        <div className=" lg:max-w-[1200px] flex flex-col gap-5 p-4 px-2 lg:px-4  pb-10 md:pb-10 m-auto">
          <h2 className="flex gap-1 text-xl font-semibold items-center text-[#56ccf2]">
            <FaFlag /> Lịch Sử Đọc Truyện
          </h2>
          <PageHistoryBook page={page} />
        </div>
      </main>
    </MainLayout>
  );
}
