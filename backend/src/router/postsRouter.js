import express from 'express';
import PostController from '../controllers/postController.js';

const postRouter = express.Router();

//-----Create post----
postRouter
  .route('/posts')
  .post(PostController.createPost) //---create post---
  .get(PostController.fetchAllPosts); //---list all posts---

postRouter
  .route('/posts/:postId')
  .get(PostController.getPost) //---get post---
  .put(PostController.update) //---update post---
  .delete(PostController.delete); //---delete post---

export default postRouter;
