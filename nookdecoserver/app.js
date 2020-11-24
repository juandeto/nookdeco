const express     = require('express')
const app         = express()
const axios       = require("axios");
var cookieParser  = require('cookie-parser')
const cors        = require('cors')
var emails        = require('./routes/emails')
var mpRoutes      = require('./routes/mercadoPago')
require('dotenv').config();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, access-control-allow-origin");
	next();
});
app.use(express.static(__dirname + '/public'))

// Index Route
app.get("/", function (req, res) {
    res.status(200).sendFile("index.html");
}); 

// Emails Routes
app.post("/emails/create", emails.create);

// Mercado Pago Routes
app.post("/mercadopago/create", mpRoutes.create);
app.get("/mercadopago/finish", mpRoutes.finish);


const server_port = process.env.PORT || 8080;
const server_host = '0.0.0.0'

app.listen(server_port, server_host, () => {console.log("The server is now running on Port 8080")});

module.exports = app;
