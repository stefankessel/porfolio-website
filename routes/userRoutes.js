const express = require('express');
const passport = require('passport')

const router = express.Router();


router.get('/logout', (req, res) => {
    //passport disconnects from the cookie
    req.logout();
    res.redirect('/')
})

router.get('/', (req, res) => {
    res.send(req.user)
})


module.exports = router;