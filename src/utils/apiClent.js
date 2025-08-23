import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/",
    //  withCredentials: true,
});
const postRequest = async (endpoint, data) => {
    try {
        const res = await instance.post(endpoint, data);
        return res.data;
    } catch (error) {
        console.error("Request Faild!", error);
        throw error;
    }
};
const getRequest = () => {};
const updateRequest = () => {};
const deleteRequest = () => {};

export { postRequest, getRequest, updateRequest, deleteRequest };
