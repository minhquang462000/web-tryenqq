import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getOneTag = async (id: string) => {
  try {
    const res = await axios.get(`${API_URL}/api/client/tags/${id}`);
    return res.data;
  } catch (e) {
    return null;
  }
};
export const getListTags = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/client/tags?limit=${null}`);
    return res.data;
  } catch (e) {
    return null;
  }
};