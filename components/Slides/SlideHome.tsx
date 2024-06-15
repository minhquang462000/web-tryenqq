'use client'
import * as React from 'react';
import { FaStar } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdOutlineWatchLater } from 'react-icons/md';
import Slider from "react-slick";
export interface ISlideHomeProps {
}
const listImg = [
    "https://cdnnvd.com/nettruyen/thumb/maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii.jpg",
    "https://cdnnvd.com/nettruyen/thumb/gui-em-nguoi-bat-tu.jpg",
    "https://cdnnvd.com/nettruyen/thumb/kimi-no-koto-ga-dai-dai-dai-dai-daisuki-na-100-ri-no-kanojo.jpg",
    "https://cdnnvd.com/nettruyen/thumb/man-cap-tra-xanh-xuyen-khong-thanh-tieu-dang-thuong.jpg",
    "https://cdnnvd.com/nettruyen/thumb/anh-ay-rat-hay-treu-choc-toi.jpg"


]
const NextArrow = (props: any) => {
    const { onClick, currentSlide } = props;
    return (
        <button
            className={`  hover:bg-opacity-70 bg-opacity-30 flex justify-center items-center text-gray-600   w-[50px] h-[50px] absolute right-4 z-10 top-[30%] rounded-lg bg-white `}
            onClick={onClick}
        >
            <IoIosArrowForward size={14} />
        </button>
    );
};
const PrevArrow = (props: any) => {
    const { onClick, currentSlide } = props;
    return (
        <button
            className={`  hover:bg-opacity-70 bg-opacity-30 flex justify-center items-center text-gray-600   w-[50px] h-[50px] absolute left-4 z-10 top-[30%] rounded-lg bg-white `}
            onClick={onClick}
        >
            <IoIosArrowBack size={14} />
        </button>
    );
};

export default function SlideHome(props: ISlideHomeProps) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    nextArrow: <NextArrow />,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    prevArrow: <PrevArrow />,
                }
            }
            ,
            {
                breakpoint: 2048,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    centerPadding: "40px",
                    centerMode: true,
                    autoplaySpeed: 3000,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                }
            }
            ,
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    centerPadding: "30px",
                    centerMode: true,
                    autoplaySpeed: 3000,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    centerPadding: "20px",
                    centerMode: true,
                    autoplaySpeed: 3000,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                }
            }
        ]
    };
    const pulseStyle = {
        WebkitAnimation: 'pulse 1s steps(1, start) infinite',
        animation: 'pulse 1s steps(1, start)  infinite',
        backgroundColor: '#ff2853',

    };
    return (
        <div className='w-full m'>
            <h2 className='flex items-center w-full gap-1 text-xl font-medium text-[#ff2853] mb-3'><FaStar />Truyện Hay</h2>
            <Slider {...settings}>
                {listImg.map((item, index) => {
                    return (
                        <div key={index} className='w-full text-sm '>
                            <div className="w-[90%] rounded-md text-center  flex flex-col gap-2 overflow-hidden cursor-pointer relative h-full  m-auto">
                                <div className="h-[200px] rounded-md relative overflow-hidden w-full " >
                                    <img className="h-full w-full object-cover" src={item} alt="img" />
                                    <span className='text-white absolute text-[10px] font-medium flex gap-1  top-1 left-2 '>
                                        <p className='bg-[#56ccf2] p-1 lg:py-0 rounded-md'>1 Ngày trước</p>
                                        <span style={pulseStyle} className='bg-white p-1 lg:py-0 rounded-md'>Hot</span>
                                    </span>
                                </div>
                                <h3 className='w-full overflow-hidden px-1 hover:text-[#f18121] transition-all duration-300 truncate font-semibold'>Em Có Nghe Thấy Tôi Nói Không</h3>
                                <p className='text-xs font-semibold'>Chương 460</p>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
