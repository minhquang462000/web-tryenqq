import { handleUpdateView } from "@/api/updateView";
import { IBook } from "@/interfaces";
import { useReviewBook } from "@/stores";
import { convertToSlug } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { CgCloseO } from "react-icons/cg";

export interface ICardHistoryProps {}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL || "";
export default function CardStoryHistory({ book }: { book: IBook }) {
  const { deleteBook } = useReviewBook();
  return (
    <div className="w-full text-center relative">
      <Link
        href={`/truyen-tranh/${convertToSlug(book?.name)}-${book?._id}.html`}
      >
        <Image
          onClick={() => handleUpdateView(book?._id)}
          width={200}
          height={300}
          className="w-full  object-cover rounded-md  aspect-[3/4] cursor-pointer"
          src={`${DOMAIN}/api/books/${book?.images[0]}`}
          alt={book?.name}
        />
      </Link>
      <Link
        href={`/truyen-tranh/${convertToSlug(book?.name)}-${book?._id}.html`}
      >
        <h4
          onClick={() => handleUpdateView(book?._id)}
          className="cursor-pointer hover:text-[#f18121] transition-all duration-300  w-full mt-2 overflow-hidden truncate font-bold text-base"
        >
          {book?.name}
        </h4>
      </Link>
      <button className="hover:text-[#f18121] transition-all duration-300 font-semibold text-sm">
        {" "}
        Đọc tiếp chương 1
      </button>
      <button
        onClick={() => deleteBook(book)}
        className="absolute top-1 hover:bg-[#ff0000] hover:text-white text-black right-1 bg-white p-[2px] rounded-full"
      >
        <CgCloseO size={18} />
      </button>
    </div>
  );
}
