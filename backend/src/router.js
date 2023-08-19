const express = require('express')
const usersMiddlewears = require('../middlewears/usersMiddlewears')
const registerController = require('../controllers/registerControllers')


const router = express.Router();

router.get('/users' ,  registerController.getUsers)

router.post('/users', usersMiddlewears.validateBody,  registerController.addUser )

router.put('/users/:id', usersMiddlewears.validateBody , registerController.updateUser )

router.delete('/users/:id' , registerController.deleteUser )

module.exports = router