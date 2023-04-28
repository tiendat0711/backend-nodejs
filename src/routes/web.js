
const express = require('express')
const router = express.Router()
const { getHomepage, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, getDeletePage } = require('../controllers/homeController')
// middleware that is specific to this router

router.get('/', getHomepage);
router.get('/ejs', (req, res) => {
    res.render('views.ejs')
})

router.post('/create-user', postCreateUser);
router.get('/create', getCreatePage);
router.post('/update-user', postUpdateUser);
router.get('/update/:id', getUpdatePage);
router.post('/delete/:id', getDeletePage);
router.post('/delete-user', postDeleteUser);
module.exports = router



