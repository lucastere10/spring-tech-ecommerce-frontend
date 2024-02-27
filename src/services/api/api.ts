import axios from "axios";
import { getSession } from 'next-auth/react';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session) {
    config.headers.Authorization = session.token;
  }
  return config;
});

export const fetchProductById = async (id: string) => {
  try {
    const response = await api.get(`/produtos/${id}`);
    return { data: response.data, error: null };
  } catch (err: any) {
    if (err.response) {
      console.error('Error fetching data:', err.response.data);
      return { data: null, error: err.response.data };
    } else {
      console.error('Error:', err.message);
      return { data: null, error: err.message };
    }
  }
};

export default api;
