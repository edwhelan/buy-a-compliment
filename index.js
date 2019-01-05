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

//require models 
const Requests = require('./models/Requests');
const Users = require('./models/Users');
const Replies = require('./models/Replies');

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

// +++++++++++++++++++ ROUTES +++++++++++++++++
// ===========================================
//API CALL FOR PUBLIC REQUESTS ====================================
app.get('/api/requests/', (req, res) => {
  Requests.getPublicRequests()
    .then(r => res.send(r))
})

//DETECT IF USER IS LOGGED IN ===================
app.get(`/api/loggedin`, (req, res) => {
  console.log(req.session.user)
  if (req.session.user) {
    return res.send(req.session.user)
  } else {
    console.log('not logged in')
  }
})

//LOGIN =========================================
app.post(`/api/login`, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  Users.getUserByEmail(email)
    .catch(err => {
      console.log(err);
    })
    .then(user => {
      const didMatch = user.checkPassword(password);
      if (didMatch) {
        req.session.user = user;
        console.log(`you are now loggedin ${user}`)
        res.redirect(`/`);
      }
      else {
        console.log(`you did not logged in`)
        res.redirect(`/didnt/work `);
      }
    })
});

// REGISTER ==================================
app.post(`/api/register`, (req, res) => {
  Users.addUser(req.body.name, req.body.password, req.body.email)
    .then(user => {
      req.session.user = user;
      console.log(req.session.user);
      res.redirect(`/`)
    })
});

// LOGOUT ===============================
app.post(`/logout`, (req, res) => {
  req.session.destroy();
  res.redirect('/');
})

app.listen(5000, () => {
  console.log(`Ready...`);
});