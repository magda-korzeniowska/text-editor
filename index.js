const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.listen(3000, function () {
  console.log('Running at Port 3000!')
});
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/add', (req, res) => {
  
  console.log(req.body);

  let data = JSON.stringify(req.body)

  fs.writeFile('text.json', data, function (err) {
    if (err) {
      console.log(err.message);
    }
  })
  // res.redirect('/')
  // res.send(req.body)
});

app.get('/text', (req, res) => {
  let data = fs.readFileSync('text.json');
  let text = JSON.parse(data);
  console.log(text);
  res.send(text)
});

