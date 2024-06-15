'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface IAppProps {
}
export default function CardMain(props: IAppProps) {
    const pulseStyle = {
        WebkitAnimation: 'pulse 1s steps(1, start) infinite',
        animation: 'pulse 1s steps(1, start)  infinite',
    };
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<any>(null);
    const [style, setStyle] = useState({});

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            if (containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const newX = event.clientX - containerRect.left;
                const newY = event.clientY - containerRect.top;

                // Giới hạn vị trí trong phần tử cha
                const limitedX = Math.max(0, Math.min(newX, containerRect.width));
                const limitedY = Math.max(0, Math.min(newY, containerRect.height));

                setPosition({
                    x: limitedX,
                    y: limitedY,
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);
    useEffect(() => {
        const handleMouseMove = (event: any) => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const newX = event.clientX;
            const newY = event.clientY;
            ;
            const percentToLeft = (newX / viewportWidth) * 100;
            const percentToTop = (newY / viewportHeight) * 100;

            if (percentToLeft < 50) {
                setStyle({
                    left: `${(position.x) + 25}px`,
                    top: position.y + 20,
                });
            } else {
                setStyle({
                    left: `${-400 + position.x - 20}px`,
                    top: position.y + 20,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [position]);
    return (
        <div className='w-full  text-sm '>
            <div className="w-ful rounded-md text-center  flex flex-col gap-2  cursor-pointer relative h-full  m-auto">
                <div className=" rounded-md relative overflow-hidden w-full min-h-[220px]    " >
                    <Link className="w-full h-full" href={"/truyen-tranh/loi-thu-nhan-cua-chua-te-bong-toi"}>
                        <img className="h-full w-full object-cover" src={"https://i.truyenvua.com/ebook/190x247/loi-thu-nhan-cua-chua-te-bong-toi_1710578139.jpg?gt=hdfgdfg&mobile=2"} alt="img" />
                    </Link>
                    <span className='text-white absolute  flex gap-1  top-2 left-2 '>
                        <p className='bg-[#56ccf2] px-2 py-1 lg:px-1 rounded-md'>1 Ngày trước</p>
                        <span style={pulseStyle} className='bg-[#ff2853]  dupx-2 py-1 px-2 rounded-md'>Hot</span>
                    </span>
                </div>
                <div
                    ref={containerRef}
                    className='w-full h-max group relative '>
                    <h3 className="hover:text-[#f18121] w-full text-lg font-semibold overflow-hidden px-1 transition-all duration-300  truncate  ">
                        <Link href={"/truyen-tranh/loi-thu-nhan-cua-chua-te-bong-toi"}> Lời Thú Nhận Của Chúa Tể Bóng Tối</Link>
                    </h3>
                    <div
                        style={{ width: '400px', ...style }}
                        className={`p-2 hidden group-hover:block font-light  pointer-events-none  transform  text-start  bg-white border absolute z-40 border-black rounded-md`}>
                        <h4 className="font-semibold text-[#f18121]">  Lời Thú Nhận Của Chúa Tể Bóng Tối</h4>
                        <h4 className="my-2">Tên khác:The Dark Lord's Confession</h4>
                        <ul className="flex gap-1 flex-col my-2">
                            <li>Tình Trạng: Đang Cập Nhật</li>
                            <li>Lượt Xem: 462,000</li>
                            <li>Lượt Theo Dõi: 4,620</li>
                        </ul>
                        <ul className="flex gap-1 flex-wrap text-white ">
                            <li className="bg-[#56ccf2] p-1 rounded ">Action</li>
                            <li className="bg-[#56ccf2] p-1 rounded ">Comedy</li>
                            <li className="bg-[#56ccf2] p-1 rounded ">Drama</li>
                            <li className="bg-[#56ccf2] p-1 rounded ">WebTool</li>
                        </ul>
                        <p className="mt-2">
                            Lapis là một cô bé mang trong mình lời nguyền của chúa tể bóng tối, nhưng lại khao khát trở thành một Thánh Hiệp Sĩ – là một điều vốn bất khả thi đối với những “kẻ bị nguyền”. Tuy vậy, thay vì đánh bại, cô lại lỡ tay triệu hồi Chúa Tể Bóng Tối.
                        </p>
                    </div>
                </div>
                <p className='text-sm font-semibold'>Chương 460</p>
            </div>
        </div>
    );
}
