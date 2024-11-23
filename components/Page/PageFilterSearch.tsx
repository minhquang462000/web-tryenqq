"use client";
import CardAdvancedSearch from "../Cards/CardAdvancedSearch";
import CardMain from "../Cards/CarsdMain";
import { IBook, ICategory } from "@/interfaces";
import RootPagination from "../Functions/RootPagination";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { buildUrl } from "@/utils/handleFilter";
export interface IAppProps {
  page: number;
  limit: number;
  status: any;
  total: number;
  q: string;
  chapter: string;
  nation: string;
  categories: ICategory[];
  queryCategories: string[];
  bookData: IBook[];
  search: string;
}

export default function PageFilterSearch(props: IAppProps) {
  const {
    page,
    limit,
    status,
    total,
    q,
    chapter,
    nation,
    categories,
    queryCategories,
    bookData,
    search,
  } = props;
  const router = useRouter();
  const [query, setQuery] = useState<{ [key: string]: any }>({
    search,
    page,
    limit,
    status,
    chapter,
    nation,
    categories: queryCategories,
    q,
  });
  const pathName = usePathname();

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
    <div className="flex flex-col gap-5">
      <CardAdvancedSearch
        search={search}
        handleQuery={handleQuery}
        chapter={chapter}
        nation={nation}
        categories={categories}
        status={status}
        query={query}
        setQuery={setQuery}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4  lg:grid-cols-6 lg:gap-5">
        {bookData?.map((item) => (
          <CardMain key={item._id} book={item} />
        ))}
      </div>
      <RootPagination
        handleQuery={handleQuery}
        page={page}
        limit={limit}
        total={total}
      />
    </div>
  );
}
