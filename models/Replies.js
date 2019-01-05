const db = require('./db');

class Replies {
  constructor(id, USER_ID_FROM, REQUESTS_ID, reply) {
    this.id = id,
      this.USER_ID_FROM = USER_ID_FROM,
      this.REQUESTS_ID = REQUESTS_ID,
      this.reply = reply
  }

  // CREATE
  // RETREIVE
  // UPDATE
  // DELETE
}

module.exports = Replies;