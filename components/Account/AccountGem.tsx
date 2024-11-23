"use client";

import { useCallback, useState } from "react";
import GemHistory from "./GemHistory";

export interface IAppProps {}

export default function AccountGem(props: IAppProps) {
  const cssLi = `hover:border-t-[#721799] cursor-pointer dark:hover:text-[#ff9601] py-2 dark:border-white dark:hover:border-t-[#ff0000] border-t-2 border-transparent`;
  const [tabIndex, setTabIndex] = useState(0);
  const renderByTab = useCallback(() => {
    switch (tabIndex) {
      case 0:
        return <GemHistory />;
      case 1:
        return (
          <div className="flex text-sm flex-col gap-4">
            <h5 className="font-bold  text-lg">Lưu ý</h5>
            <ul className="list-disc pl-5">
              <li>Mỗi ngày chỉ được điểm danh 1 lần</li>
              <li>Mỗi lần điểm danh sẽ nhận được 100 Linh thạch</li>
              <li>Điểm danh liên tục 7 ngày sẽ tặng thêm 300 Linh thạch</li>
            </ul>
            <button className="bg-[#5cb85c] w-max hover:bg-[#4cae4c] rounded-md border-[4cae4c] px-3 py-2 text-white ">
              Điểm danh
            </button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col text-sm gap-4">
            <h5 className="font-bold  text-lg">Lưu ý</h5>
            <ul className="list-disc pl-5">
              <li>Mỗi ngày có <b>1 lượt quay</b> miễn phí</li>
              <li>Phần thưởng sẽ được biết khi kết thúc vòng quay</li>
            </ul>
          </div>
        );
      case 3:
        return <p className="text-sm">Tính năng đang thực hiện</p>;
      default:
        break;
    }
  }, [tabIndex]);
  return (
    <div className="dark:text-white text-sm lg:text-base">
      <h3 className="text-2xl col-span-2 font-bold h-max flex flex-col gap-1">
        LINH THẠCH
        <span className="w-[80px] h-[2px] bg-[#ee2c74]" />
      </h3>
      <div className="mt-5 flex flex-col gap-4">
        <h4 className="border-l-[3px]  text-lg border-[#ee2c74] pl-2">
          Linh thạch hiện có: <span className="text-[#ff0000]">100</span>
        </h4>
        <p className="italic">
          Linh thạch thể hiện mức độ Tài Phú của bạn tại NetTruyen, dùng để,
          <span className="text-[#288ad6] mr-1 cursor-pointer dark:text-[#ff9601] dark:hover:text-[#ff0000] hover:text-[#ae4ad9]">
            {" "}
            mua vật phẩm
          </span>
          đấy truyện yêu thích lên Top xếp hạng, thi đua Top thành viên, tạo
          Bang phái, unlock comment, unlock ban, thách đấu,... Kiếm Linh thạch
          bằng cách làm nhiệm vụ
          <span className="text-[#ff0000] ml-1">
            Điểm danh, Làm nhiệm vụ ngày, Review truyện,...
          </span>
        </p>
        <ul className="grid bg-[#f9f9f9]  dark:bg-[#423e3e] grid-cols-4 text-center">
          <li
            onClick={() => setTabIndex(0)}
            className={`${cssLi} ${
              tabIndex === 0
                ? "bg-white dark:bg-transparent  dark:border-t-[#ff0000] border-x border-x-[#dfdfdf]  border-t-[#721799]"
                : ""
            }`}
          >
            Lịch sử
          </li>
          <li
            onClick={() => setTabIndex(1)}
            className={`${cssLi} ${
              tabIndex === 1
                ? "bg-white dark:bg-transparent  dark:border-t-[#ff0000] border-x border-x-[#dfdfdf]  border-t-[#721799]"
                : ""
            }`}
          >
            Điểm danh
          </li>
          <li
            onClick={() => setTabIndex(2)}
            className={`${cssLi} ${
              tabIndex === 2
                ? "bg-white dark:bg-transparent  dark:border-t-[#ff0000] border-x border-x-[#dfdfdf]  border-t-[#721799]"
                : ""
            }`}
          >
            Vòng quay
          </li>
          <li
            onClick={() => setTabIndex(3)}
            className={`${cssLi} ${
              tabIndex === 3
                ? "bg-white dark:bg-transparent  dark:border-t-[#ff0000] border-x border-x-[#dfdfdf]  border-t-[#721799]"
                : ""
            }`}
          >
            Nhiệm vụ
          </li>
        </ul>
        {renderByTab()}
      </div>
    </div>
  );
}
