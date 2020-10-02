var express = require("express");
var router = express.Router();
var Message = require("./../app");
var modelMsg = require("../models/Message");
/* GET home page. */
router.get("/", function (req, res, next) {
  modelMsg
    .find({})
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

router.get("/:id", function (req, res, next) {
  modelMsg
    .findOne({ ts: req.params.id })
    .then((doc) => {
      console.log(doc);
      res.send(doc);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

router.post("/", function (req, res) {
  let NewMsg = new modelMsg(req.body); // this is modal object.
  NewMsg.save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

router.put("/:id", function (req, res) {
  modelMsg
    .update(
      { ts: req.params.id },
      { $set: { author: req.body.author, message: req.body.message } },
      { multi: true, new: true }
    )
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/:id", function (req, res) {
  modelMsg
    .remove({ ts: req.params.id })
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = router;
