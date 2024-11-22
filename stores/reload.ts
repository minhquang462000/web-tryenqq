import { create } from "zustand";
interface IGetEmailForLogin {
  isReload: boolean;
  setIsReload: (isReload: boolean) => void;
}
export const useReloadPage = create<IGetEmailForLogin>((set) => ({
  isReload: false,
  setIsReload: (isReload) => set({ isReload }),
}));
