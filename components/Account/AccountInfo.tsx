"use client";
import avt_df from "@/public/images/noavatar.png";
import Image from "next/image";
import ListBookFollow from "./ListBookFollow";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { IUser } from "@/interfaces";
import Link from "next/link";
export interface IAppProps {
  account: IUser;
}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function AccountInfo({ account }: IAppProps) {
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState<string>(account?.avatar || avt_df.src);
  const [dataAccount, setDataAccount] = useState({
    name: account?.name || "",
    fullName: account?.fullName || "",
  });
  const router = useRouter();
  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const handleUpdateAvatar = async () => {
    try {
      if (avatar !== account.avatar && file) {
        const formData = new FormData();
        formData.append("images", file);
        const res = await axios.post(`${DOMAIN}/api/upload/images`, formData);
        await axios.patch(`${DOMAIN}/api/v1/users/${account?._id}`, {
          avatar: res.data[0],
        });
        setFile(null);
        router.refresh();
      } else {
        await axios.patch(`${DOMAIN}/api/v1/users/${account?._id}`, {
          name: dataAccount.name,
          fullName: dataAccount.fullName,
          avatar: account.avatar,
        });
      }
      toast.success("Cập nhật thành công");
      router.refresh();
    } catch (e: any) {
      toast.error(e.response.data.error);
    }
  };
  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col    dark:text-white  text-[#333] gap-4">
      <h3 className="text-2xl col-span-2 font-bold h-max flex flex-col gap-1">
        THÔNG TIN CHUNG
        <span className="w-[80px] h-[2px] bg-[#ee2c74]" />
      </h3>
      <div className="">
        <h5 className="border-l-[3px] mb-4 text-lg border-[#ee2c74] pl-2">
          Thông tin tài khoản
        </h5>
        <ul className="border  flex flex-col gap-2 rounded py-2 px-3">
          <li className="flex  items-center">
            <p className="w-[150px]">Số linh thạch</p>
            <p className="text-[#ff0000] mr-5">100</p>
            <Link href={"/thong-tin-ca-nhan/linhthach"}>
              <p className="text-[#288ad6] cursor-pointer dark:text-[#ff9601] dark:hover:text-[#ff0000] hover:text-[#ae4ad9]">
                Chi tiết
              </p>
            </Link>
          </li>
          <li className="flex items-center">
            <span className="w-[150px] font-medium">Họ và tên</span>
            <input
              value={dataAccount?.fullName}
              type="text"
              onChange={(e) => {
                setDataAccount({ ...dataAccount, fullName: e.target.value });
              }}
              className=" outline-none  px-2 py-1 rounded border focus:ring-1 dark:border-[#ff9601] dark:ring-0 ring-[#288ad6] bg-transparent "
            />
          </li>
          <li className="flex items-center">
            <span className="w-[150px] font-medium">Tên người dùng</span>
            <input
              value={dataAccount?.name}
              type="text"
              onChange={(e) => {
                setDataAccount({ ...dataAccount, name: e.target.value });
              }}
              className=" outline-none  px-2 py-1 rounded border focus:ring-1 dark:border-[#ff9601] dark:ring-0 ring-[#288ad6] bg-transparent "
            />
          </li>
          <li className="flex items-center">
            <span className="w-[150px] font-medium">Email</span>
            <p className="px-2 py-1">{account?.email}</p>
          </li>
          <li className="flex items-center">
            <span className="w-[150px] font-medium">Loại cấp độ</span>
            <p className="px-2 py-1">Tối thượng</p>
          </li>
          <button
            onClick={handleUpdateAvatar}
            className="text-[#288ad6]  cursor-pointer dark:text-[#ff9601] dark:hover:text-[#ff0000] hover:text-[#ae4ad9]"
          >
            Thay đổi
          </button>
        </ul>
      </div>
      <div>
        <h5 className="border-l-[3px] mb-4 text-lg border-[#ee2c74] pl-2">
          Avatar
        </h5>
        <div className="border gap-2 rounded py-2 px-3">
          <div className="flex items-center gap-3">
            <Image
              src={
                avatar === account?.avatar
                  ? `${DOMAIN}/api/avatars/${avatar}`
                  : avatar
              }
              className="w-[80px] aspect-square object-top object-cover"
              alt="avatar"
              width={80}
              height={80}
            />
            <button className="relative h-[35px]   px-3  rounded-md hover:bg-[#c23934]  text-white bg-[#d9534f] border-[#d43f3a] font-medium">
              <label htmlFor="file cursor-pointer " className=" h-full  ">
                Chọn ảnh
              </label>
              <input
                className="absolute cursor-pointer  inset-0 opacity-0 w-full h-full "
                type="file"
                name="file"
                id="file"
                onChange={handleFileChange}
              />
            </button>

            <p className="text-end ">{` jpg,jpeg,gif,png <2MB`}</p>
          </div>
          <p className="text-[red] mt-1">Avatar tục tĩu sẽ bị khóa vĩnh viễn</p>
          {file && (
            <div className="">
              <p className="text-[#23a903]">Avatar đẹp đấy, Upload thôi !!!</p>
              <button
                onClick={handleUpdateAvatar}
                className="px-3 mt-1 rounded-md font-medium text-white py-2 hover:bg-[#449d44] bg-[#5cb85c] border-[#4cae4c]"
              >
                Upload ảnh
              </button>
              <button
                onClick={() => (setFile(null), setAvatar(avt_df.src))}
                className="px-3 mt-1 rounded-md font-medium text-white ml-2 py-1 hover:bg-[#c23934] bg-[#d9534f] border-[#d43f3a]"
              >
                Xoá
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-4">
        <h5 className="text-2xl col-span-2 font-bold h-max flex flex-col gap-1">
          Truyện theo dõi
          <span className="w-[80px] h-[2px] bg-[#ee2c74]" />
        </h5>
        <ListBookFollow />
      </div>
    </div>
  );
}
