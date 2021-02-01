const express = require('express');
//const helmet = require('helmet');
const app = express();

const passport = require('passport');
const cookieSession = require('cookie-session');
require('./services/passport');
const key = require('./config/keys')

//import routes
const emailRoutes = require('./routes/emailRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const downloadRoutes = require('./routes/downloads');


// Mongo DB
require('./config/db');
//Middleware
// app.use(
//     helmet({
//       contentSecurityPolicy: {
//         directives: {
//           defaultSrc: ["'self'", "'connect-src'"],
//           styleSrc: ["'self'", "https:", "'unsafe-inline'"],
//           fontSrc: ["'self'", "https:",  "'connect-src'"],
//           imgSrc: ["'self'"],
//           scriptSrc: ["'self'", "'unsafe-inline'"],
//           blockAllMixedContent: [],
//           upgradeInsecureRequests: [],
//           baseUri: ["'self'"],
//           frameAncestors: ["'self'"],
//         },
//       },
//     })
//   );
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// Passport use =======================
app.use(cookieSession({
    // one day
    maxAge: 24 * 60 * 60 * 1000,
    keys: [key.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/api/email', emailRoutes);
app.use('/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/download', downloadRoutes);


//handling routes in production
if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    // serve production assets such as main.js main.css
    app.use(express.static('client/build'));

    //serve index.html if route is unknown
    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000

app.listen( PORT, () => console.log(`Server running on PORT ${PORT}`));