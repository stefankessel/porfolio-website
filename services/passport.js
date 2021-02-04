const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const GithubStrategy = require('passport-github').Strategy
const key = require('../config/keys')
const User = require('../models/userModel');

passport.serializeUser( (user,done) => {
  done(null, user.id)
}); 

/* turns cookie user.id into user */
passport.deserializeUser( async(id,done) => {
  const currentUser = await User.findById(id);
  done(null, currentUser);
});

// Google Strategy
passport.use(new GoogleStrategy({
    clientID: key.GOOGLE_CLIENT_ID,
    clientSecret: key.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async(accessToken, refreshToken, profile, done) => {

    try{
      const user = await User.findOne({googleId : profile.id})
      // if user already exists, no new DB entry
      if(user){
        return done(null, user)
      }
      // create new user
      const newUser = await new User({
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.emails,
        givenName: profile.name.givenName,
        familyName: profile.name.familyName,
        profile
      }).save();
      done(null, newUser);
    }
    catch(err){
      console.log(err)
    }

  }
));

// Github Strategy
  passport.use(new GithubStrategy({
    clientID: key.GITHUB_CLIENT_ID,
    clientSecret: key.GITHUB_CLIENT_SECRET,
    callbackURL: "auth/github/callback",
    proxy: true
  }, async(accessToken, refreshToken, profile, done) => {
    try{
      const user = await User.findOne({githubId: profile.id})
      if(user){
        return done(null, user);
      }
  
      const newUser = await new User({
        githubId: profile.id,
        displayName: profile.displayName,
        profile
      }).save()
  
      done(null, newUser)     
    }
    catch(err){
      console.log(err)
    }
  }))