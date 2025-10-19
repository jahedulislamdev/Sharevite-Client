import axios from "axios";

const instance = axios.create({
    baseURL: "https://bdapi.vercel.app/api/v.1",
});
const getDivisions = async () => {
    try {
        const res = await instance.get("/division");
        return res.data.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};
const getDistrict = async (divisionId) => {
    try {
        const res = await instance.get(`/district/${divisionId}`);
        return res.data.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};
const getUpazilla = async (districtId) => {
    try {
        const res = await instance.get(`/upazilla/${districtId}`);
        return res.data.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};
const getUions = async (upazillaId) => {
    try {
        const res = await instance.get(`/union/${upazillaId}`);
        return res.data.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export { getDivisions, getDistrict, getUpazilla, getUions };
