var express = require("express");
var route = express();
var connection = require("../db/database");

connection.connect();
route.use(express.json());
route.get("/", (resquest, responce) => {

    var query = "select * from Emp";
    connection.query(query, (err, result) => {
        if (err == null)
            responce.send(JSON.stringify(result));
      else
            responce.send(JSON.stringify(err));
    });

});


route.get("/:No", (resquest, responce) => {

    var No = this.params.No;
    var query = `select * from Emp where No=${No}`;
    connection.query(query, (err, result) => {
        if (err == null)
            responce.send(JSON.stringify(result));
      else
            responce.send(JSON.stringify(err));
    });

});


route.put("/:No", (request, responce) => {


    var No = request.params.No;
    var {Name , Age}=request.body;
    var query = `update Emp set Name=${Name} ,Age=${Age} where No=${No}`;
    connection.query(query, (err, result) => {
        if (err == null)
            responce.send(JSON.stringify(result));
      else
            responce.send(JSON.stringify(err));
    });

});

route.post("/", (request, responce) => {


    var {No,Name,Age}=request.body;
    var query = `insert into Emp values(${No},${Name},${Age})`;
    connection.query(query, (err, result) => {
        if (err == null)
            responce.send(JSON.stringify(result));
      else
            responce.send(JSON.stringify(err));
    });

});
route.delete("/:No", (request, responce) => {


    var No = request.params.No;
    var query = `delete from Emp where No=${No}`;
    connection.query(query, (err, result) => {
        if (err == null)
            responce.send(JSON.stringify(result));
      else
            responce.send(JSON.stringify(err));
    });

});

module.exports= route;