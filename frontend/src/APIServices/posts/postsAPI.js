import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

//! Create post api
export const createPostAPI = async (postData) => {
  console.log(postData);
  const response = await axios.post(`${BASE_URL}/posts`, {
    title: postData.title,
    description: postData.description,
  });
  return response.data;
};
