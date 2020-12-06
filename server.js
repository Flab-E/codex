const express = require('express')
const mongo = require('mongodb').MongoClient;
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const multer = require('multer');

const app = express()
const PORT =  process.env.PORT || 8080;
const mongolink = 'mongodb://localhost:27017/codex';
const mongoparams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

app.use(morgan('tiny'));
app.use(cors());
app.use('/uploads', express.static('upluads'));

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('app/build'))
}

app.get('/api/get/user/:userid/pass/:password', (req, res) => {
    var data = {
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
    var data = [];
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

var mongo_file = '';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname );
    mongo_file = Date.now() + '-' + file.originalname;
  }
})

var upload = multer({ storage: storage }).single('file')

app.post('/upload/:class', (req, res) => {
    var obj = {
        'file': mongo_file,
        'class': req.params.class
    }

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log('errrr1');
            return res.status(500).json(err)
        } else if (err) {
            console.log(err);
            return res.status(500).json(err)
        }
        res.status(200).send(req.file)
    });

    mongo.connect(mongolink, mongoparams, (err, db) => {
        if(err) throw err;

        var users = db.db('codex').collection('classes');

        users.insertOne(obj, (err, dbres) => {
            if(err) throw err;
            res.send(dbres.result);
        });
    });

});

app.get('/api/download', (req, res) => {
    res.download('./uploads/' + f.name);

});


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("server is listening to port: "+PORT);
});
