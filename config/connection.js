var mysql = require("mysql");
require("dotenv").config();

var burgerKey = require("../key.js");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: burgerKey.burger_key.db_key,
    database: "burgers_db"
});

connection.connect(function(err){
    if(err){
        console.log("error connection: " + err.stack);
        return;
    }
    console.log("conneceted as id " + connection.threadId);
});

module.exports = connection;