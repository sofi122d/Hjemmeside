const express = require("express");
const router = express.Router();

const brugerModel = require("../models/bruger");
const dbbruger = require("../helpers/db");

router.post("/create", (req, res) => {
  const user = new brugerModel(req.body.email, req.body.password);
  dbbruger.saveUser(user);
  res.status(200).send(true);
});

router.delete("/delete", (req, res) => {
  const user = new brugerModel(req.body.email, req.body.password);
  dbbruger.deleteUser(user);
  res.status(200).send(true);
});

router.post("/login", (req, res) => {
  const user = new brugerModel(req.body.email, req.body.password);
  const found = dbbruger.findUser(user);
  if (found) {
    if (user.password == found.password) {
      res.status(200).send(true);
    } else {
      res.status(401).send(false);
    }
    } else {
      res.status(404).send(false);
  }
});

const fs = require('fs')
router.put('/update', (req, res) => {
    let data = JSON.parse(fs.readFileSync('data/brugere.json'))

    for (let i = 0; i < data.length; i++) {
        if (data[i].email == req.body.email) {
            data[i].password = req.body.password;


            fs.writeFile('data/brugere.json', JSON.stringify(data, null, 4), err => {
                if(err) res.send(err);
                res.send(data);
            })
        }
    }
});

module.exports = router;