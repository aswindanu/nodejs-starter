// const express = require("express");
// const app = express();

// app.get('/', (req, res) => {
//     res.render('hello.ejs');
// });

// app.listen(4000);

const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'views')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('pages/top');
});

app.get('/index', (req, res) => {
  res.render('pages/index', {
    dataText: "Data Text App JS"
  });
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));