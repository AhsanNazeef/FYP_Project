import express from 'express'
import auth from '../middleware/auth'
import userCtrl from '../controllers/userCtrl'

const router = express.Router()

router.patch('/user', auth, userCtrl.updateUser)

router.patch('/reset_password', auth, userCtrl.resetPassword)

router.get('/user/:id', userCtrl.getUser)

router.get('/user/notification/:id', userCtrl.getNotification)



export default router;