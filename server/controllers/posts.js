import Post from "../models/post.js";

export const getPosts = async (req, res, next) => {
  console.log("herbs");
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

export const createPost = async (req, res, next) => {
  const body = req.body;
  try {
    const newPost = await Post.create(body);
    newPost.save();
    res.status(201).json({message: "new post created", createdPost: newPost});
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
