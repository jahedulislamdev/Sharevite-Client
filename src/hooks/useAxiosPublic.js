import axios from "axios";
const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/",
        withCredentials: true,
    });
    return { axiosPublic };
};

export default useAxiosPublic;
