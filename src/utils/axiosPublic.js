import axios from "axios";

const axiosPublic = axios.create({
    baseURL: import.meta.VITE_API_BASE_URL || "http://localhost:5000/",
});

export default axiosPublic;
