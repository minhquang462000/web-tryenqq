"use client";

import { useReviewBook } from "@/stores";
import CardStoryHistory from "../Cards/CardStoryHistory";
import RootPagination from "../Functions/RootPagination";

export interface IAppProps {}

export default function PageHistoryBook({ page }: { page: number }) {
  const { reviewBook, currentBooks, deleteBook } = useReviewBook();
  const books = currentBooks(page, 24);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4  lg:grid-cols-6 lg:gap-5">
        {books?.map((book) => (
          <CardStoryHistory key={book?._id} book={book} />
        ))}
      </div>
      <RootPagination page={page} limit={24} total={reviewBook?.length} />
    </div>
  );
}
