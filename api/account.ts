
import axios from "axios";
import { cookies } from "next/headers";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getAccount = async (name: string) => {
  try {
    const res = await axios.get(`${API_URL}/api/client/users/${name}`);
    return res.data;
  } catch (e) {
    return null;
  }
};
export const getAccountByUserId = async () => {
  const cookie = await cookies();
  const id = cookie.get("user")?.value;
  try {
    const res = await axios.get(`${API_URL}/api/client/userId/${id}`);
    return res.data;
  } catch (e) {
    return null;
  }
};