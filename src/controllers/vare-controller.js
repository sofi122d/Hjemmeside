// heri laves endpoints


// require bruges til at få funktionaliteter fra en fil
const express = require("express");
const router = express.Router();

// Her hentes den model der er blevet lavet i vores bruger.js
const productModel = require("./../models/vare");

// her hentes db filen, for at kunne ændre i ens JSON fil, gennem DB funktionerne
const dbvare = require("./../helpers/dbvare");


router.post("/create", (req, res) => {
  const product = new productModel(req.body.titel, req.body.price, req.body.categori);
  dbvare.saveProduct(product);
  res.status(200).send(true);
});


router.delete("/delete", (req, res) => {
    const product = new productModel(req.body.titel, req.body.price, req.body.categori);
    dbvare.deleteProduct(product);
    res.status(200).send(true);
  });


module.exports = router;


/*// til vare siden (tabel funktioner)
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let vare = {
    tøj: 10, 
    sko: 50,
    tasker:30
}

app.get('/vare', (req, res) => {
    res.status(200).json(stock)
});

app.get('/varens_kategori/:kategori', (req, res) => {
    let kategori = req.params.kategori;

    if(vare[kategori]){
        res.status(200).json({amount: vare[kategori]});
    } else {
        res.send(404);
    }
});

app.put('opdater_vare/:kategori', (req, res) => {
    let kategori = req.params.kategori;

    if(vare[kategori]){
        vare[kategori] = req.body.amount;
        res.status(200).json({[kategori]: vare[kategori]});
    } else {
        res.send(404);
    }
});

app.delete('slet_vare/:kategori', (req, res) => {
    let kategori = req.params.kategori;

    if(vare[kategori]){
        delete vare[kategori]
        res.status(200).json(stock);       
    } else {
        res.send(404);
    }
});

module.exports = app;*/
