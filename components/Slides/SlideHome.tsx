'use client'
import { IBook } from '@/interfaces';
import { formatDate } from '@/utils';
import { timeFormat } from '@/utils/getTimeDifference';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from "react-slick";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL || '';
const NextArrow = (props: any) => {
    const { onClick, currentSlide } = props;
    return (
        <button
            className={`  hover:bg-opacity-70 bg-opacity-30 flex justify-center items-center text-gray-600   w-[50px] h-[50px] absolute right-4 z-10 top-[30%] rounded-lg bg-white `}
            onClick={onClick}
        >
            <IoIosArrowForward size={20} />
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
            <IoIosArrowBack size={20} />
        </button>
    );
};

export default function SlideHome({ listBookHot }: { listBookHot: IBook[] }) {
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
            <h3 className='flex items-center w-full gap-1 text-xl font-medium text-[#ff2853] mb-3'>
                <FaStar />Truyện Hay
            </h3>
            <Slider {...settings}>
                {listBookHot?.map((book, index) => (
                    <div key={index} className='w-full text-sm '>
                        <div className="w-[90%] rounded-md text-center  flex flex-col gap-2 overflow-hidden cursor-pointer relative h-full  m-auto">
                            <div className="aspect-[3/4] rounded-md relative overflow-hidden w-full " >
                                <Image
                                    width={200}
                                    height={250}
                                    className="h-full w-full object-cover"
                                    src={`${DOMAIN}/api/books/${book?.images[0]}`}
                                    alt={book?.name} />
                                <span className='text-white absolute text-[10px] font-medium flex gap-1  top-1 left-2 '>
                                    <p className='bg-[#56ccf2] p-1 px-2 w-max rounded-md'>{timeFormat(book?.createdAt)}</p>
                                    {book?.views > 100 && <span style={pulseStyle} className='bg-[#ff2853] lg py-1 px-2 rounded-md'>Hot</span>}
                                </span>
                            </div>
                            <h3 className='w-full overflow-hidden px-1 hover:text-[#f18121] transition-all duration-300 truncate font-semibold'>Em Có Nghe Thấy Tôi Nói Không</h3>
                            <p className='text-xs font-semibold'>Chương 460</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
