const {commentModel} = require("../model/commentModel.js"); 
const {postModel} = require("../model/postModel.js");
const { post } = require("../routes/postsRouter.js");

const getAllComments = async (req, res) => {
  try {
    const comments = await commentModel.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error: error.message });
  }
};

module.exports = { getAllComments };