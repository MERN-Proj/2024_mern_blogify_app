import expressAsyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';

import Post from '../models/Post.js';

class PostController {
  // Create post
  static createPost = expressAsyncHandler(async (req, res) => {
    const { title, description } = req.body;
    const postFound = await Post.findOne({ title });
    if (postFound) {
      throw new Error('Post already exists');
    }
    const postCreated = await Post.create({ title, description });
    res.json({
      status: 'success',
      statusCode: StatusCodes.CREATED,
      message: 'Post created successfully',
      postCreated,
    });
  });

  // List all posts
  static fetchAllPosts = expressAsyncHandler(async (req, res) => {
    const posts = await Post.find();
    res.json({
      status: 'success',
      statusCode: StatusCodes.OK,
      message: 'Posts fetched successfully',
      posts,
    });
  });

  // Get a post
  static getPost = expressAsyncHandler(async (req, res) => {
    const postId = req.params.postId;
    const postFound = await Post.findById(postId);
    res.json({
      status: 'success',
      statusCode: StatusCodes.OK,
      message: 'Post fetched successfully',
      postFound,
    });
  });

  // Delete a post
  static delete = expressAsyncHandler(async (req, res) => {
    const postId = req.params.postId;
    await Post.findByIdAndDelete(postId);
    res.json({
      status: 'success',
      statusCode: StatusCodes.NO_CONTENT,
      message: 'Post deleted successfully',
    });
  });

  // Update post
  static update = expressAsyncHandler(async (req, res) => {
    const postId = req.params.postId;
    const postFound = await Post.findById(postId);
    if (!postFound) {
      throw new Error('Post not found');
    }
    const postUpdated = await Post.findByIdAndUpdate(
      postId,
      { title: req.body.title, description: req.body.description },
      { new: true },
    );
    res.json({
      status: 'Post updated successfully',
      statusCode: StatusCodes.OK,
      postUpdated,
    });
  });
}

export default PostController;
