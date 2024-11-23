"use client";
import { setTokenCookie } from "@/api/login";
import { useGetEmailForLogin } from "@/stores";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { toast } from "react-toastify";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL || "";
export interface ILoginProps {
  openLogin: boolean;
  setOpenRegister: (openRegister: boolean) => void;
  setOpenLogin: (openLogin: boolean) => void;
}

export default function Login(props: ILoginProps) {
  const { openLogin, setOpenRegister, setOpenLogin } = props;
  const [forgetPassword, setForgetPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
    inputCode: "",
  });
  const { email } = useGetEmailForLogin();
  const [dataLogin, setDataLogin] = useState({
    account: email,
    password: "",
    inputCode: "",
  });
  function generateRandomCode(length: number) {
    const characters = "0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }
  useEffect(() => {
    setVerificationCode(generateRandomCode(5));
  }, []);
  const refreshCode = () => {
    setVerificationCode(generateRandomCode(5));
  };
  const router = useRouter();
  const handleLogin = async () => {
    if (!dataLogin.account || !dataLogin.password) {
      const newErrors = Object.keys(dataLogin).reduce((errors, key) => {
        if (!dataLogin[key as keyof typeof dataLogin]) {
          errors[key as keyof typeof dataLogin] = "Không được để trống";
        }
        return errors;
      }, {} as Partial<typeof dataLogin>);

      setError(newErrors as typeof error);
    } else {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
          dataLogin
        );
        if (res.data.account.status === 0) {
          toast.error("Tài khoản của bạn đang bị khoá");
          return;
        }
        setTokenCookie(res.data.token, res.data.account.id);
        toast.success("Đăng nhập thành công ..");
        setOpenLogin(false);
        router.refresh();
      } catch (err: any) {
        toast.error(err.response.data.error);
      }
    }
  };
  useEffect(() => {
    if (Object.values(error).some((value) => value !== "")) {
      const timeout = setTimeout(() => {
        setError({
          email: "",
          password: "",
          inputCode: "",
        });
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [error]);
  return (
    <div
      className={`bg-[#333] fixed top-0 text-black  z-[999] w-full text-sm h-screen bg-opacity-40 ${
        openLogin ? "block" : "hidden"
      } `}
    >
      <section className="bg-white flex flex-col gap-3  m-auto w-full md:w-[430px] mt-[25vh]  p-5">
        {!forgetPassword ? (
          <h2 className="font-semibold text-center text-xl">ĐĂNG NHẬP</h2>
        ) : (
          <h2 className="font-semibold text-center text-xl">QUÊN MẬT KHẨU</h2>
        )}
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) =>
              setDataLogin({ ...dataLogin, account: e.target.value })
            }
            name="email"
            className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-full rounded"
            type="text"
          />
          <p className="text-[#ff0000]">{error?.email}</p>
        </div>
        <div className={`flex flex-col gap-1 ${forgetPassword && "hidden"}`}>
          <label htmlFor="">Mật khẩu</label>
          <input
            onChange={(e) =>
              setDataLogin({ ...dataLogin, password: e.target.value })
            }
            name="password"
            className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-full rounded"
            type="password"
          />
          <p className="text-[#ff0000]">{error?.password}</p>
        </div>
        <div
          className={`flex items-center gap-3 ${!forgetPassword && "hidden"}`}
        >
          <input
            placeholder="Mã xác nhận"
            className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-1/2 rounded"
            type="text"
          />
          <span className="flex items-center gap-2">
            <span className="text-[#3f94d5] w-[70px] font-extrabold italic text-xl">
              {verificationCode}
            </span>
            <button onClick={refreshCode}>
              <FiRefreshCw size={15} />
            </button>
          </span>
        </div>
        <button
          className={`${
            !forgetPassword && "hidden"
          } w-full font-semibold text-white text-base py-2 rounded-md bg-[#f18121]`}
        >
          Gửi
        </button>
        {!forgetPassword ? (
          <div className="flex py-3 items-center justify-between border-b-2">
            <ul className="flex  font-semibold gap-1">
              <li
                className="hover:text-[#f18121] cursor-pointer"
                onClick={() => {
                  setOpenLogin(false), setOpenRegister(true);
                }}
              >
                Đăng ký
              </li>
              |
              <li
                onClick={() => setForgetPassword(true)}
                className="hover:text-[#f18121] cursor-pointer"
              >
                Quên mật khẩu
              </li>
            </ul>
            <div className={`flex gap-2 font-semibold text-white `}>
              <button
                onClick={handleLogin}
                className="bg-[#f18121] p-2 rounded-md"
              >
                Đăng nhập
              </button>
              <button
                onClick={() => setOpenLogin(false)}
                className="p-2 px-3 rounded-md bg-[#3f94d5]"
              >
                Hủy
              </button>
            </div>
          </div>
        ) : (
          <div className="flex py-3 items-center  font-semibold justify-between border-b-2">
            <button
              className="hover:text-[#f18121]"
              onClick={() => {
                setForgetPassword(false), setOpenLogin(true);
              }}
            >
              Đăng nhập
            </button>
            <button
              onClick={() => {
                setForgetPassword(false), setOpenLogin(false);
              }}
              className="p-2 px-3 text-white rounded-md bg-[#3f94d5]"
            >
              Hủy
            </button>
          </div>
        )}
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
