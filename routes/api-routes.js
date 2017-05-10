var db = require("../models");

module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    db.burger.findAll({}).then(function(dbburger) {
      res.json(dbburger);
    });
  });

  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.burger.create({
      text: req.body.text,
      devoured: req.body.devoured
    }).then(function(dbburger) {
      res.json(dbburger);
    });
  });

  app.delete("/api/burgers/:id", function(req, res) {
    db.burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbburger) {
      res.json(dbburger);
    });

  });

  app.put("/api/burgers", function(req, res) {
    db.burger.update({
      text: req.body.text,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbburger) {
      res.json(dbburger);
    });
  });

};
