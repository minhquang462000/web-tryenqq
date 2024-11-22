'use client';
import Image from "next/image";
import mainLogo from "@/public/Images/logo-icon.png"
import logoHomeDesktop from "@/public/Images/logo.png"
import { FaRegLightbulb } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import SearchHeader from "./SearchHeader";
import Link from "next/link";
import Register from "../Auth/Register";
import Login from "../Auth/Login";

export interface IAppProps {
}

export default function HeaderMain(props: IAppProps) {
  const [openInputSerch, setOpenInputSearch] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="w-screen relative text-xs dark:bg-[#18191a]  ">
      <div className="lg:max-w-[1200px]  m-auto">
        <div className="flex justify-between px-3 py-[9px] items-center ">
          <div className="flex gap-2 lg:gap-5 items-center">
            <Link href="/"> <Image className="object-cover lg:hidden" src={mainLogo} width={40} alt="logo" /></Link>
            <Link href="/"> <Image className="object-cover hidden lg:block" src={logoHomeDesktop} alt="logo" /></Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className=" w-9 h-9 flex justify-center items-center border  border-[#f18121] text-[#f18121] rounded-full dark:bg-white dark:text-black dark:border-none">
              <FaRegLightbulb />
            </button>
            <div className="hidden lg:block">
              <SearchHeader />
            </div>
          </div>
          <div className="flex  text-white font-bold gap-2">
            <button onClick={() => setOpenInputSearch(!openInputSerch)} className="lg:hidden w-9 h-9 flex justify-center items-center dark:bg-white dark:text-black  bg-[#f18121]  rounded-full">
              <IoSearch size={16} />
            </button>
            <button onClick={() => setOpenRegister(true)} className=" h-9 lg:px-4  rounded-md bg-[#3f94d5] hover:bg-[#3278ae]  px-2 ">
              Đăng ký
            </button>
            <button onClick={() => setOpenLogin(true)} className="h-9  lg:px-4 rounded-md bg-[#3f94d5] hover:bg-[#3278ae]  px-2 ">
              Đăng nhập
            </button>
          </div>
        </div>
        <div className={`lg:hidden transitionProperty-[max-height]  duration-300 ${openInputSerch ? "max-h-full py-2" : "max-h-0 overflow-hidden"}`}>
          <SearchHeader />
        </div>
      </div>
      <Register openRegister={openRegister} setOpenRegister={setOpenRegister} setOpenLogin={setOpenLogin} />
      <Login openLogin={openLogin} setOpenRegister={setOpenRegister} setOpenLogin={setOpenLogin} />
    </header>
  );
}
