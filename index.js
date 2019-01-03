// import packages
const bodyParser = require('body-parser');
const express = require('express');

//initialize app
const app = express();

// app.use(express.static(path.join(__dirname, 'public'))); // all static files will be served from public folder

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

example = [{ friend: ['bob', 'joe', 'jerry'] }];

//ROOT
app.get('/', (req, res) => {
  res.send({ example })
})



app.listen(5000, () => {
  console.log(`Ready...`);
});