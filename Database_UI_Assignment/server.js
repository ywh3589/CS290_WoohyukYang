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

app.post('/add',function(req,res, next){

 var message = {};
 mysql.pool.query("INSERT INTO `workoutlist` (`name`, `reps`, `weight`, `date`, `lbs`) VALUES (?, ?, ?, ?, ?)", //From lecture, we use '?' to indicate user supplied data
    [req.body.name,               
    req.body.reps, 
    req.body.weight, 
    req.body.date, 
    req.body.lbs],  function(err, result){
    if(err){
      next(err);
      return;
    }
    //context.results = "Inserted id " + result.insertId;
    //res.render('body',context);
    var id = result.insertId; // 아이디 다시 보내기
    mysql.pool.query("SELECT * FROM workoutlist WHERE id = (?)", [id], function(err, rows, fields){
      if(err){
        next(err);
        return;
      }

      message = JSON.stringify(rows);
      res.send(message);
      console.log(message + "inside");
    });
    
    // res.send("add route");
 
});
     //console.log(message + "outside");
     

});


app.post('/delete', function(req, res, next) {
    
  var message = "successfully deleted";
    mysql.pool.query("DELETE FROM `workoutlist` WHERE id = ?",   //Call delete on the database and require the id 
        [req.body.id], 
        function(err, result) {
            if(err){
                next(err);
                return;
            }


      res.send(message);
     
    });
});

app.post('/show',function(req,res, next){

 var message = {};
  mysql.pool.query("SELECT * FROM `workoutlist` WHERE id = ?", [req.body.id], function(err, rows, fields){
      if(err){
        next(err);
        return;
      }

      message = JSON.stringify(rows);
      res.send(message);
      console.log(message + "inside");

});

});

//get으로로
app.get('/edit',function(req,res, next){
 mysql.pool.query('SELECT * FROM `workoutlist` WHERE id=?',   //Select all with the id we want
        [req.query.id], 
        function(err, rows, fields){
            if(err){
                next(err);
                return;
            }
            //var param = [];

            var message = JSON.stringify(rows);

            console.log(message);
         //   console.log("name = " + rows[0].name);

           //var context = {};
            var context ={};
 // res.render('update', context);

/*
            context.name = rows[0].name;
             context.reps = rows[0].reps;
              context.weight = rows[0].weight;
               context.date = rows[0].date;
              context.lbs = rows[0].lbs;
              context.id = rows[0].id;

*/
/*
            for(var row in rows){                           //Similar to adding
                var addItem = {'name': rows[row].name, 
                            'reps': rows[row].reps, 
                            'weight': rows[row].weight, 
                            'date':rows[row].date, 
                            'lbs':rows[row].lbs,
                            'id':rows[row].id};

                param.push(addItem);
            }
*/
       // context.results = param[0];                      //We need to make sure the object goes to updateTable page
       // res.render('update', context);

    });

 
});

app.post('/edit',function(req, res, next){
    var context = {};
    mysql.pool.query('SELECT * FROM `workoutlist` WHERE id=?',   //Select all with the id we want
        [req.body.id], 
        function(err, rows, fields){
            if(err){
                next(err);
                return;
            }
            var param = [];

            for(var row in rows){                           //Similar to adding
                var addItem = {'name': rows[row].name, 
                            'reps': rows[row].reps, 
                            'weight': rows[row].weight, 
                            'date':rows[row].date, 
                            'lbs':rows[row].lbs,
                            'id':rows[row].id};

                param.push(addItem);
            }

        context.results = param[0];                      //We need to make sure the object goes to updateTable page
        res.render('update', context);
    });
});

//});

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
    mysql.pool.query("DROP TABLE IF EXISTS workoutlist", function(err){
        var createString = "CREATE TABLE workoutlist("+
        "id INT PRIMARY KEY AUTO_INCREMENT,"+
        "name VARCHAR(255) NOT NULL,"+
        "reps INT,"+
        "weight INT,"+
        "date DATE,"+
        "lbs BOOLEAN)";
        mysql.pool.query(createString, function(err){
            res.render('table',context);
        })
    });

    console.log("reset success");
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