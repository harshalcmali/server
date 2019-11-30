var express=require("express");
var app= express();
var empmod = require("./routes/emp");
var config =require("config");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.use("/emp",empmod);

app.listen(config.get("port"),()=>{

    console.log("server is listening !!!!!!!")
});