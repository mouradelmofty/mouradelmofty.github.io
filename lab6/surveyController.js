var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');

//reading data file
function readData(fileName) {
  let dataRead = fs.readFileSync('./data/' + fileName + '.json');
  let infoRead = JSON.parse(dataRead);
  return infoRead;
}

//writing data file
function writeData(info, fileName) {
  data = JSON.stringify(info);
  fs.writeFileSync('./data/' + fileName + '.json', data);
}

//update data file
function combineCounts(name, value) {
  info = readData(name);
  var found = 0;
  for (var i = 0; i < info.length; i++) {
    if (info[i][name] === value) {
      info[i].count = parseInt(info[i].count) + 1;
      found = 1;
    }
  }
  if (found === 0) {
    info.push({[name]: value, count: 1});
  }
  writeData(info, name);
}


module.exports = function (app) {

  app.get('/analysis', function(req, res) {
    var firstlook = readData('firstlook');
    var usability = readData('usability');
    var favorite = readData('favorite');
    var useRec = readData('useRec');
    var comments = readData('comments');
    var enjoyment = readData('enjoyment');
    res.render('showResults', {results: [firstlook, usability, favorite, useRec, comments, enjoyment]});
    console.log([firstlook, usability, favorite, useRec, comments, enjoyment]);
  });

  app.get('/niceSurvey', function(req, res){
      res.sendFile(__dirname+'/views/niceSurvey.html');
  });
  app.post('/niceSurvey', urlencodedParser, function(req, res){
      console.log(req.body);
      var json = req.body;
      for (var key in json){
          console.log(key + ": " + json[key]);
          // checkboxes case
          if ((key === "useRec") && (json[key].length === 2)){
              for (var item in json[key]){
                  combineCounts(key, json[key][item]);
              }
          }
          else {
              combineCounts(key, json[key]);
          }
      }

      res.sendFile(__dirname + "/views/niceSurvey.html");
});
};
