import Link from 'next/link';
import { FaComments } from 'react-icons/fa';
import CardComment from '../Cards/CardComment';
import RootPanagation from '../Functions/RootPanagation';

export interface IListCommentDetailProps {
}

export default function ListComment(props: IListCommentDetailProps) {
    return (
        <div className="w-full  ">
            <span className='flex items-center mb-2 gap-3 text-lg text-[#f18121]'><FaComments />Bình luận (46)</span>
            <div>
                <h4>Vào <strong className='hover:text-[#f18121] dark:text-[#f18121]'><Link href="" >Fanpage</Link></strong> like và theo dõi để ủng hộ TruyenQQ nhé. </h4>
                <textarea className='w-full h-[60px] mt-5 rounded outline-none border py-1 px-2 resize-none'
                    placeholder='hãy bình luận có văn hóa để tránh bị khóa tài khoản' name="" id="" />
                <div className='mt-2 mb-5 flex flex-col gap-2'>
                    <CardComment />
                </div>
                <RootPanagation />
            </div>
        </div>
    );
}
