var mysql = require('mysql');
/*
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_yangwo',
  password        : '3549',
  database        : 'cs290_yangwo'
});
*/
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'diddngur8',
  database        : 'mysql'
});



module.exports.pool = pool
