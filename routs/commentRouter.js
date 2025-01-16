const express = require('express');
const router = express.Router();
const commentController = require("../controller/CommentController.js")


router.get('/All', commentController.getAllComments);

router.get('/:id', commentController.getComment);

module.exports = router;