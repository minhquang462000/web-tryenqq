'use client'
import { useEffect, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

export interface IRegisterProps {
    openRegister: boolean;
    setOpenRegister: (openRegister: boolean) => void;
    setOpenLogin: (openLogin: boolean) => void;
}

export default function Register(props: IRegisterProps) {
    const { openRegister, setOpenRegister, setOpenLogin } = props;
    const [verificationCode, setVerificationCode] = useState('');

    function generateRandomCode(length: number) {
        const characters = '0123456789';
        let result = '';
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
    return (
        <div className={`bg-[#333] fixed top-0 text-black z-[999] w-full text-sm  h-screen bg-opacity-40 ${openRegister ? "block" : "hidden"} `}>
            <section className="bg-white flex flex-col gap-3  m-auto  w-full md:w-[430px] mt-[25vh]  p-5">
                <h2 className="font-semibold text-center text-xl">ĐĂNG KÝ MỚI</h2>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Email</label>
                    <input className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-full rounded" type="text" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Mật khẩu</label>
                    <input className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-full rounded" type="password" />
                </div>
                <div className="flex items-center gap-3">
                    <input placeholder="Mã xác nhận" className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-1/2 rounded" type="text" />
                    <span className="flex items-center gap-2">
                        <span className="text-[#3f94d5] w-[70px] font-extrabold italic text-xl">{verificationCode}</span>
                        <button onClick={refreshCode}><FiRefreshCw size={15} /></button>
                    </span>
                </div>
                <div className="flex py-3 items-center justify-between border-b-2">
                    <button className="hover:text-[#f18121] font-semibold" onClick={() => { setOpenRegister(false), setOpenLogin(true) }}>Đăng nhập</button>
                    <div className="flex gap-2 font-semibold text-white">
                        <button className="bg-[#f18121] p-2 rounded-md">Đăng ký</button>
                        <button onClick={() => setOpenRegister(false)} className="p-2 px-3 rounded-md bg-[#3f94d5]">Hủy</button>
                    </div>
                </div>
                <div className="flex gap-3 text-white justify-center">
                    <button className="w-8 h-8 bg-[#2196f3] rounded-full flex justify-center items-center"><FaFacebookF /></button>
                    <button className="w-8 h-8 bg-[#e74c3c] rounded-full flex justify-center items-center"><FaGoogle /></button>
                </div>
            </section>
        </div>
    );
}
