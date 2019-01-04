//ENV VARIABLES
require('dotenv').config();


// import packages
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

//initialize app
const app = express();

// app.use(express.static(path.join(__dirname, 'public'))); // all static files will be served from public folder
app.use(helmet())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));

request = [
  {
    title: "hey plz help",
    bodyContents: "man i really need help please pick me up!",
    to: "bob"
  },
  {
    title: "hey plz help meeeee",
    bodyContents: "please be my friend!",
    to: "Tom"
  }
];

//ROOT
app.get('/api/requests/', (req, res) => {
  res.send(request)
})



app.listen(5000, () => {
  console.log(`Ready...`);
});