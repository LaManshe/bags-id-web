import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;

const api: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.error("Ошибка при выполнении запроса:", error);
    return Promise.reject(error);
  }
);

export default api;