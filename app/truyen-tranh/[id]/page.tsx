import CardInfoDetail from '@/components/Cards/CardInfoDetail';
import CardItemDetail from '@/components/Cards/CardItemDetail';
import ListChapterDetail from '@/components/Lists/ListChapterDetail';
import ListComment from '@/components/Lists/ListComment';
import { MainLayout } from '@/layouts';
import Link from 'next/link';
import * as React from 'react';

export interface IpageProps {
}

export default function page(props: IpageProps) {
    return (
        <MainLayout>
            <main className="min-w-full px-2 lg:px-0 pt-5 bg-[#ebebeb] dark:bg-[#18191a] ">
                <div className='bg-white w-full dark:bg-[#242526] lg:max-w-[1200px] m-auto p-4 pb-8  flex flex-col gap-3 rounded-md'>
                    <ul className='flex flex-wrap text-sm font-semibold gap-3 '>
                        <li><Link href={"/"}>Trang Chủ</Link></li>

                        <li className='before:content-["/"] before:mr-3'>Lời Thú Nhận Của Chúa Tể Bóng Tối </li>
                    </ul>
                    <CardItemDetail />
                    <CardInfoDetail />
                    <ListChapterDetail />
                    <ListComment />
                </div>
            </main>
        </MainLayout>
    );
}
