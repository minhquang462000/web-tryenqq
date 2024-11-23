"use client";
import ListFilterStoryOfType from "../Lists/ListFilterStoryofType";
import { IBook } from "@/interfaces";
import CardMain from "../Cards/CarsdMain";
import RootPagination from "../Functions/RootPagination";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import build from "next/dist/build";
import { buildUrl } from "@/utils/handleFilter";

export interface IAppProps {
  page: number;
  limit: number;
  status: any;
  q: string;
  total: number;
  nation: string;
  listBook: IBook[];
}
export default function PageFilterCategory({
  page,
  limit,
  status,
  nation,
  q,
  listBook,
  total,
}: IAppProps) {
  const pathName = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState<{ [key: string]: any }>({
    page,
    limit,
    status,
    nation,
    q,
  });
  const handleQuery = (queryType: string, value: any) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      [queryType]: value,
    }));
    const finalUrl = buildUrl(
      { ...query, [queryType]: value },
      pathName as string
    );
    router.push(finalUrl);
  };
  return (
    <div>
      <ListFilterStoryOfType
        handleQuery={handleQuery}
        status={status}
        query={q as string}
        nation={nation}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5  lg:grid-cols-6 lg:gap-5">
        {listBook.map((book, index) => (
          <CardMain key={index} book={book} />
        ))}
      </div>
      <RootPagination
        handleQuery={handleQuery}
        limit={limit}
        page={page}
        total={total}
      />
    </div>
  );
}
