import axios from "axios";

const instance = axios.create({
    baseURL: "https://bdapi.vercel.app/api/v.1",
});
const getDivisions = async () => {
    try {
        const res = await instance.get("/division");
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};
const getDistrict = async () => {
    try {
        const res = await instance.get("/district");
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};
const getUpazilla = async () => {
    try {
        const res = await instance.get("/upazilla");
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};
const getUions = async () => {
    try {
        const res = await instance.get("/union");
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export { getDivisions, getDistrict, getUpazilla, getUions };
