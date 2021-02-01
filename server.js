const express = require('express');
const helmet = require('helmet');
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
app.use(helmet());
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

// production routing
if(process.env.NODE_ENV === 'production'){
    // serve routes defined in express or react
    //app.use(express.static('client/build'))
    app.use(express.static(path.resolve(__dirname, "../client/build")));

    // if route is not found, serve index.html
    const path = require('path');

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
    });


}

const PORT = process.env.PORT || 5000

app.listen( PORT, () => console.log(`Server running on PORT ${PORT}`));