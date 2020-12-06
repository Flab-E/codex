const express = require('express')
const mongo = require('mongodb').MongoClient;
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const PORT =  process.env.PORT || 8080;
const mongolink = 'mongodb://localhost:27017/codex';
const mongoparams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

app.use(morgan('tiny'));
app.use(cors());

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('app/build'))
}

app.get('/api/get/user/:userid/pass/:password', (req, res) => {
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

app.get('/api/getall', (req, res) => {
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

app.get('/api/put/user/:userid/pass/:password', (req, res) => {
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

app.post('/api/single-file', (req, res) => {
    const contentType = req.header('content-type');
    if (contentType.includes('text/plain')) {
        res.set('Content-Type', 'text/plain');
        res.send(req.body);
    } else if (contentType.includes('multipart/form-data')) {
        f = req.files.myfile;
        res.set('Content-Type', 'text/html');
        f.mv('./uploads/' + f.name);
        res.send(`
            <table>
                <tr><td>Name</td><td>${f.name}</td></tr>
                <tr><td>Size</td><td>${f.size}</td></tr>
                <tr><td>MIME type</td><td>${f.mimetype}</td></tr>
            </table>
        `);
    } else {
        res.set('Content-Type', contentType);
        res.send(req.body);
    }
});

app.get('/api/download', (req, res) => {
    res.download('./uploads/' + f.name);

});


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("server is listening to port: "+PORT);
});
