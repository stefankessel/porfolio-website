const mongoose = require('mongoose');
const key = require('./keys')

mongoose.connect(key.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then( (conn) => console.log(`DB connected to: ${conn.connection.host}`))
.catch( error => {
    console.log(`DB connection error: ${error.message}`);
    process.exit(1)
})