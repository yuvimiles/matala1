const express = require('express');
const router = express.Router();
const commentController = require("../controller/CommentController.js")


router.get('/All', commentController.getAllComments);

router.get('/:id', commentController.getComment);

router.post('/create', commentController.createComment);

router.put('/update', commentController.updateComment);

router.delete('/delete/:id', commentController.deleteComment);

module.exports = router;