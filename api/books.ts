import { IBook, IFilter } from "@/interfaces";
import axios from "axios";
import { cookies } from "next/headers";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getListBooks(query: IFilter) {
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  const name = query.search ? query.search : "";
  const tags = query.tag ? query.tag : "";
  const categories = query.categories ? query.categories : "";
  const authors = query.author ? query.author : "";
  const views = query.views ? query.views : 0;
  const sortKey = query.sortKey ? query.sortKey : "";
  const contributor = query.contributor ? query.contributor : "";
  ///---> Params
  const params: any = {
    page,
    limit,
    name,
    tags,
    categories,
    authors,
    views,
    status: query.status ? query.status : "",
    contributor,
    sortKey,
    chapter: query.chapter ? query.chapter : "",
  };
  const keys = Object.keys(params) as (keyof IFilter)[];
  keys.forEach((key) => {
    if (
      params[key] === "" ||
      (Array.isArray(params[key]) && params[key].length === 0) ||
      !params[key]
    ) {
      delete params[key];
    }
  });
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  try {
    const res = await axios.get(`${API_URL}/api/client/books`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res.data as IBook[];
    const total = res.headers["x-total-count"];
    return { data, total };
  } catch (e) {
    return null;
  }
}
export const getListFavorite = async (query: IFilter) => {
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  const userId = cookie.get("user")?.value;
  ///---> Params
  const params: any = {
    page,
    limit,
    read: query.read ? "false" : "",
  };
  const keys = Object.keys(params) as (keyof IFilter)[];
  keys.forEach((key) => {
    if (
      params[key] === "" ||
      (Array.isArray(params[key]) && params[key].length === 0) ||
      !params[key]
    ) {
      delete params[key];
    }
  });
  try {
    const res = await axios.get(`${API_URL}/api/favorite/${userId}`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res.data;
    const total = res.headers["x-total-count"];
    return { data, total };
  } catch (e) {
    return null;
  }
};
export const getOneBook = async (id: string) => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  try {
    const res = await axios.get(`${API_URL}/api/client/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    return null;
  }
};
