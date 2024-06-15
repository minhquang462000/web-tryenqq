'use client'
import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { ImCheckmark, ImCross } from "react-icons/im";


export interface IAppProps {
}
export default function CardAdvancedSearch(props: IAppProps) {
    const [showCardFindStory, setShowCardFindStory] = useState(false);
    const initialItems = [
        { id: 1, label: 'Action', stateIndex: 0 },
        { id: 2, label: 'Adventure', stateIndex: 0 },
        { id: 3, label: 'Fantasy', stateIndex: 0 }
    ];
    const [items, setItems] = useState([...initialItems]);
    // Các trạng thái khác nhau
    const states = [
        { checked: false, marked: false },
        { checked: true, marked: false },
        { checked: false, marked: true }
    ];

    const toggleItemState = (id: number) => {
        const newItems = items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    stateIndex: (item.stateIndex + 1) % states.length
                };
            }
            return item;
        });
        setItems(newItems);
    };

    return (
        <section className='bg-white dark:bg-[#242526] rounded-md text-xs md:text-sm  shadow px-5  py-4 w-full  lg:max-w-[1200px] m-auto'>
            <button onClick={() => setShowCardFindStory(!showCardFindStory)} className=" flex w-max m-auto  bg-[#5bc0de] text-white font-bold p-2 rounded-md">
                {!showCardFindStory ? "Ẩn khung tìm kiếm" : "Hiện khung tìm kiếm"}
            </button>
            <div className={`flex flex-col mb-5 gap-4 ${!showCardFindStory ? "block" : "hidden"}`}>
                <ul className="w-full flex flex-col gap-1">
                    <li className="flex items-center gap-2">
                        <button className="border w-[15px] flex justify-center items-center h-[15px] border-[#666666]">
                            <ImCheckmark color="#6cb463" />
                        </button>
                        Tìm trong những thể loại này
                    </li>
                    <li className="flex items-center gap-2">
                        <button className="border w-[15px] flex justify-center items-center h-[15px] border-[#666666]">
                            <ImCross color="#f85e61" size={10} />
                        </button>
                        Loại trừ những thể loại này
                    </li>
                    <li className="flex items-center gap-2">
                        <button className="border w-[15px] flex justify-center items-center h-[15px] border-[#666666]"></button>
                        Truyện có thể thuộc hoặc không thuộc thể loại này
                    </li>
                </ul>
                <button onClick={() => { window.location.reload() }}
                    className="bg-[#428bca] border font-semibold flex items-center gap-1 m-auto w-max border-[#357ebd] text-white hover:text-[#f18121] md:p-2 p-1 rounded-md">
                    <GrPowerReset className="" /> Reset
                </button>
                <div className="w-full flex flex-col gap-1">
                    <h3 className="text-[#666666] font-semibold text-base lg:text-lg">Thể loại truyện</h3>
                    <ul className="w-full px-2 grid grid-cols-2 md:grid-cols-3 gap-1">
                        {
                            initialItems.map((item: any, index) => {
                                ;
                                return (
                                    <li key={index} className="flex  items-center gap-2">
                                        <ul onClick={() => toggleItemState(item.id)} className={`border cursor-pointer overflow-hidden  relative w-[15px]  h-[15px] border-[#666666]  `}>
                                            <li className={`absolute w-full h-full  transition-all  flex justify-center items-center duration-300  ${items[item.id - 1].stateIndex === 1 ? 'top-0' : 'top-[100%]'} left-0 `}>
                                                <ImCheckmark color="#6cb463" />
                                            </li>
                                            <li className={`absolute  w-full h-full transition-all flex justify-center items-center  duration-300  right-0  ${items[item.id - 1].stateIndex === 2 ? 'top-0' : '-top-[100%]'}`}>
                                                <ImCross color="#f85e61" size={10} />
                                            </li>
                                        </ul>
                                        {item.label}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ul className="w-full text-[#4a4a4a] dark:text-[#ebebeb]  grid grid-cols-1 md:grid-cols-2 gap-5">
                    <li className="flex items-center font-semibold  justify-between">
                        <p className="w-1/2 text-base lg:text-lg ">Quốc gia</p>
                        <select style={{ fontFamily: "Poppins, sans-serif" }} className="w-1/2  border-2 px-3 outline-none  bg-transparent dark:bg-white dark:text-[#4a4a4a] p-2 rounded-md" name="" id="">
                            <option value="">Tất cả</option>
                            <option value="">Trung Quốc</option>
                            <option value="">Việt Nam</option>
                            <option value="">Hàn Quốc</option>
                            <option value="">Nhật Bản</option>
                            <option value="">Mỹ</option>
                        </select>
                    </li>
                    <li className="flex items-center font-semibold  justify-between">
                        <p className="w-1/2 text-base lg:text-lg ">Tình Trạng</p>
                        <select style={{ fontFamily: "Poppins, sans-serif" }} className="w-1/2  border-2 px-3 outline-none  bg-transparent dark:bg-white dark:text-[#4a4a4a] p-2 rounded-md" name="" id="">
                            <option value="">Tất cả</option>
                            <option value="">Đang tiến hành</option>
                            <option value="">Hoàn thành</option>
                        </select>
                    </li>
                    <li className="flex items-center font-semibold  justify-between">
                        <p className="w-1/2 text-base lg:text-lg ">Số lượng chương</p>
                        <select style={{ fontFamily: "Poppins, sans-serif" }} className="w-1/2  border-2 px-3 outline-none  bg-transparent dark:bg-white dark:text-[#4a4a4a] p-2 rounded-md" name="" id="">
                            <option value="">{"> 0"}</option>
                            <option value="">{">= 50"}</option>
                            <option value="">{">= 100"}</option>
                            <option value="">{">= 200"}</option>
                            <option value="">{">= 300"}</option>
                            <option value="">{">= 400"}</option>
                            <option value="">{">= 500"}</option>

                        </select>
                    </li>
                    <li className="flex items-center font-semibold  justify-between">
                        <p className="w-1/2 text-base lg:text-lg ">Sắp xếp</p>
                        <select style={{ fontFamily: "Poppins, sans-serif" }} className="w-1/2  border-2 px-3 outline-none  bg-transparent dark:bg-white dark:text-[#4a4a4a] p-2 rounded-md" name="" id="">
                            <option value="">Ngày đăng giảm dần</option>
                            <option value="">Ngày đăng tăng dần</option>
                            <option value="">Ngày cập nhật giảm dần</option>
                            <option value="">Ngày cập nhật tăng dần</option>
                            <option value="">Ngày xem giảm dần</option>
                            <option value="">Ngày xem tăng dần</option>

                        </select>
                    </li>
                </ul>
                <button className=" flex w-max m-auto border border-[#4cae4c]  bg-[#5cb85c] text-white font-bold p-2 lg:px-3 rounded-md">Tìm kiếm</button>
            </div>
        </section>
    );
}
