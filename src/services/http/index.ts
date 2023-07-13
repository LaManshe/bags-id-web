import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

api.interceptors.response.use(
    response => response,
    error => {
        console.error("Ошибка при выполнении запроса:", error);
        return Promise.reject(error);
    }
);

export default api;