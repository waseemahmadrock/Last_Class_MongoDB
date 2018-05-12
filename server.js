var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var db = null;
var uri = 'mongodb://localhost:27017/';

app.use(express.json());

MongoClient.connect(uri, (err, client) => {
    
    if(!err){
        
        db = client.db('awesome-blog');
        app.listen(8080, (err) => {
            if (!err){
                console.log('listening on 8080');
            }
        })
    }
    else{
        console.log(err);
    }
})

// serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// serve index.js
app.get('/index.js', (req, res) => {
    res.sendFile(__dirname + '/index.js')
})

app.post('/adduser', (req, res) => {
    var user = req.body;
    db.collection('users').insertMany(user, (err, result) => {
        console.log(err)
        res.send(JSON.stringify(result));
    })
})

app.get('/getusers', (req, res) => {
    db.collection('users').find().toArray().then((err, result) => {
        res.send(JSON.stringify(result))
    })
})




