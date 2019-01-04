//ENV VARIABLES
require('dotenv').config();

//database
const db = require('./models/db');

// import packages
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

//initialize app
const app = express();
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

//import models 
const Requests = require('./models/Requests');

app.use(session({
  store: new pgSession({
    pgPromise: db
  }),
  secret: 'g8j3lsa0sk2bbfhv5486nfgvge-387356!', // remember to adjust before deploying
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000 //Adjusts max time of session to 30 days
  }
}));

// app.use(express.static(path.join(__dirname, 'public'))); // all static files will be served from public folder
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));

app.use((req, res, next) => {
  let isLoggedIn = req.session.user ? true : false;
  console.log(isLoggedIn);
  next();
});


// request = [
//   {
//     title: "hey plz help",
//     bodyContents: "man i really need help please pick me up!",
//     to: "bob"
//   },
//   {
//     title: "hey plz help meeeee",
//     bodyContents: "please be my friend!",
//     to: "Tom"
//   }
// ];

//API CALL FOR PUBLIC REQUESTS
app.get('/api/requests/', (req, res) => {
  Requests.getPublicRequests()
    .then(r => res.send(r))
})



app.listen(5000, () => {
  console.log(`Ready...`);
});