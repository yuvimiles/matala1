const express = require("express");
const router = express.Router();
const postController = require("../controller/PostsController.js")

router.get("/All",postController.getAllposts)

module.exports = router;