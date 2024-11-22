import axios from "axios";
import { cookies } from "next/headers";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getOneAuthor = async (id: string) => {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;
    try {
      const res = await axios.get(`${API_URL}/api/client/authors/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (e) {
      return null;
    }
  };
  