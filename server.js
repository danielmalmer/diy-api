var express = require('express');
var request = require('request-json');
var diy_api = request.createClient('http://api.diy.org/');
var app = express();
var expressHbs = require('express3-handlebars');

app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  diy_api.get('/skills/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('skills', {skills: body.response});
    }
  });
});

app.get('/challenges/:skill', function(req, res){
  var skill = req.params.skill;
  var api_route = '/skills/' + skill + '/challenges/';
  diy_api.get(api_route, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('challenges', {challenges: body.response});
    }
  });
});

app.listen(8000);
