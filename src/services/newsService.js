import axios from "axios";

const API_URL = "http://localhost:5000/api/news";

// Create
export const createNews = async (data) => {
  return (await axios.post(API_URL, data)).data;
};

// Read
export const getAllNews = async () => {
  return (await axios.get(API_URL)).data;
};

// Update
export const updateNews = async (id, data) => {
  return (await axios.put(`${API_URL}/${id}`, data)).data;
};

// Delete
export const deleteNews = async (id) => {
  return (await axios.delete(`${API_URL}/${id}`)).data;
};
