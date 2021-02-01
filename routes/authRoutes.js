const express = require('express');
const passport = require('passport')

const router = express.Router();

// Auth with google
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',passport.authenticate('google'), (req, res) => {
    res.redirect('/resume');
});

// Auth with Github
router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github'), (req, res) => {
  res.redirect('/resume');
})


module.exports = router;