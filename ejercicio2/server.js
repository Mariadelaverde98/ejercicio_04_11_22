/* 1. Crea en una app de mongo con una colección con usuarios y permite que se 
registren con email y pass desde un formulario de registro con HTML y JS. */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";
const mydb = "Ejercicio4nov";
const coleccion = "usuarios";

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', urlencodedParser, (req, res) => {
    let myobj = {
        "email": req.body.email,
        "password": req.body.password
    }
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);

        dbo.collection(coleccion).insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("Documento insertado");
            db.close();
        });
    });
    res.send(req.body);
});

app.listen(3000);