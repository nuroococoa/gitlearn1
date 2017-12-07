var cool = require('cool-ascii-faces');
var express = require('express');
var mysql = require('mysql');
var photos = require('./routes/photos')

var client = mysql.createConnection({
  host : 'us-cdbr-iron-east-05.cleardb.net',
  user :'bb85c2786f4782',
  password : '56365829'
});
var app = express();

app.set('port', (process.env.PORT || 5000));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', photos.list);

app.get('/physicist', (req, res) => {
  client.query('use heroku_ff5ef326239cabc');
  client.query('select * from physicist', (err, result, fields) =>{
    if (err) {
      console.log("there's an error in query context")
    } else {
      console.log(result);
    }
  });
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>express basic</h1>');
})

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
