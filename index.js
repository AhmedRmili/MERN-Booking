const express = require('express');
require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose');
const dburl = process.env.dburl;
const PORT = process.env.PORT || 3002;
const authRoute = require('./routes/auth.js');
const hotelsRoute = require('./routes/hotels.js');
const roomsRoute = require('./routes/rooms.js');
const usersRoute = require('./routes/users.js');
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));


app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});
///Middelwares
app.use('/api/auth', authRoute);
app.use('/api/hotels',hotelsRoute );
app.use('/api/rooms',roomsRoute );
app.use('/api/users', usersRoute );

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(conn => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));