
import appStote from "@/public/Images/app-store.b67ff810.jpg";
import chPlay from "@/public/Images/ch-play.7a2de44b.jpg";
import Image from "next/image";
import logo from "@/public/Images/logo.png";
import logo_icon from "@/public/Images/logo_2.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";
import Link from "next/link";

export interface IMainFooterProps {
}

export default function MainFooter(props: IMainFooterProps) {
    return (
        <footer className='px-3 pt-5 pb-14 w-full  dark:bg-[#242526] font-light text-xs border-t-[6px] dark:border-white border-[#f18121]'>
            <div className="lg:max-w-[1200px] flex flex-col w-full md:flex-row lg:m-auto md:justify-between">
                <div className="flex justify-between  flex-col gap-2 ">
                    <Image src={logo} alt="logo" className="w-[150px]" />
                    <div style={{ backgroundImage: `url(${"https://cdn.wallpapersafari.com/11/98/DQeo0Y.jpg"})` }}
                        className="w-[340px]  h-[130px]   p-2  flex flex-col justify-between bg-cover bg-center">
                        <nav className="flex gap-1 text-white">
                            <Link href={"/"}> <Image src={logo_icon} alt="logo" className="w-[50px]" /></Link>
                            <span className="flex font-semibold  flex-col">
                                <h2 className="text-lg hover:underline"><Link href={"/"}>Truyenqq</Link></h2>
                                <p className="text-xs">3.925 người theo dõi</p>
                            </span>
                        </nav>
                        <ul className="flex gap-1 font-semibold text-[#666] justify-between">
                            <Link href="https://www.facebook.com/"> <li className="flex gap-1 bg-white px-2 py-[2px]  items-center"><FaFacebookSquare color="#375798" /> Theo dõi Trang</li></Link>
                            <Link href="https://www.facebook.com/"> <li className="flex gap-1 bg-white px-2 py-[2px]  items-center"><PiShareFatFill />Chia sẻ</li></Link>
                        </ul>
                    </div>
                    <div className="flex flex-col lg:hidden gap-2">
                        <Image src={appStote} alt="app-store" className="w-[150px]" />
                        <Image src={chPlay} alt="ch-play" className="w-[150px]" />
                    </div>
                </div>
                <div className="mt-4 md:mt-0 md:w-1/2">
                    <ul className="flex mb-3 font-light bg-[] flex-wrap gap-2">
                        <Link href=""><li className="bg-[#e2e2e2] dark:bg-[#18191a] p-2 hover:text-[#f18121] transition-all duration-300   rounded">Truyện Tranh</li></Link>
                        <Link href=""><li className="bg-[#e2e2e2] dark:bg-[#18191a] p-2 hover:text-[#f18121] transition-all duration-300   rounded">Truyện Tranh Online</li></Link>
                        <Link href=""><li className="bg-[#e2e2e2] dark:bg-[#18191a] p-2 hover:text-[#f18121] transition-all duration-300   rounded">Truyện Tranh Mới</li></Link>
                        <Link href=""><li className="bg-[#e2e2e2] dark:bg-[#18191a] p-2 hover:text-[#f18121] transition-all duration-300   rounded">Truyện Tranh Hay</li></Link>
                        <Link href=""><li className="bg-[#e2e2e2] dark:bg-[#18191a] p-2 hover:text-[#f18121] transition-all duration-300   rounded">Đọc Truyện Tranh</li></Link>
                    </ul>
                    <p className="text-sm">Email: minhquangcity@proton.me</p>
                    <Link href=""><p className="hover:text-[#f18121] transition-all duration-300 text-sm mt-1">Chính sách bảo mật</p></Link>
                </div>
            </div>
        </footer>
    );
}
