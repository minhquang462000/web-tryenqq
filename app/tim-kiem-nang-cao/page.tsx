import { getListBooks } from "@/api/books";
import { getListCategory } from "@/api/category";
import PageFilterSearch from "@/components/Page/PageFilterSearch";
import { IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { Metadata, ResolvingMetadata } from "next";
import { FaFlag } from "react-icons/fa";

export async function generateMetadata(
  { params, searchParams }: PropParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const search = (await searchParams)?.search;
  const title = search
    ? `Tìm kiếm theo: ${String(search)?.replace("-", " ")}`
    : "Tìm kiếm nâng cao";
  return {
    title: title,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: title,
  };
}

export default async function page({ searchParams }: PropParams) {
  const search = (await searchParams)?.search || "";
  const page = (await searchParams)?.page || 1;
  const limit = 24;
  const q = (await searchParams)?.q || "";
  const queryCategories = (await searchParams)?.categories || [];
  const status = (await searchParams)?.status || "";
  const nation = (await searchParams)?.nation || "";
  const chapter = (await searchParams)?.chapter || "";
  const categories = await getListCategory({} as IFilter);
  const { data: bookData, total } = (await getListBooks({
    search,
    page,
    limit,
    status,
    categories: queryCategories,
    chapter,
  } as IFilter)) || { data: [], total: 0 };
  return (
    <MainLayout>
      <main className="min-w-full px-2 lg:px-0   ">
        <div className=" lg:max-w-[1200px] flex flex-col gap-5 p-4 px-2 lg:px-4  pb-10 md:pb-10 m-auto">
          <h2 className="flex gap-1 text-xl font-semibold items-center text-[#56ccf2]">
            <FaFlag /> Tìm kiếm nâng cao
          </h2>
          <PageFilterSearch
            search={search as string}
            categories={categories}
            queryCategories={queryCategories as string[]}
            chapter={chapter as string}
            limit={limit}
            nation={nation as string}
            status={status}
            page={page as number}
            total={total}
            q={q as string}
            bookData={bookData}
          />
        </div>
      </main>
    </MainLayout>
  );
}
