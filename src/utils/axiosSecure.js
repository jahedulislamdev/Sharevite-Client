import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/",
    withCredentials: true,
});

// Add interceptor for error or token expire handling
axios.interceptors.request.use(
    (res) => res,
    (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
            console.warn("Unautherized! Logging out...");
            Promise.reject(error);
        }
    },
);
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
            console.warn("Unautherized! Logging out...");
            Promise.reject(error);
        }
    },
);

export default axiosSecure;
