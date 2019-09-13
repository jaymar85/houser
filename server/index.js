require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

// Controllers go here
const houseController = require("./houseController");

const app = express();

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Connected to Database");
})

//SESSION WILL GO HERE WHEN NEEDED
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 //equals a week
    }
}))

// Endpoints
app.get('/api/houses', houseController.getHouses); 
app.post('/api/houses', houseController.createHouse);
app.delete('/api/houses/:id', houseController.deleteHouse);
app.put('/api/houses/:id', houseController.updateHouse);

// const port = 4000;
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})