const mongoose = require('mongoose')

const { Schema } = mongoose;

const UserSchema = Schema({
    googleId: String,
    githubId: String,
    displayName: String,
    email: [],
    givenName: String,
    familyName: String,
    profile: {}
},{
    timestamp: true
});

module.exports = mongoose.model('user', UserSchema);