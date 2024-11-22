import axios from "axios";
import { updateBookFavorite } from "./favorite";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const handleUpdateView = async (id: string) => {
  try {
    await axios.post(`${API_URL}/api/client/books-views/${id}`);
    updateBookFavorite(id);
  } catch (e) {
    console.log(e);
  }
};
