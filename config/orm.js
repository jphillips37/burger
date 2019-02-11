var connection = require("./connection.js");

var orm = {
    selectAll: function(cb){
        connection.query("SElect * FROM burgers", function(err, result){
            if(err) throw err;
            cb(result); 
        });
    },
    insertOne: function(burgerId, cb){
        var queryString = "SELECT * FROM burgers WHERE id = ?";
        connection.query(queryString, burgerId, function(err, result){
            if(err) throw err;
            cb(result)
        })
    },
    updateOne: function(burgerId, cb){
        var queryString = "UPDATE burgers SET devoured = false WHERE id = ?";
        connection.query(queryString, burgerId, function(err, result){
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;