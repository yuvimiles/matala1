const express = require('express');
const router = express.Router();
const commentController = require("../controllers/commentController.js")


router.get('/All', commentController.getAllComments);

router.get('/:id', commentController.getComment);

router.post('/create', commentController.createComment);

router.put('/update', commentController.updateComment);

router.delete('/delete/:id', commentController.deleteComment);

module.exports = router;