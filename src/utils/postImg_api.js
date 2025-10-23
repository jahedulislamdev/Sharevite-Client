import axios from "axios";

// Image hosting imgSecretKey
const imgHostingSecret = import.meta.env.VITE_IMG_HOSTING_KEY;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingSecret}`;

const postImg = async (files) => {
    // console.log(files);
    const uploadedImages = await Promise.all(
        files.map(async (file) => {
            try {
                const formData = new FormData();
                formData.append("image", file);

                const res = await axios.post(imgHostingApi, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                return res.data.data.display_url;
            } catch (err) {
                console.error("faild to post image :", err);
                return null;
            }
        }),
    );
    return uploadedImages;
};

export default postImg;
