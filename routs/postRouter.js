const express = require("express");
const router = express.Router();
const postController = require("../controller/PostsController.js")

router.get("/All",postController.getAllposts)

router.get("/", postController.getPostBySender)

router.get("/:id", postController.getPost)

module.exports = router;