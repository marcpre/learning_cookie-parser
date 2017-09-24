var express = require('express');
const cookieParser = require('cookie-parser');

var app = express();

/**
 * Use Cookie Parser
 */
app.use(cookieParser());

/**
 * Routes
 */

//get cookie
app.get('/', (req, res) => {
    console.log('Cookies: ', req.cookies)
})

//set cookie by url
app.get('/set/:cookie', (req, res) => {
    let cookie = req.params.cookie
    console.log("Cookie set by user: " + cookie)
    let setCookie = "This is my cookie"
    res.cookie(setCookie)
})

//set cookie
app.get('/set', (req, res) => {
    let cookie = "This is my cookie"
    console.log("Cookie set by admin " + cookie)
    res.cookie(cookie)
})

/**
 * Run Server
 */
var port = 8080;
var host = "localhost";

app.listen(port, host, function () {
    console.log("Listening on " + host + ":" + port);
});

app.use(cookieParser());