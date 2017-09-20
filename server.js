var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var artists = [
  {
    id: 1,
    name: 'Nick'
  },
  {
    id: 2,
    name: 'Josh'
  },
  {
    id: 3,
    name: 'Michael'
  },
]

app.get('/', function (req, res) {
  res.send('Hello API');
});

app.get('/artists', function (req, res) {
  res.send(artists);
});

app.post('/artists', function (req, res) {
  console.log(req.body);
  res.sendStatus(200);
});

app.get('/artists/:id', function (req, res) {
  res.send(artists[ +req.params.id ]);
});

app.listen(3012, function () {
  console.log('Server started.');
});
