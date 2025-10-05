import { useRef, useState } from "react";
import { toast } from "sonner";

const useHostImg = (maxFiles) => {
    const [previewImage, setPreviewImage] = useState([]);
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef();

    // handle image change for preview and react-hook-form image field
    const handleImageChange = (e, onChange) => {
        // get selected image from input file
        const selectedFiles = Array.from(e.target.files);

        //remove duplicate files
        const filteredFiles = selectedFiles.filter(
            (file) =>
                !files.some(
                    (f) => f.name === file.name && f.size === file.size,
                ),
        );

        // merge old files and new files
        let totalFiles = [...files, ...filteredFiles];

        // implement a checking for max images quantity
        if (previewImage.length + selectedFiles.length > maxFiles) {
            toast.error(`আপনি সর্বোচ্চ ${maxFiles} টি ছবি আপলোড করতে পারবেন`);
            totalFiles = totalFiles.slice(0, maxFiles);
        }

        // Revoke old previews to free memory
        previewImage.forEach((url) => URL.revokeObjectURL(url));

        // make a state for image preview
        const newPreviews = selectedFiles.map((f) => URL.createObjectURL(f));

        // update preview state and files state
        setPreviewImage(newPreviews);
        setFiles(totalFiles);

        // update RHF
        onChange(totalFiles);

        // Reset input to allow re-uploading same file if removed
        e.target.value = "";
    };
    // remove single images form preview and files
    const removeImage = (index, onChange) => {
        // use revokeObjectURl for borwser memory free by index
        URL.revokeObjectURL(previewImage[index]);

        // remove form states by index
        const updatedPreviewImages = previewImage.filter((_, i) => i !== index);
        const updatedFiles = files.filter((_, i) => i !== index);

        // update states
        setPreviewImage(updatedPreviewImages);
        setFiles(updatedFiles);

        // Update RHF
        onChange(updatedFiles);

        // if no image left reset input value to allow re-uploading the same file if removed
        if (updatedFiles.length === 0 && fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // reset all Images and states at a time
    const resetImages = () => {
        previewImage.forEach((url) => URL.revokeObjectURL(url));
        setPreviewImage([]);
        setFiles([]);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    // return necessary things
    return {
        previewImage,
        files,
        fileInputRef,
        handleImageChange,
        removeImage,
        resetImages,
    };
};

export default useHostImg;
