var express = require('express');
var path = require('path');

var todoRoutes = require('./api/routes/todoListRoutes');


app = express();


port = process.env.PORT || 3000;
mongoose = require('mongoose');

// Create model loading here
Task = require('./api/models/todoListModel'); 


bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


// view engine setup or template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));



// app.use(function(req, res){
//     res.status(404).send({url: req.originalUrl + 'not found'})
// });

//var routes = require('./api/routes/todoListRoutes'); // importing route
todoRoutes(app); // register the routes

 
app.listen(port);

console.log('todo List RESTful API server started on '  + port);