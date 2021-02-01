const express = require('express');
const fs = require('fs');
const routes = express.Router();
const reqireLogin = require('../middleware/requireLogin')

routes.get('/', reqireLogin, (req, res) => {
    // res.download(path.join(__dirname, 'downloads/CV.pdf'), 'cv_stefan_kessel');

    let pdf = __dirname + '/../downloads/cv.pdf';

    fs.access(pdf, fs.constants.F_OK, error => {
        console.log(`${pdf} ${error ? 'does not exist' : 'exists'}`)        
    })
    fs.readFile(pdf, (err, content) => {
        if(err){
            res.end('File does not exist')
        }
        else{
            // res.writeHead(200, {'Content-type': 'application/pdf'});
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader("Content-Disposition","filename=cv_stefan_kessel.pdf")
            res.end(content);
        }
    })
})

module.exports = routes;