const express = require('express');
const routes = express.Router();
const EmailSchema = require('../models/emailModel');
const sendEmail = require('../utils/sendEmail');

// @desc send email, safe in DB, send via sendgrid
// @route api/email
// @access public
routes.post('/', async(req,res) => {
    try{
        let {name, email, subject, message } = req.body;
        email = email.trim();

        if(!name || !email || !subject || !message){
            return res.status(401).json({
                message: "Empty Input Fields"
            })
        }
        // save message in DB
        const mail = await EmailSchema.create({name, email, subject, message})
        // send message out using sendgrid
        let to = 'kessel.stefan1@gmail.com';
        let from = 'kessel.stefan1@gmail.com';

        const text = `
            Neue Nachricht von der persönlichen Webseite
            Thema: ${subject}
            Name: ${name}
            Email: ${email}
            Nachricht: ${message}
        `;

        await sendEmail(to, from, subject, text)

        res.json({
            name, email, subject, message
        })
    }
    catch(error){
        res.status(401).send('Could not send email')
    }
})



module.exports = routes;