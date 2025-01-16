const express = require("express");
const router = express.Router();
const postController = require("../controller/PostsController.js")

router.get("/All",postController.getAllposts)

router.get("/", postController.getPostBySender)

router.get("/:id", postController.getPost)

router.post("/create", postController.createPost)

router.put("/update/:id", postController.updatePost)

router.delete("/delete", postController.deletePost)

module.exports = router;