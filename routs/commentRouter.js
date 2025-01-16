const express = require('express');
const router = express.Router();
const commentController = require("../controller/CommentController.js")


router.get('/All', commentController.getAllComments);

module.exports = router;