require('dotenv').config();

const{
  db_username,
  db_password,
  db_name,
  db_hostname
} = process.env;

module.exports = {
  "development": {
    "username": db_username,
    "password": db_password,
    "database": db_name,
    "host": db_hostname,
    "dialect": "mysql"
  },
  "test": {
    "username": db_username,
    "password": db_password,
    "database": db_name,
    "host": db_hostname,
    "dialect": "mysql"
  },
  "production": {
    "username": db_username,
    "password": db_password,
    "database": db_name,
    "host": db_hostname,
    "dialect": "mysql"
  }
}
