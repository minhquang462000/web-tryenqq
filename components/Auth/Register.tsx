"use client";
import { isValidEmail } from "@/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { toast } from "react-toastify";
import { useGetEmailForLogin } from "@/stores/getEmailLocal";
export interface IRegisterProps {
  openRegister: boolean;
  setOpenRegister: (openRegister: boolean) => void;
  setOpenLogin: (openLogin: boolean) => void;
}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL || "";
export default function Register(props: IRegisterProps) {
  const { openRegister, setOpenRegister, setOpenLogin } = props;
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState({
    fullName: "",
    email: "",
    password: "",
    cfPassword: "",
    name: "",
    inputCode: "",
  });
  const { setEmail } = useGetEmailForLogin()
  const [dataRegister, setDataRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    cfPassword: "",
    name: "",
    inputCode: "",
  });
  const router = useRouter();
  function generateRandomCode(length: number) {
    const characters = "0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }
  const refreshCode = () => {
    setVerificationCode(generateRandomCode(5));
  };
  useEffect(() => {
    refreshCode();
  }, []);
  const handleRegister = async () => {
    if (
      !dataRegister.fullName ||
      !dataRegister.email ||
      !dataRegister.password ||
      !dataRegister.cfPassword ||
      !dataRegister.name ||
      !dataRegister.inputCode
    ) {
      const newErrors = Object.keys(dataRegister).reduce((errors, key) => {
        if (!dataRegister[key as keyof typeof dataRegister]) {
          errors[key as keyof typeof dataRegister] = "Không được để trống";
        }
        return errors;
      }, {} as Partial<typeof dataRegister>);

      setError(newErrors as typeof error);
    } else if (!isValidEmail(dataRegister.email)) {
      setError({ ...error, email: "Email khóng hợp lệ" });
    } else if (dataRegister.password !== dataRegister.cfPassword) {
      setError({
        ...error,
        password: "Mật khẩu không đồng nhất",
        cfPassword: "Mật khẩu không đồng nhất",
      });
    } else if (dataRegister.inputCode !== verificationCode) {
      setError({
        ...error,
        inputCode: "Mã xác nhận khóng chính xác",
      });
    } else {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/register`,
          dataRegister
        );
        toast.success("Đăng ký thành công");
        setEmail(dataRegister.email)
        setOpenRegister(false), setOpenLogin(true);
      } catch (err: any) {
        toast.error(err.response.data.error);
      }
    }
  };
  useEffect(() => {
    if (Object.values(error).some((value) => value !== "")) {
      const timeout = setTimeout(() => {
        setError({
          fullName: "",
          email: "",
          password: "",
          cfPassword: "",
          name: "",
          inputCode: "",
        });
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [error]);
  return (
    <div
      className={`bg-[#333] fixed top-0 text-black z-[999] w-full text-sm  h-screen bg-opacity-40 ${
        openRegister ? "block" : "hidden"
      } `}
    >
      <section className="bg-white flex flex-col  gap-3  m-auto  w-full md:w-[430px] mt-[10vh]  p-5">
        <h2 className="font-semibold text-center text-xl">ĐĂNG KÝ MỚI</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Họ và tên</label>
          <input
            name="fullName"
            onChange={(e) =>
              setDataRegister({ ...dataRegister, fullName: e.target.value })
            }
            className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-full rounded "
            type="text"
          />
          <p className="text-[#ff0000]">{error?.fullName}</p>
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="">Tên đăng nhập</label>
          <input
            name="name"
            onChange={(e) =>
              setDataRegister({ ...dataRegister, name: e.target.value })
            }
            className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-full rounded "
            type="text"
          />
          <p className="text-[#ff0000]">{error?.name}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input
            name="email"
            className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-full rounded "
            type="email"
            onChange={(e) =>
              setDataRegister({ ...dataRegister, email: e.target.value })
            }
          />
          <p className="text-[#ff0000]">{error?.email}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Mật khẩu</label>
          <input
            name="password"
            onChange={(e) =>
              setDataRegister({ ...dataRegister, password: e.target.value })
            }
            className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-full rounded "
            type="password"
          />
          <p className="text-[#ff0000]">{error?.password}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Xác nhận mật khẩu</label>
          <input
            name="cfPassword"
            onChange={(e) =>
              setDataRegister({ ...dataRegister, cfPassword: e.target.value })
            }
            className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-full rounded "
            type="password"
          />
          <p className="text-[#ff0000]">{error?.cfPassword}</p>
        </div>
        <div className="">
          <div className="flex items-center gap-3">
            <input
              placeholder="Mã xác nhận"
              onChange={(e) =>
                setDataRegister({ ...dataRegister, inputCode: e.target.value })
              }
              className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-1/2 rounded"
              type="text"
            />
            <span className="flex items-center gap-2">
              <span className="text-[#3f94d5] w-[70px] select-none font-extrabold italic text-xl">
                {verificationCode}
              </span>
              <button onClick={refreshCode}>
                <FiRefreshCw size={15} />
              </button>
            </span>
          </div>
          <p className="text-[#ff0000]">{error?.inputCode}</p>
        </div>
        <div className="flex py-3 items-center justify-between border-b-2">
          <button
            className="hover:text-[#f18121] font-semibold"
            onClick={() => {
              setOpenRegister(false), setOpenLogin(true);
            }}
          >
            Đăng nhập
          </button>
          <div className="flex gap-2 font-semibold text-white">
            <button
              onClick={handleRegister}
              className="bg-[#f18121] p-2 rounded-md"
            >
              Đăng ký
            </button>
            <button
              onClick={() => setOpenRegister(false)}
              className="p-2 px-3 rounded-md bg-[#3f94d5]"
            >
              Hủy
            </button>
          </div>
        </div>
        <div className="flex gap-3 text-white justify-center">
          <button className="w-8 h-8 bg-[#2196f3] rounded-full flex justify-center items-center">
            <FaFacebookF />
          </button>
          <button className="w-8 h-8 bg-[#e74c3c] rounded-full flex justify-center items-center">
            <FaGoogle />
          </button>
        </div>
      </section>
    </div>
  );
}

