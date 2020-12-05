const express = require('express')
const mongo = require('mongodb').MongoClient;
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const PORT =  process.env.PORT || 8080;
const mongolink = process.env.MONGODB_URI || 'mongodb://localhost:27017/codex'
const mongoparams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

app.use(morgan('tiny'));
app.use(cors());

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('app/build'))
}

app.get('/get/user/:userid/pass/:password', (req, res) => {
    const data = {
        'username': req.params.userid,
        'password': req.params.password
    };

    mongo.connect(mongolink, mongoparams, (err, db) => {
        var users = db.db('codex').collection('users');

        users.findOne(data, (err, dbres) => {
            if (err) throw err;
            res.send(dbres);
            db.close();
        });

    });
});

app.get('/getall', (req, res) => {
    data = [];
    mongo.connect(mongolink, mongoparams, (err, db) => {
        if(err) throw err;

        users = db.db('codex').collection('users');
        users.find({}).toArray((err, dbres) => {
            data = dbres;
            res.send(data);
            db.close();
        });
    });
});

app.get('/put/user/:userid/pass/:password', (req, res) => {
    const data = {
        'username': req.params.userid,
        'password': req.params.password
    };

    mongo.connect(mongolink, mongoparams, (err, db) => {
        if(err) throw err;

        var users = db.db('codex').collection('users');

        users.insertOne(data, (err, dbres) => {
            if(err) throw err;
            res.send(dbres.result);
        });
    });
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("server is listening to port: "+PORT);
});
