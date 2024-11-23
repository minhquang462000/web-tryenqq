"use client";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export interface IButtonBackToTopPageProps {}

export default function ButtonBackToTopPage(props: IButtonBackToTopPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  // Kiểm tra vị trí cuộn trang
  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div
      className={`w-full trasition-all duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="fixed bottom-14  border border-[#999]  rounded  w-10 h-10  dark:border-white text-[#f18121] dark:text-white   z-[999] right-4 flex items-center justify-center "
      >
        <IoIosArrowUp size={20} />
      </button>
    </div>
  );
}
