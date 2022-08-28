const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const userController = require('../controllers/userController')
const auth = require('../auth')

const bodyParser = require('body-parser');
const { check , validaionResult } = require('express-validator')
const urlencodedParser = bodyParser.urlencoded({ extended: false})


router.get('/', controller.getHomepage)
router.get('/about', controller.aboutUspage)
router.get('/contact', controller.contactpage)

router.all('/add-question', controller.postNewQuestion)
router.get('/question/:id', auth.loggedIn, controller.showOneQuestion)
router.all('/question/edit/:id', controller.updateOneQuestion)
router.get('/question/delete/:id', controller.deleteOneQuestion)
router.get('/login', auth.isLoggedIn, controller.login_page)
router.get('/signup', auth.isLoggedIn, controller.signup_page)

router.post('/signupUser', urlencodedParser, [
    check('firstName', 'this firstName must be 3+ chars long')
        .exists()
        .isLength({ min: 3 }),
    check('lastName', 'this lastName must be 3+ chars long')
        .exists()
        .isLength({ min: 3 }),
    check('email', 'Email is Not Valid')
        .isEmail()
        .normalizeEmail(),
    check('password1', 'Password must be min 6 digit')
        .isLength({ min: 6}),
    check('password2', 'Confirm Password must be min 6 digit')
        .isLength({ min: 6})
] ,userController.createUser)

router.post('/loginUser', userController.loginperson)
router.get('/logout', userController.logout)

router.post('/add/:id/comment', controller.addComment)
router.post('/delete/:id/comment', controller.deleteComment)

module.exports = router;