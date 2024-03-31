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

//! Fetch  post by id
export const fetchPost = async (postId) => {
  const response = await axios.get(`${POSTS_API_URL}/${postId}`);
  return response.data;
};

//! update post
export const updatePost = async (postData) => {
  const response = await axios.put(`${POSTS_API_URL}/${postData?.postId}`, {
    title: postData.title,
    description: postData.description,
  });
  return response.data;
};

//! delete  post
export const deletePost = async (postId) => {
  const posts = await axios.delete(`${POSTS_API_URL}/${postId}`);
  return posts.data;
};
