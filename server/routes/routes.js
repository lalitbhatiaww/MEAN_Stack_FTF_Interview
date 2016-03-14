var apiConfig = require('./../config/googleApiConfig.js');
var request = require('request');

// https://www.googleapis.com/customsearch/v1/?key=KEY

module.exports = function(app) {
  app.get('/', function (req, res, next) {
    res.render('index', {title: 'Search'});
  });

  app.get('/search/:searchTerm', function (req, res) {
    var term = req.params.term;

    // send google request here
    var host = apiConfig.host;
    var apiPath = apiConfig.path + '?key=' + apiConfig.API_KEY + '&cx=' + apiConfig.CX + '&q=' + req.params.searchTerm;

    request.get(host + apiPath, function (err, response) {

      res.send({results: JSON.parse(response.body).items});
    });
  });

  app.get('/news/nytimes',function(req, res){
    var host = apiConfig.nytimes.host;
    var apiPath = apiConfig.nytimes.path + '?api-key=' + apiConfig.nytimes.API_KEY;
    request.get(host + apiPath, function (err, response) {

      res.send({results: JSON.parse(response.body)});
    });
  })

  app.get('/news/guardian',function(req, res){
    var host = apiConfig.gurdian.host;
    var apiPath = apiConfig.gurdian.path + '?api-key=' + apiConfig.gurdian.API_KEY;
    request.get(host + apiPath, function (err, response) {

      res.send({results: JSON.parse(response.body)});
    });
  })

};