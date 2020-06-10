const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send("Hello World")
});

app.get('/aditya', function (req, res) {
    const id=req.query.id;
    res.send("Hello this is Aditya-PC "+id);
})

app.get('/aditya/:id', function (req, res) {
    const id = req.params.id;
    res.send("Hello Aditya "+id);
})


app.listen(94, function (req, res) {
    console.log("Server started");
});