const mongoose = require('mongoose');

const { Schema } = mongoose;

const EmailSchema = new Schema({
    name: String,
    email: String,
    subject: String,
    message: String
},{
    timestamps: true
})

module.exports = mongoose.model('email', EmailSchema);