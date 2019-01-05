//import db
const db = require('./db');

//bcrypt enchryption hashing of passwords
const bcrypt = require('bcrypt');
const saltRounds = 10;

class Users {
  constructor(id, name, password, email, is_super) {
    this.is = id,
      this.name = name,
      this.password = password,
      this.email = email,
      this.is_super = is_super
  }

  //CREATE

  //function to make a new user without super setting
  static addUser(name, password, email) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return db.one(
      `insert into users
      (name, email, password, is_super)
      values
      ($1, $2, $3, false)
      return id`, [name, hash, email]
    ).then(data => {
      const u = new Users(data.id, name, email)
      return u
    })
  }
  //RETRIEVE
  static getUserById(id) {
    return db.one(`
      select *
      from users
      where id=$1
      `, [id]
    ).then(result => {
      const u = new Users(result.id, result.name, result.email)
      return u
    })
  }

  static getUserByEmail(email) {
    return db.one(`
    select *
    from users
    where email
    ilike '$1:raw'
    `, [email])
      .then(result => {
        const u = new Users(result.id, result.name, result.email, result.password)
        return u;
      })
  }

  //UPDATE

  //DELETE

  //MISC 
  checkPassword(password) {
    return bcrypt.compareSync(password, this.passHash);
  }

}