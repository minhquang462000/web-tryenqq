
import { CgCloseO } from "react-icons/cg";

export interface ICardHistoryProps {
}

export default function CardStoryHistory(props: ICardHistoryProps) {
    return (
        <div className="w-full text-center relative">
            <img
                className="w-full  object-cover rounded-md md:h-[220px] cursor-pointer"
                src="https://i.truyenvua.com/ebook/190x247/dai-tan-ta-con-trai-tan-thuy-hoang-giet-dich-thang-cap-thanh-than_1689573091.jpg?gt=hdfgdfg&mobile=2" alt="" />
            <h4 className="cursor-pointer hover:text-[#f18121] transition-all duration-300  w-full mt-2 overflow-hidden truncate font-bold text-base">
                Đại Tần: Ta Con Trai Tần Thủy Hoàng Giết Địch Thăng Cấp Thành Thần
            </h4>
            <button className="hover:text-[#f18121] transition-all duration-300 font-semibold text-sm"> Đọc tiếp chương 1</button>
            <button className="absolute top-1 text-black right-1 bg-white p-[2px] rounded-full"><CgCloseO size={18} /></button>
        </div>
    );
}
