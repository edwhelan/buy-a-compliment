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
    select
    requests.id,
    requests.title,
    requests.request_contents,
    requests.user_id_from,
    requests.user_id_to,
    requests.is_private,
    requests.has_responded,
    recipient.name recipient_name,
    sender.name sender_name
    from requests
    inner join users as recipient on recipient.id = requests.user_id_to
    inner join users as sender on sender.id = requests.user_id_from
    where
    requests.is_private=false
    `)
      .then(r => {
        return r
      })
  }
  // load all requests a user has made
  static getRequestsByUserId(id) {
    return db.any(`
    select
    requests.id,
    requests.title,
    requests.request_contents,
    requests.user_id_from,
    requests.user_id_to,
    requests.is_private,
    recipient.name recipient_name,
    sender.name sender_name
    from requests
    inner join users as recipient on recipient.id = requests.user_id_to
    inner join users as sender on sender.id = requests.user_id_from
    where USER_ID_FROM=$1
    `, [id]
    ).then(r => {
      return r
    })
  }
  // load all requests sent to a specific user
  // that havent been responded to
  static getRequestsMadeToUser(id) {
    return db.any(`
    select
    requests.id,
    requests.title,
    requests.request_contents,
    requests.user_id_from,
    requests.user_id_to,
    requests.is_private,
    recipient.name recipient_name,
    sender.name sender_name
    from requests
    inner join users as recipient on recipient.id = requests.user_id_to
    inner join users as sender on sender.id = requests.user_id_from
    where USER_ID_TO=$1 and 
    has_responded=false
    `, [id]
    ).then(r => {
      return r
    })
  }

  // get all requests that have been responded to
  static getRequestsResponded() {
    return db.any(`
    select
    replies.reply,
    requests.id,
    requests.title,
    requests.request_contents,
    requests.user_id_from,
    requests.user_id_to,
    requests.is_private,
    requests.has_responded,
    recipient.name recipient_name,
    sender.name sender_name
    from replies
    inner join requests on requests.id = replies.requests_id
    inner join users as recipient on recipient.id = requests.user_id_to
    inner join users as sender on sender.id = requests.user_id_from
    where
    requests.has_responded=true and requests.is_private=false
    `)
      .then(r => {
        return r
      })
  }

  //get all requests that have been responded to for a specific user
  static getUsersCompletedRequests(id) {
    return db.any(`
    select
    replies.reply,
    requests.id,
    requests.title,
    requests.request_contents,
    requests.user_id_from,
    requests.user_id_to,
    requests.is_private,
    requests.has_responded,
    recipient.name recipient_name,
    sender.name sender_name
    from replies
    inner join requests on requests.id = replies.requests_id
    inner join users as recipient on recipient.id = requests.user_id_to
    inner join users as sender on sender.id = requests.user_id_from
    where
    requests.has_responded=true and sender.id =$1
    `, [id])
      .then(r => {
        return r
      })
  }

  // UPDATE ===============================================
  //change responded status to true for specific id
  static updateStatus(req_id) {
    return db.one(`
    update REQUESTS
    set has_responded=true
    where id=$1
    `, [req_id])
  }
  // DELETE ===============================================

};

module.exports = Requests