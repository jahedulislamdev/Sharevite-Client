import axios from "axios";
import { toast } from "sonner";
import { useAuthContext } from "./useContext";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {
    const { logoutUser } = useAuthContext();
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/",
        withCredentials: true,
    });

    // Only response interceptor needed for 401/403
    axiosSecure.interceptors.response.use(
        (response) => response,
        (error) => {
            const status = error?.response?.status;

            if (status === 401 || status === 403 || status === 404) {
                toast.message("Session expired!", {
                    description: "Please log in again",
                    duration: 2000,
                    style: {
                        backgroundColor: "#22c55e",
                        color: "white",
                        fontWeight: "500",
                        borderRadius: "8px",
                        padding: "12px",
                    },
                });
                logoutUser(); // safe logout call
                navigate("/login");
            }

            return Promise.reject(error);
        },
    );

    return axiosSecure;
};

export default useAxiosSecure;
