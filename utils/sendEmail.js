const key = require('../config/keys')

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(key.SENDGRID_API_KEY);

const sendEmail = async (to, from, subject, text) => {
    try{
        const msg = {
            to, from, subject, text
        }
    
        await sgMail.send(msg)
    }
    catch(err){
        console.log(err)
    }


}

module.exports = sendEmail;