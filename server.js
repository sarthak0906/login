const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const db            = require('./config/db.js');
const cors          = require('cors');
const app           = express();

const port          = process.env.PORT || 3000;

var corsOption = {
    origin: '*',
    optionSuccessStatus: 200,
};

app.use(cors(corsOption));

app.listen(port, () => {
    console.log('we are live on ', port);
})

app.get('/populate', (req, res) => {
    var id = req.query.id;
    var pass = req.query.pass;
    MongoClient.connect(db.url, {useNewUrlParser: true}, (err, client) => {
        if (err){
            res.send('err');
            return console.log(err);
        }
        else{
            console.log('connected to mongo');
            database    = client.db(db.DB_NAME);
            collection  = database.collection("login");
    
            var dbo = {id : id, pass : pass};
            collection.insertOne(dbo, function(err, result){
                if (err){
                    console.log(err);
                    res.send('err');
                }
                else{
                    console.log('updated');
                    res.send('success');
                }
            })
        }
    })
})

app.get('/login', (req, res) => {
    var id = req.query.id;
    var pass = req.query.pass;
    MongoClient.connect(db.url, {useNewUrlParser: true}, (err, client) => {
        if(err){
            res.send('err');
            return console.log(err);
        }
        else {
            console.log('connected to mongo');
            database    = client.db(db.DB_NAME);
            collection  = database.collection("login");
    
            var dbo = {id : id, pass : pass};
            collection.find(dbo).limit(1).next((err, data) => {
                if (err){
                    console.log('err');
                    res.send(err);
                }
                else if(data){
                    res.send('yes');
                }
                else {
                    res.send('no');
                }
            })
        }
    });

})