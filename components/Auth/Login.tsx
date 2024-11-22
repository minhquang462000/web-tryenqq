'use client'
import { useEffect, useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';

export interface ILoginProps {
    openLogin: boolean;
    setOpenRegister: (openRegister: boolean) => void;
    setOpenLogin: (openLogin: boolean) => void;
}

export default function Login(props: ILoginProps) {
    const { openLogin, setOpenRegister, setOpenLogin } = props;
    const [forgetPassword, setForgetPassword] = useState(false);
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
        <div className={`bg-[#333] fixed top-0 text-black  z-[999] w-full text-sm h-screen bg-opacity-40 ${openLogin ? "block" : "hidden"} `}>
            <section className="bg-white flex flex-col gap-3  m-auto w-full md:w-[430px] mt-[25vh]  p-5">
                {!forgetPassword ? <h2 className="font-semibold text-center text-xl">ĐĂNG NHẬP</h2> :
                    <h2 className="font-semibold text-center text-xl">QUÊN MẬT KHẨU</h2>}
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Email</label>
                    <input className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-full rounded" type="text" />
                </div>
                <div className={`flex flex-col gap-1 ${forgetPassword && 'hidden'}`}>
                    <label htmlFor="">Mật khẩu</label>
                    <input className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-full rounded" type="password" />
                </div>
                <div className={`flex items-center gap-3 ${!forgetPassword && 'hidden'}`}>
                    <input placeholder="Mã xác nhận" className="border-2 p-3 outline-none bg-transparent border-[#ebebeb]  w-1/2 rounded" type="text" />
                    <span className="flex items-center gap-2">
                        <span className="text-[#3f94d5] w-[70px] font-extrabold italic text-xl">{verificationCode}</span>
                        <button onClick={refreshCode}><FiRefreshCw size={15} /></button>
                    </span>
                </div>
                <button className={`${!forgetPassword && 'hidden'} w-full font-semibold text-white text-base py-2 rounded-md bg-[#f18121]`}>Gửi</button>
                {!forgetPassword ?
                    <div className="flex py-3 items-center justify-between border-b-2">
                        <ul className='flex  font-semibold gap-1'>
                            <li className="hover:text-[#f18121] cursor-pointer" onClick={() => { setOpenLogin(false), setOpenRegister(true) }}>
                                Đăng ký
                            </li>|
                            <li onClick={() => setForgetPassword(true)} className='hover:text-[#f18121] cursor-pointer'>Quên mật khẩu</li>
                        </ul>
                        <div className={`flex gap-2 font-semibold text-white `}>
                            <button className="bg-[#f18121] p-2 rounded-md">Đăng nhập</button>
                            <button onClick={() => setOpenLogin(false)} className="p-2 px-3 rounded-md bg-[#3f94d5]">Hủy</button>
                        </div>
                    </div>
                    :
                    <div className="flex py-3 items-center  font-semibold justify-between border-b-2">
                        <button className="hover:text-[#f18121]" onClick={() => { setForgetPassword(false), setOpenLogin(true) }}>Đăng nhập</button>
                        <button onClick={() => { setForgetPassword(false), setOpenLogin(false) }} className="p-2 px-3 text-white rounded-md bg-[#3f94d5]">Hủy</button>
                    </div>}
                <div className="flex gap-3 text-white justify-center">
                    <button className="w-8 h-8 bg-[#2196f3] rounded-full flex justify-center items-center"><FaFacebookF /></button>
                    <button className="w-8 h-8 bg-[#e74c3c] rounded-full flex justify-center items-center"><FaGoogle /></button>
                </div>
            </section>
        </div>
    );
}
