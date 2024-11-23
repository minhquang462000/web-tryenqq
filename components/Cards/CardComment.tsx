import noAvatar from "@/public/images/no-avatar.png";
import Image from "next/image";
import { FaComment, FaThumbsUp } from "react-icons/fa";

export interface ICardCommentProps {}

export default function CardComment(props: ICardCommentProps) {
  return (
    <div className="flex gap-2">
      <span className="rounded-full dark:bg-white border-2 w-[40px] h-[40px] overflow-hidden">
        <Image
          src={noAvatar.src}
          width={40}
          height={40}
          className="w-full h-full object-cover"
          alt="no-avatar"
        />
      </span>
      <div className="w-[calc(100%_-_40px)]">
        <div className="p-2 bg-[#f7f7f7] dark:bg-[#423E3E] text-xs w-full  rounded-md">
          <span className="w-full flex  items-center border-b-[1px] border-[#f18121] pb-2 gap-2">
            <strong>no-avatar</strong>
            <p className="text-[#f18121] border-[#f18121] px-1 text-xs  rounded-md border">
              Luyện khí
            </p>
          </span>
          <p className="py-1 w-full h-max">Truyện như hay quá.</p>
        </div>
        <ul className="text-xs mt-1 flex items-center gap-5 ">
          <li className="flex items-center gap-2 text-[#3f94d5] cursor-pointer">
            <FaThumbsUp />0
          </li>
          <li className="flex items-center gap-2 text-[#3f94d5] cursor-pointer">
            <FaComment />
            Trả lời
          </li>
          <li className="text-[#999999]">23 giờ trước</li>
        </ul>
      </div>
    </div>
  );
}
