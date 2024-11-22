
import CardStoryFollow from "@/components/Cards/CardStoryFollow";
import CardStoryHistory from "@/components/Cards/CardStoryHistory";
import { MainLayout } from "@/layouts";
import { FaFlag } from "react-icons/fa";


export interface IpageProps {
}

export default function page(props: IpageProps) {
    return (
        <MainLayout>
            <main className="min-w-full px-2 lg:px-0  bg-[#ebebeb] dark:bg-[#18191a] ">
                <div className=" lg:max-w-[1200px] flex flex-col gap-5 p-4 px-2 lg:px-4  pb-10 md:pb-10 m-auto">
                    <h2 className="flex gap-1 text-xl font-semibold items-center text-[#56ccf2]"><FaFlag /> Truyện Đang Theo Dõi </h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4  lg:grid-cols-6 lg:gap-5'>
                        <CardStoryFollow />
                        <CardStoryFollow />
                        <CardStoryFollow />
                        <CardStoryFollow />
                        <CardStoryFollow />
                        <CardStoryFollow />
                        <CardStoryFollow />
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}
