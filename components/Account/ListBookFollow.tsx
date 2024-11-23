import * as React from 'react';

export interface IAppProps {
}

export default function ListBookFollow (props: IAppProps) {
  return (
    <div className='pb-5 border-b text-sm lg:text-base flex flex-col gap-4'>
       <div className="border-[#3c763d] rounded-md border p-4 my-2 bg-[#dff0d8] text-[#3c763d]">
        Truyện mới đọc gần đây sẽ hiển thị ở đầu danh sách.
      </div>
      <ul className="bg-[#222222] text-white border-t-2  border-[#ee2c74] h-[40px] flex items-center text-start  font-bold">
        <li className="w-1/3 pl-3 line-clamp-1 lg:pl-10">TÊN TRUYỆN</li>
        <li className="w-1/3 pl-3 line-clamp-1 lg:pl-10">XEM GẦN NHẤT</li>
        <li className="w-1/3 pl-3 line-clamp-1 lg:pl-10">CHAP MỚI NHẤT</li>
      </ul>
      <p className="font-light pl-2">Không có truyện theo dõi</p>
      <p className="font-light pl-2">
        Mọi vấn đề liên quan đến tài khoản & lịch sử vui lòng
        <span className="text-[#288ad6] cursor-pointer px-1 hover:text-[#ae4ad9]">
          liên hệ
        </span>
        chúng tôi.
      </p>
    </div>
  );
}
