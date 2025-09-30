import axios from "axios";

// Image hosting imgSecretKey
const imgHostingSecret = import.meta.env.VITE_IMG_HOSTING_KEY;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingSecret}`;

const postImg = async (data) => {
    const images = data.images || [];
    console.log(images);
    const uploadedImages = await Promise.all(
        images.map(async (img) => {
            try {
                const formData = new FormData();
                formData.append("image", img);

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
