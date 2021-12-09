const express = require("express");
const router = express.Router();

const productModel = require("../models/vare");
const dbvare = require("../helpers/dbvare");


router.post("/create", (req, res) => {
  const product = new productModel(req.body.titel, req.body.price, req.body.categori, req.body.billede, req.body.id);
  dbvare.saveProduct(product);
  res.status(200).send(true);
});

router.delete("/deleteProduct", (req, res) => {
    const product = new productModel(req.body.titel, req.body.price, req.body.categori, req.body.billede, req.body.id);
    dbvare.deleteProduct(product);
    res.status(200).send(true);
  });

const fs = require('fs')
router.get ('/items', async (req, res) => {
    fs.readFile('data/vare.json', (err, data) => {
        if (err) res.send(err);
        res.status(200).send(data);
    });
});

router.put('/updates', (req, res) => {
    let data = JSON.parse(fs.readFileSync('data/vare.json'))

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == req.body.id) {
            data[i].titel = req.body.titel
            data[i].price = req.body.price;
            data[i].categori = req.body.categori;
            data[i].billede = req.body.billede;


            fs.writeFile('data/vare.json', JSON.stringify(data, null, 4), err => {
                if(err) res.send(err);
                res.send(data);
            })
        }
    }
});

module.exports = router;