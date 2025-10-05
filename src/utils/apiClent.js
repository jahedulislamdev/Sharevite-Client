import axiosPublic from "./axiosPublic";

// public api requests
const getRequest = async (endpoint) => {
    try {
        const response = await axiosPublic.get(endpoint);
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
        const response = await axiosPublic.post(endpoint, data);
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
        const response = await axiosPublic.patch(endpoint, data);
        return response.data;
    } catch (error) {
        console.error(
            "PATCH request failed:",
            error.response?.data || error.message,
        );
        throw error;
    }
};

const deleteRequest = async (endpoint, id) => {
    try {
        const response = await axiosPublic.delete(`${endpoint}/${id}`);
        return response.data;
    } catch (error) {
        console.error(
            "DELETE request failed:",
            error.response?.data || error.message,
        );
        throw error;
    }
};

export { getRequest, postRequest, patchRequest, deleteRequest };
