import { convertToSlug } from "@/utils";
import Link from "next/link";
import { BsDatabaseFill } from "react-icons/bs";
export interface IListChapterDetailProps {
    bookName: string
}

export default function ListChapterDetail({bookName}: IListChapterDetailProps) {
    return (
        <div className="w-full">
            <span className='flex items-center mb-2 gap-1 text-lg dark:text-white text-[#f18121]'><BsDatabaseFill />Danh sách chương</span>
            <ul className="flex flex-col min-h-[300px] shadow max-h-[500px] overflow-y-auto font-light py-3 px-4 border rounded-md">
                <Link href={`/truyen-tranh/${convertToSlug(bookName)}/chuong-1.html`}>
                    <li className="flex p-1 text-base border-b justify-between">
                        <p className={`hover:text-[#f18121]`}>Chương 1</p>
                        <p>09/06/2024</p>
                    </li>
                </Link>
            </ul>
        </div>
    );
}
