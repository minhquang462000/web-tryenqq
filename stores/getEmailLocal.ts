import { create } from "zustand";
interface IGetEmailForLogin {
    email: string;
    setEmail: (email: string) => void;
}
export const useGetEmailForLogin = create<IGetEmailForLogin>((set) => ({
    email: "",
    setEmail: (email) => set({ email }),
}))