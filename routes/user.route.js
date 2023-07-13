const { Router } = require('express');
const { userController } = require('../controllers/user.controller');
const router = Router()


router.post('/user', userController.createUser)
router.delete('/user/:id', userController.deleteUser)
router.get('/user',userController.getUser)
router.get('/user/:id',userController.getUserId)



module.exports = router