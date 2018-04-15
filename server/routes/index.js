var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://test:test@ds125623.mlab.com:25623/taskpad'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DB Test' });
});

router.post('/insert', function(req, res, next) {
  console.log('HEY')
   //define the item to be added to db collection
   const item = { //in the post form you would have 'title, content and author' as names
      title: req.body.title,
      content: req.body.content
    };
  console.log('Post started')
  //connect to mongo and insert
  MongoClient.connect(url, function(err, client){
      const db = client.db('taskpad');
      console.log('connection estabilished')
      //check for errors
      assert.equal(null,err);

      //insert item to collection 'user-data'
      db.collection('db-test').insertOne(item, function(err, result){
          assert.equal(null, err);
          console.log('Item inserted');
          //close mongo connection
          client.close();
      })
    })
    res.redirect('/');
})

module.exports = router;
