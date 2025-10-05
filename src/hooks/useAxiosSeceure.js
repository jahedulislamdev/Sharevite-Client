import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useContext";

const useAxiosSecure = () => {
    const { logoutUser } = useAuthContext();
    const navigate = useNavigate();
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
                logoutUser();
                navigate("/login");
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
                logoutUser();
                navigate("/login");
                return Promise.reject(error);
            }
        },
    );
    return axiosSecure;
};

export default useAxiosSecure;
