import { data } from "autoprefixer";
import axios from "axios";

const API_URL = "http://localhost:5000/api/news";

export const getAllNews = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.log("gagal fetch berita: ", error);
    return [];
  }
};

export const createNews = async () => {
  try {
    const res = await axios.post(API_URL, data);
    return res.data;
  } catch (error) {
    console.log("Berita gagal ditambahkan: ", error);
    throw error;
  }
};
