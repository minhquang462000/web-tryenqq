import { getListBooks, getOneBook } from "@/api/books";
import CardInfoDetail from "@/components/Cards/CardInfoDetail";
import CardItemDetail from "@/components/Cards/CardItemDetail";
import TitlePage from "@/components/Cards/TitlePage";
import ListChapterDetail from "@/components/Lists/ListChapterDetail";
import ListComment from "@/components/Lists/ListComment";
import { IBook, IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import * as React from "react";

export async function generateMetadata(
  { params }: PropParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug?.toString();
  const id = slug?.split("-").pop()?.split(".")[0];
  const book = await getOneBook(id as string);
  return {
    title: book?.name,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: book?.description,
    openGraph: {
      title: book?.name,
      description: book?.description,
      type: "website",
      images: [
        `${process.env.NEXT_PUBLIC_API_URL}/api/books/${book?.images[0]}`,
      ],
    },
  };
}
export default async function page({ params, searchParams }: PropParams) {
  const page = Number((await searchParams)?.page) || 1;
  const slug = (await params).slug?.toString();
  const id = slug?.split("-").pop()?.split(".")[0];
  const bookData = await getOneBook(id as string);
  const { data: bookTopMonth }: { data: IBook[] } = (await getListBooks({
    sortKey: "monthly",
  } as IFilter)) || { data: [] };
  return (
    <MainLayout>
      <main className="min-w-full px-2 lg:px-0 pt-5 ">
        <div className="bg-white w-full dark:bg-[#242526] lg:max-w-[1200px] m-auto p-4 pb-8  flex flex-col gap-3 rounded-md">
          <TitlePage title={bookData?.name} />
          <CardItemDetail book={bookData}/>
          <CardInfoDetail des={bookData?.description}/>
          <ListChapterDetail bookName={bookData?.name}/>
          <ListComment total={46} limit={5} page={page }/>
        </div>
      </main>
    </MainLayout>
  );
}
