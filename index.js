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
  // return res.redirect('/')
  console.log(req.body);

  let data = JSON.stringify(req.body)

  fs.writeFile('text.json', data, function (err) {
    if (err) {
      console.log(err.message);
    }
  })
  res.send(req.body)
});

