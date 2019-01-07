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
const stripe = require('stripe')(`${process.env.STRIPE_SK}`)

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
app.use(bodyParser.text());

app.use((req, res, next) => {
  let isLoggedIn = req.session.user ? true : false;
  console.log(isLoggedIn);
  next();
});

//PROTECT ROUTE =======================
function protectRoute(req, res, next) {
  let isLoggedIn = req.session.user ? true : false;
  if (isLoggedIn) {
    next();
  }
  else {
    res.redirect('/');
  }
}


// +++++++++++++++++++ API ROUTES +++++++++++++++++
// ===========================================
// PAYMENT ROUTE
app.post("/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 100,
      currency: "usd",
      description: "A charge for a ",
      source: req.body
    });
    console.log(` here is your current status ===== ${status}`)
    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});
// app.post(`/payment`, (req, res) => {
//   let amount = 1;
//   stripe.customers.create({
//     email: req.body.stripeEmaiil,
//     source: req.body.stripeToken
//   })
//     .then(customer =>
//       stripe.charges.create({
//         amount,
//         description: 'sample charge',
//         currency: 'usd',
//         customer: customer.id
//       }))
//     .then(charge => console.log(charge))
// })


//API CALL FOR PUBLIC REQUESTS ====================================
app.get('/api/requests/', (req, res) => {
  Requests.getPublicRequests()
    // .then(r => res.send(r))
    .then(r => {
      return res.send(r)
    })
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
        res.redirect(`/dashboard`);
      }
      else {
        console.log(`you did not logged in`)
        res.redirect(`/`);
      }
    })
});

// REGISTER ==================================
app.post(`/api/register`, (req, res) => {
  Users.addUser(req.body.name, req.body.password, req.body.email)
    .then(user => {
      req.session.user = user;
      res.redirect(`/`)
    })
});

// API CALL FOR REQUESTS OF LOGGED IN USER ============
app.get(`/api/userRequests`, protectRoute, (req, res) => {
  Requests.getRequestsByUserId(req.session.user.id)
    .then(r => res.send(r))
})

//POST for USER TO MAKE REQUESTS =============
app.post(`/api/userRequests`, protectRoute, (req, res) => {
  // Requests.addRequest(USER_ID_FROM, title, REQUEST_contents, USER_ID_TO, is_private)
  Requests.addRequest(req.session.user.id, req.body.title, req.body.text_body, 2, req.body.is_private)
    .then(r => {
      res.redirect(`/dashboard`);
    })
})

// LOGOUT ===============================
app.post(`/logout`, (req, res) => {
  req.session.destroy();
  res.redirect('/');
})

app.listen(5000, () => {
  console.log(`Ready...`);
});