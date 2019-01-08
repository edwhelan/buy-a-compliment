//import db
const db = require('./db');

class Requests {
  constructor(id, USER_ID_FROM, title, REQUEST_contents, USER_ID_TO, is_private, stripe_token, has_responded) {
    this.id = id,
      this.USER_ID_FROM = USER_ID_FROM,
      this.title = title,
      this.REQUEST_contents = REQUEST_contents,
      this.USER_ID_TO = USER_ID_TO,
      this.is_private = is_private,
      this.stripe_token = stripe_token,
      this.has_responded = has_responded
  }

  // CREATE ===============================================
  // make a new request
  static addRequest(USER_ID_FROM, title, REQUEST_contents, USER_ID_TO, is_private, stripe_token) {
    return db.one(`
  insert into REQUESTS
  (USER_ID_FROM, title, REQUEST_contents, USER_ID_TO, is_private, stripe_token, has_responded)
  values
  ($1, $2, $3, $4, $5, $6, $7)
  returning id
  `, [USER_ID_FROM, title, REQUEST_contents, USER_ID_TO, is_private, stripe_token, false])
      .then(data => {
        const u = new Requests(data.id, USER_ID_FROM, title, REQUEST_contents, USER_ID_TO, is_private)
        return u
      })

  }
  // RETRIEVE ===============================================
  // get all public requests
  static getPublicRequests() {
    return db.any(`
  select *
  from REQUESTS
  where is_private=false
  `)
      .then(r => {
        return r
      })
  }
  // load all requests a user has made
  static getRequestsByUserId(id) {
    return db.any(`
    select *
    from REQUESTS
    where USER_ID_FROM=$1
    `, [id]
    ).then(r => {
      return r
    })
  }
  // load all requests sent to a specific user
  static getRequestsMadeToUser(id) {
    return db.any(`
    select *
    from REQUESTS
    where USER_ID_TO=$1 and 
    has_responded=false
    `, [id]
    ).then(r => {
      return r
    })
  }

  // UPDATE ===============================================
  // DELETE ===============================================

};

module.exports = Requests