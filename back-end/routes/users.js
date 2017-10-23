var express = require('express');
const mysql = require('mysql');
var router = express.Router();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'cs411CS411!!',
    database : 'test_db'
});
connection.connect();
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    connection.query('select * from users', function (error, results, fields) {
        if (error) {
            res.send({message: 'query error'});
        } else {
            console.log(results);
            res.json(results);
        }
    });
});

module.exports = router;
