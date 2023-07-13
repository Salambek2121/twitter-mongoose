const { Router } = require('express');
const { commentController } = require('../controllers/comment.controller');

const router = Router()


router.post('/comment',commentController.createComment)
router.delete('/comment/:id',commentController.deleteComment)
router.patch('/comment',commentController.patchComment)
router.get('/comment',commentController.getComment)

module.exports = router