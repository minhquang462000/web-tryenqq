import { IBook } from "@/interfaces";
import { create } from "zustand";

interface IReviewBook {
  reviewBook: IBook[];
  currentBooks: (page: number, limit: number) => IBook[];
  clearReviewList: () => void;
  addListBookRead: (book: IBook) => void;
  deleteBook: (book: IBook) => void;
}

export const useReviewBook = create<IReviewBook>((set, get) => {
  let initialBookRead: IBook[] = [];
  if (typeof window !== "undefined") {
    const storedBookRead = localStorage.getItem("reviewBook");
    initialBookRead = storedBookRead ? JSON.parse(storedBookRead) : [];
  }

  return {
    reviewBook: initialBookRead,
    currentBooks: (page: number, limit: number) => {
      const { reviewBook } = get();
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      return reviewBook.slice(startIndex, endIndex);
    },
    addListBookRead: (book: IBook) => {
      const currentBookRead = get().reviewBook;
      if (!currentBookRead.some((item) => item._id === book._id)) {
        const updateBooks = [...currentBookRead, book];
        set({ reviewBook: updateBooks });
        localStorage.setItem("reviewBook", JSON.stringify(updateBooks));
      }
    },
    deleteBook: (book: IBook) => {
      const currentBookRead = get().reviewBook;
      const updateBooks = currentBookRead.filter((item) => item._id !== book._id);
      set({ reviewBook: updateBooks });
      localStorage.setItem("reviewBook", JSON.stringify(updateBooks));
    },
    clearReviewList: () => {
      set({ reviewBook: [] });
      localStorage.removeItem("reviewBook");
    },
  };
});
