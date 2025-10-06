import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSeceure";

const useApi = () => {
    // here isSecure indicates whether to use secure axios instance or public one for requests
    // default is false (public) for all methods
    // you can override it by passing true for secure requests (admin or protected api calls)

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

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
    const deleteRequest = async (endpoint, id, isSecure = false) => {
        try {
            // ensure id is provieded and backend url is like /endpoint/:id
            if (!id) {
                throw new Error("ID is required for delete request");
            }
            const url = `${endpoint}/${id}`;
            if (isSecure) {
                const res = await axiosSecure.delete(url);
                return res.data;
            } else {
                const res = await axiosPublic.delete(url);
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
