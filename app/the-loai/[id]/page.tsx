import CardMain from "@/components/Cards/CarsdMain";
import RootPanagation from "@/components/Functions/RootPanagation";
import ListFillterStoryOfType from "@/components/Lists/ListFilterStoryofType";
import { MainLayout } from "@/layouts";
import { FaFlag } from "react-icons/fa";


export interface IpageProps {
}

export default function page(props: IpageProps) {
    return (
        <MainLayout>
            <main className="min-w-screen px-2 lg:px-0  bg-[#ebebeb] dark:bg-[#18191a] ">
                <div className=" lg:max-w-[1200px] flex flex-col gap-5 p-4 px-2 lg:px-4  pb-10 md:pb-10 m-auto">
                    <h2 className="flex gap-1 text-xl font-semibold items-center text-[#56ccf2]"><FaFlag /> Truyện Action</h2>
                    <span className="bg-white dark:bg-[#242526] shadow p-4 rounded">
                        Thể loại này thường có nội dung về đánh nhau, bạo lực, hỗn loạn, với diễn biến nhanh
                    </span>
                    <ListFillterStoryOfType />
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4  lg:grid-cols-6 lg:gap-5'>
                        <CardMain />
                        <CardMain />
                        <CardMain />
                        <CardMain />
                        <CardMain />
                        <CardMain />
                        <CardMain />
                        <CardMain />
                    </div>
                    <RootPanagation />
                </div>
            </main>
        </MainLayout>
    );
}
