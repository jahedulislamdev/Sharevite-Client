import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSeceure";

const useApi = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    // secure post request
    const getRequest = async (endpoint, isSecure = false) => {
        try {
            if (isSecure) {
                const res = await axiosSecure.get(endpoint);
                return res.data;
            } else {
                const res = await axiosPublic.get(endpoint);
                return res.data;
            }
        } catch (error) {
            console.error("Get Request Failed:", error);
            throw error;
        }
    };
    //  secure post request
    const postRequest = async (endpoint, data, isSecure = false) => {
        try {
            if (isSecure) {
                const res = await axiosSecure.post(endpoint, data);
                return res.data;
            } else {
                const res = await axiosPublic.post(endpoint, data);
                return res.data;
            }
        } catch (error) {
            console.error("Post Request Failed :", error);
            throw error;
        }
    };
    // secure patch request
    const patchRequest = async (endpoint, data, isSecure = false) => {
        try {
            if (isSecure) {
                const res = await axiosSecure.patch(endpoint, data);
                return res.data;
            } else {
                const res = await axiosPublic.patch(endpoint, data);
                return res.data;
            }
        } catch (error) {
            console.error("Patch Request Faield: ", error);
            throw error;
        }
    };
    //  secure delete request
    const deleteRequest = async (endpoint, id, isSecure = false) => {
        try {
            if (isSecure) {
                const res = await axiosSecure.delete(endpoint, id);
                return res.data;
            } else {
                const res = await axiosPublic.delete(endpoint, id);
                return res.data;
            }
        } catch (error) {
            console.error("Delete Request Faield : ", error);
            throw error;
        }
    };

    return {
        getRequest,
        postRequest,
        patchRequest,
        deleteRequest,
    };
};

export default useApi;
