const db = require('./db');

class Replies {
  constructor(id, USER_ID_FROM, REQUESTS_ID, reply) {
    this.id = id,
      this.USER_ID_FROM = USER_ID_FROM,
      this.REQUESTS_ID = REQUESTS_ID,
      this.reply = reply
  }

  // CREATE
  static makeNewReply(USER_ID_FROM, REQUESTS_ID, reply) {
    return db.one(`
    insert into REPLIES
    (USER_ID_FROM, REQUESTS_ID, reply)
    values
    ($1, $2, $3)
    returning id
    `, [USER_ID_FROM, REQUESTS_ID, reply])
      .then(data => {
        const u = new Replies(data.id, USER_ID_FROM, REQUESTS_ID, reply)
        return u
      })

  }

  // RETREIVE
  // UPDATE
  // DELETE
}

module.exports = Replies;