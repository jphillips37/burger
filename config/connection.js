var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "CWRU2019jp",
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