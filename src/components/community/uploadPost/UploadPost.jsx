/* eslint-disable react/prop-types */
import { useState, useRef, useContext } from "react";
import { userContext } from "../../../Context/User.context";
import axios from "axios";

const UploadPost = ({ onCreatePost }) => {
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const {token}=useContext(userContext)
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    // const newPost = {
    //   id: Date.now(),
    //   username: "CurrentUser",
    //   content: postContent,
    
    //   comments: [],
    //   image: selectedImage,
    //   likes: 0,
    //   timestamp: new Date().toISOString(),
    // };
    try{
      // const response = await fetch("https://mohamednowar.pythonanywhere.com/api/profile/", {
      //   method: "GET",
      //   headers: { Authorization: token },
      // });
      // if (!response.ok) throw new Error("Failed to fetch profile");
  
      // const data = await response.json();
      console.log(token)
      const formdata=new FormData()
      formdata.append("post_name","rawan")
      formdata.append("content",postContent)
      formdata.append("image",selectedImage)
      const resepost=await axios.post("https://mohamednowar.pythonanywhere.com/api/posts/",formdata,{headers:{Authorization:token,"Content-Type": "multipart/form-data"}})
      console.log(resepost)
    }
    catch(e){
      console.log(e)
    }

   
    setPostContent("");
   
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-full max-w-[600px] mx-auto rounded-lg p-4 shadow-md "
    >
      <div className="flex items-center gap-2 md:gap-4">
        <img
          src="lovable-uploads/profile.png"
          alt="Profile"
          className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <input
            type="text"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="What's growing on?"
            className="w-full border-none outline-none text-gray-800 p-1.5 md:p-2 rounded-lg text-sm md:text-base"
            required
          />
         
        </div>
      </div>

      {selectedImage && (
        <div className="my-4 mx-auto max-w-full">
          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-96 w-full object-cover rounded-lg"
          />
        </div>
      )}

      <div className="flex flex-wrap justify-between items-center mt-4 gap-2">
        <div className="flex items-center gap-2 md:gap-4">
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="flex items-center gap-1 md:gap-2 text-gray-600 cursor-pointer hover:text-green-600 text-sm md:text-base"
          >
            <span className="md:hidden">📷</span>
            <span className="hidden md:inline">Add Photo</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-green-700 transition-colors text-sm md:text-base"
        >
          <img
            src="lovable-uploads/send.svg"
            alt="upload"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </button>
      </div>
    </form>
  );
};

export default UploadPost;




