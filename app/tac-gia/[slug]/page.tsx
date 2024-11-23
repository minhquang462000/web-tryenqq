import { getOneAuthor } from "@/api/author";
import { getListBooks } from "@/api/books";
import { getOneCategory } from "@/api/category";
import CardMain from "@/components/Cards/CarsdMain";
import RootPagination from "@/components/Functions/RootPagination";
import ListFilterStoryOfType from "@/components/Lists/ListFilterStoryofType";
import PageFilterCategory from "@/components/Page/PageFilterCategory";
import { IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { Metadata, ResolvingMetadata } from "next";
import { FaFlag } from "react-icons/fa";
export async function generateMetadata(
  { params }: PropParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = String((await params).slug);
  const id = slug?.split("-").pop()?.split(".")[0];
  const author = await getOneAuthor(id as string);
  return {
    title: author?.name,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: author?.description,
    openGraph: {
      title: author?.name,
      description: author?.description,
      type: "website",
    },
  };
}
export default async function page({ params, searchParams }: PropParams) {
  const slug = String((await params).slug);
  const id = slug?.split("-").pop()?.split(".")[0];
  const author = await getOneAuthor(id as string);
  const page = (await searchParams)?.page || 1;
  const status = (await searchParams)?.status || "";
  const sortKey = (await searchParams)?.q || "";
  const nation = (await searchParams)?.nation || "";
  const limit = 24;
  const { data: ListBookByAuthor, total } = (await getListBooks({
    author: author?._id,
    limit,
    page,
    sortKey,
    status,
  } as IFilter)) || { data: [], total: 0 };
  return (
    <MainLayout>
      <main className="min-w-full px-2 lg:px-0  ">
        <div className=" lg:max-w-[1200px] flex flex-col gap-5 p-4 px-2 lg:px-4  pb-10 md:pb-10 m-auto">
          <h3 className="flex gap-1 text-xl font-semibold items-center text-[#56ccf2]">
            <FaFlag /> Truyện Của Tác Giả {author?.name}
          </h3>
          <span className="bg-white dark:bg-[#242526] shadow p-4 rounded">
            {author?.description}
          </span>
          <PageFilterCategory
            nation={nation as string}
            page={page as number}
            limit={limit}
            status={status}
            q={sortKey as string}
            total={total}
            listBook={ListBookByAuthor}
          />
        </div>
      </main>
    </MainLayout>
  );
}
