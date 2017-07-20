var express = require('express');
var mysql = require('./dbcon.js');
var portNumber = 5698;

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', portNumber);

app.get('/',function(req,res){
 
  var context ={};
  res.render('table', context);

});

app.post('/add',function(req,res){
 
  res.send("add route");
});

/*
app.get('/',function(req,res){
 
  var qParams = [];
  for (var p in req.query){
    qParams.push({'name':p,'value':req.query[p]})
  }
  var context = {};
  context.dataList = qParams;
  res.render('getParamShow', context);

});
*/
app.post('/',function(req,res){

  var qParams = [];
  for (var p in req.query){
    qParams.push({'name':p,'value':req.query[p]})
  }

  var context = {};
  context.paramList = qParams;
 
  var qData = [];
  for (var p in req.body){
    qData.push({'key':p,'value':req.body[p]})
  }
//  console.log(qData);
//  console.log(req.body);
  context.dataList = qData;
  res.render('postDataShow', context);

});




app.get('/reset-table',function(req,res,next){
  var context = {};
  mysql.pool.query("DROP TABLE IF EXISTS todo", function(err){
    var createString = "CREATE TABLE todo(" +
    "id INT PRIMARY KEY AUTO_INCREMENT," +
    "name VARCHAR(255) NOT NULL," +
    "done BOOLEAN," +
    "due DATE)";
    mysql.pool.query(createString, function(err){
      console.log("Table reset");
     
      res.render('table',context);
    })
  });
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
