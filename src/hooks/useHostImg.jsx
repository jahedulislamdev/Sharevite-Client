const useHostImg = () => {
   // handle image change for preview and react-hook-form image field
   const handleImageChange = () => {
      // get selected image from input file 
      // implement a checking for max images quantity
      // make a state for image preview
      // set selected image and image preview to state

      // onChange handler for update react-hook-form image field
      // reset input value to allow re-uploading the same file if removed

   }
   // remove images form preview and files from react-hook-form image field  
   const removeImage = () => {
      // get current images for preview
      // get current files from react-hook-form image field

      // use revokeObjectURl for borwser memory free 
      // remove images from preview state and update preview state 
      // remove Files from preview state and update files state

      // store it to onchage handler for update react-hook-form image field
      // if no image left reset input value to allow re-uploading the same file if removed 
   }

   // return necessary things
   return {
      handleImageChange, removeImage
   }
};

export default useHostImg;