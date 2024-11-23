"use client";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import avt_default from "@/public/images/noavatar.png";
import { useCallback, useEffect, useState } from "react";
import {
  FaComment,
  FaComments,
  FaInfo,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";
import Link from "next/link";
import { MdDiamond } from "react-icons/md";
import { GiWhiteBook } from "react-icons/gi";
import AccountFollow from "../Account/AccountFollow";
import AccountInfo from "../Account/AccountInfo";
import AccountComment from "../Account/AccountComment";
import AccountNotification from "../Account/AccountNotification";
import AccountGem from "../Account/AccountGem";
import { IUser } from "@/interfaces";
import { logout } from "@/api/login";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export interface IAppProps {
  dashboard: string;
  account: IUser;
}

export default function PageAccount({ dashboard, account }: IAppProps) {
  const [isOpenDashboard, setIsOpenDashboard] = useState(true);
  const renderByDashboard = useCallback(() => {
    switch (dashboard) {
      case "dashboard":
        return <AccountInfo account={account} />;
      case "follow":
        return <AccountFollow />;
      case "linhthach":
        return <AccountGem />;
      case "comment":
        return <AccountComment />;
      case "notification":
        return <AccountNotification />;
      default:
        return null;
    }
  }, [dashboard]);
  return (
    <section className="lg:grid lg:gap-6  lg:grid-cols-4 ">
      <div className="col-span-1 w-full">
        <div className="bg-[#222222] flex items-center justify-between gap-2 text-white px-2  pt-2">
          <Image
            src={
              account.avatar
                ? `${DOMAIN}/api/avatars/${account.avatar}`
                : avt_default
            }
            className="w-[80px] bg-white aspect-square object-top  object-cover"
            alt="avatar"
            width={100}
            height={100}
          />
          <nav className="flex flex-col w-full">
            <span>Tài khoản của</span>
            <b>{account?.name.toUpperCase()}</b>
          </nav>
          <button
            onClick={() => setIsOpenDashboard(!isOpenDashboard)}
            className={`${
              !isOpenDashboard ? "rotate-180" : ""
            } duration-300 transition-all`}
          >
            <IoIosArrowDown size={25} />
          </button>
        </div>
        <ul
          className={`text-sm mt-6 text-[#333333] dark:text-[#f2f2f2] dark:bg-[#222222] bg-[#f2f2f2] font-light ${
            isOpenDashboard ? "" : "hidden"
          }`}
        >
          <Link href="/thong-tin-ca-nhan/dashboard">
            <li
              className={`flex items-center gap-1 px-5  py-2  
                     ${
                       dashboard == "dashboard"
                         ? "bg-[#d6d6d6] dark:bg-[#333] border-l-[3px] border-[#ee2c74] font-bold"
                         : ""
                     }`}
            >
              <FaInfo size={15} /> Thông tin tài khoản
            </li>
          </Link>
          <Link href="/thong-tin-ca-nhan/follow">
            <li
              className={`flex items-center gap-1 px-5  py-2  
                     ${
                       dashboard == "follow"
                         ? "bg-[#d6d6d6] dark:bg-[#333] border-l-[3px] border-[#ee2c74] font-bold"
                         : ""
                     }`}
            >
              <GiWhiteBook size={15} /> Truyện theo dõi
            </li>
          </Link>
          <Link href="/thong-tin-ca-nhan/linhthach">
            <li
              className={`flex items-center gap-1 px-5  py-2  
                     ${
                       dashboard == "linhthach"
                         ? "bg-[#d6d6d6] dark:bg-[#333] border-l-[3px] border-[#ee2c74] font-bold"
                         : ""
                     }`}
            >
              <MdDiamond size={15} /> Link thạch
            </li>
          </Link>
          <Link href="/thong-tin-ca-nhan/comment">
            <li
              className={`flex items-center gap-1 px-5  py-2  
                     ${
                       dashboard == "comment"
                         ? "bg-[#d6d6d6] dark:bg-[#333] border-l-[3px] border-[#ee2c74] font-bold"
                         : ""
                     }`}
            >
              <FaComments size={15} /> Bình luận
            </li>
          </Link>
          <Link href="/thong-tin-ca-nhan/notification">
            <li
              className={`flex items-center gap-1 px-5  py-2  
                     ${
                       dashboard == "notification"
                         ? "bg-[#d6d6d6] dark:bg-[#333] border-l-[3px] border-[#ee2c74] font-bold"
                         : ""
                     }`}
            >
              <FaComment size={15} /> Thông báo
            </li>
          </Link>
          <Link href="/">
            <li
              onClick={() => logout()}
              className={`flex items-center gap-1 px-5  py-2 `}
            >
              <FaSignOutAlt size={15} /> Thoát
            </li>
          </Link>
        </ul>
      </div>
      <div className="col-span-3 mt-5 lg:mt-0 w-full">
        {renderByDashboard()}
      </div>
    </section>
  );
}
