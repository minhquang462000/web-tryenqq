import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const addListFavorite = async (bookId: string) => {
  const userId = Cookies.get("user");
  try {
    if (userId) {
      await axios.post(`${API_URL}/api/favorite`, {
        userId,
        bookId,
      });
      toast.success("Đã thêm vào danh sách truyện theo dõi");
    }
  } catch (e) {
    console.log("error");
  }
};
export const updateBookFavorite = async (bookId: string) => {
  const userId = Cookies.get("user");
  try {
    await axios.patch(`${API_URL}/api/favorite`, {
      userId,
      bookId,
    });
  } catch (e) {
    console.log("error");
  }
};
export const removeBookFavorite = async (bookId: string) => {
  const userId = Cookies.get("user");
  try {
    await axios.delete(`${API_URL}/api/favorite`, {
      data: {
        userId,
        bookId,
      },
    });
  } catch (e) {
    console.log("error");
  }
};
