const Blog = require('../models/post')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getBlog = async (req, res) => {
  try {
      const blog = await Blog.find()
      res.json(blog)
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

const getPost = async (req, res) => {
  try {
      const { id } = req.params
      const post = await Blog.findById(id)
      if (post) {
          return res.json(post)
      }
      res.status(404).json({ message: 'Post not found!' })
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

const createPost = async (req, res) => {
  try {
      const post = await new Blog(req.body)
      await post.save()
      res.status(201).json(post)
  } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message })
  }
}

const updateBlog = async (req, res) => {
  const { id } = req.params
  await Blog.findByIdAndUpdate(id, req.body, { new: true }, (error, post) => {
      if (error) {
          return res.status(500).json({ error: error.message })
      }
      if (!post) {
          return res.status(404).json({ message: 'post not found!' })
      }
      res.status(200).json(post)
  })
}

const deletePost = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Product.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Post deleted")
      }
      throw new Error("Post not found")
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getBlog,
  getPost,
  createPost,
  updateBlog,
  deletePost
}