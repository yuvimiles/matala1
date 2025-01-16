const {postModel} = require("../model/postModel.js")
const {commentModel} = require("../model/commentModel.js")

const getAllposts = async (req , res)=>{
    try {
        const posts = await postModel.find({});
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error: error.message });
      }
}

const getPostBySender = async (req , res)=>{
  try {
    const {sender} = req.query
      const posts = await postModel.find({sender : sender});
      if(!posts){
          return res.status(400).json({ message: "Post not found" });
      }
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching posts", error: error.message });
    }
}

const getPost = async (req , res)=>{
    try {
        const id = req.params.id
        const post = await postModel.findById(id);
        if(!post){
            return res.status(400).json({ message: "Post not found" });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ message: "Error fetching post", error: error.message });
      }
}


module.exports = {getAllposts , getPostBySender , getPost}