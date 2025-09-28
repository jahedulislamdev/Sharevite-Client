import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/",
    withCredentials: true, // enable if needed
});

const getRequest = async (endpoint) => {
    try {
        const response = await instance.get(endpoint);
        return response.data; // send only response.data bcz other are not neccessary
    } catch (error) {
        console.error(
            "GET request failed:",
            error.response?.data || error.message,
        );
        throw error;
    }
};

const postRequest = async (endpoint, data) => {
    try {
        const response = await instance.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error(
            "POST request failed:",
            error.response?.data || error.message,
        );
        throw error;
    }
};

const patchRequest = async (endpoint, data) => {
    try {
        const response = await instance.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error(
            "PATCH request failed:",
            error.response?.data || error.message,
        );
        throw error;
    }
};

const deleteRequest = async (endpoint) => {
    try {
        const response = await instance.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error(
            "DELETE request failed:",
            error.response?.data || error.message,
        );
        throw error;
    }
};

// post image to hostinger

export { getRequest, postRequest, patchRequest, deleteRequest };
