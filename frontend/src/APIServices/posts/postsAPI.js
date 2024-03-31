import axios from "axios";

const POSTS_API_URL = `${import.meta.env.VITE_API_BASE_URL}/posts`;

//! Create post
export const createPost = async (postData) => {
  console.log(postData);
  const response = await axios.post(POSTS_API_URL, {
    title: postData.title,
    description: postData.description,
  });
  return response.data;
};

//! Fetch all posts
export const fetchAllPosts = async () => {
  const response = await axios.get(POSTS_API_URL);
  return response.data;
};

//! update post
export const updatePost = async (postData) => {
  console.log(postData);
  const response = await axios.put(`${POSTS_API_URL}/${postData?.postId}`, {
    title: postData.title,
    description: postData.description,
  });
  return response.data;
};