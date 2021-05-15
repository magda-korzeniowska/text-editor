const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log('Running at Port 3000!');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// gets data sent by post to '/add' route and writes them to the file
app.post('/add', (req, res) => {
  const data = JSON.stringify(req.body);
  fs.writeFile('./api/text.json', data, function (err) {
    if (err) {
      console.log(err.message);
    }
  });
});

// reads data from file and sends them to '/text' route
app.get('/text', (req, res) => {
  const data = fs.readFileSync('./api/text.json');
  const text = JSON.parse(data);
  res.send(text);
});

