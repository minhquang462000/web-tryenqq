import { IFilter } from "@/interfaces";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getListCategory = async (query: IFilter) => {
  const page = query.page ? query.page : "";
  const limit = query.limit ? query.limit : "";
  const search = query.search ? query.search : "";
  const params: any = {
    page,
    limit,
    name: search,
  };
  const keys = Object.keys(params) as (keyof IFilter)[];
  keys.forEach((key) => {
    if (
      params[key] === "" ||
      (Array.isArray(params[key]) && params[key].length === 0)
    ) {
      delete params[key];
    }
  });
  try {
    const res = await axios.get(`${API_URL}/api/client/categories`, {
      params,
    });
    return res.data;
  } catch (e) {
    return null;
  }
};
export const getOneCategory = async (id: string) => {
  try {
    const res = await axios.get(`${API_URL}/api/client/categories/${id}`);
    return res.data;
  } catch (e) {
    return null;
  }
};