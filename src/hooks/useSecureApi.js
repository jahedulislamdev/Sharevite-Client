import useAxiosSecure from "./useAxiosSeceure";

const useSecureApi = () => {
    const axiosSecure = useAxiosSecure();
    // secure post request
    const secureGetRequest = async (endpoint) => {
        try {
            const res = await axiosSecure.get(endpoint);
            return res.data;
        } catch (error) {
            console.error("Get Request Failed:", error);
            throw error;
        }
    };
    //  secure post request
    const securePostRequest = async (endpoint, data) => {
        try {
            const res = await axiosSecure.post(endpoint, data);
            return res.data;
        } catch (error) {
            console.error("Post Request Failed :", error);
            throw error;
        }
    };
    // secure patch request
    const securePatchRequest = async (endpoint, data) => {
        try {
            const res = await axiosSecure.patch(endpoint, data);
            return res.data;
        } catch (error) {
            console.error("Patch Request Faield: ", error);
            throw error;
        }
    };
    //  secure delete request
    const secureDeleteRequest = async (endpoint, id) => {
        try {
            const res = await axiosSecure.delete(endpoint, id);
            return res.data;
        } catch (error) {
            console.error("Delete Request Faield : ", error);
            throw error;
        }
    };

    return {
        secureGetRequest,
        securePostRequest,
        securePatchRequest,
        secureDeleteRequest,
    };
};

export default useSecureApi;
