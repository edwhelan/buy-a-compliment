//import db
const db = require('./db');

class Requests {
  constructor(id, USER_ID_FROM, title, REQUEST_contents, USER_ID_TO, is_private) {
    this.id = id,
      this.USER_ID_FROM = USER_ID_FROM,
      this.title = title,
      this.REQUEST_contents = REQUEST_contents,
      this.USER_ID_TO = USER_ID_TO,
      this.is_private = is_private
  }
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
};

module.exports = Requests