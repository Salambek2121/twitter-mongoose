const { Router } = require('express');
const { postController } = require('../controllers/post.controller');

const router = Router()

router.post('/post', postController.createPost)
router.delete('/post/:id',postController.deletePost)
router.get('/post',postController.getPost)
router.patch('/post/:id',postController.patchPost)

module.exports = router