const express = require('express');
const router = express.Router();
const captionController = require('../controllers/caption.controller');
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/captionRegister',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be of length 6'),
    body('fullName.firstName').isLength({mis:3}).withMessage('FirstName should be of length 3'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be of at least 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid Vehicle Type')
],captionController.registerCaption);

router.post('/captionLogin',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be of length 6')
],captionController.loginCaption);

router.get('/captionProfile',authMiddleware.authCation,captionController.getCaptionProfile);
router.get('/captionLogout',authMiddleware.authCation,captionController.logoutCaption)
module.exports = router;