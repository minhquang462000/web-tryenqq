

export interface ICardStorySearchProps {
}

export default function CardStorySearch(props: ICardStorySearchProps) {
    return (
        <div className="flex p-2 px-3 hover:bg-[#cacece] dark:bg-[#3a3b3c] dark:border-[#2a2b2c]  gap-3 border-b-[2.5px] border-[#cacece] justify-between">
            <img className="w-[70px] h-[90px] object-cover" src="https://i.truyenvua.com/ebook/80x105/dao-hai-tac_1552224567.jpg?gt=hdfgdfg&mobile=2" alt="" />
            <div className="flex py-1 flex-col">
                <h4 className="font-semibold text-sm  lg:text-base">OnePiece</h4>
                <p className="w-2/3 font-medium  line-clamp-3 text-wrap">
                    Onepunch Man; One Punch Man; ONEPUNCH-MAN; Đấm Phát Chết Luôn; Anh Hùng Onepunch; One-Punch Man
                    Onepunch Man; One Punch Man; ONEPUNCH-MAN; Đấm Phát Chết Luôn; Anh Hùng Onepunch; One-Punch Man
                </p>
                <p className="text-xs lg:text-sm font-light">Chương 460</p>
            </div>
        </div>
    );
}
