import axios from "axios";

const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/",
        withCredentials: true,
    });

    // Request Interceptor
    axiosSecure.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            const status = error?.response?.status;
            if (status === 401 || status === 403) {
                console.warn("Unautherized! Logging out...");
                return Promise.reject(error);
            }
        },
    );

    // Response Interceptor (for handling unauthorized or errors globally)
    axiosSecure.interceptors.response.use(
        (config) => {
            return config;
        },
        (error) => {
            const status = error?.response?.status;
            if (status === 401 || status === 403) {
                console.warn("Unautherized! Logging out...");
                return Promise.reject(error);
            }
        },
    );
    return axiosSecure;
};

export default useAxiosSecure;
