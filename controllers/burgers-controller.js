var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    CaretPosition.call(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});