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

const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await commentModel.findById(id);
    if (!comment) {
      res.status(400).json({message : "Comment not found!"});
      return;
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comment", error: error.message });
  }
};

module.exports = { getAllComments , getComment };