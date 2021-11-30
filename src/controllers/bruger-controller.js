// heri laves endpoints

// require bruges til at få funktionaliteter fra en fil
const express = require("express");
const router = express.Router();

/*router.get('/', (req, res) =>{
    res.status(200).send(true)
})*/

// Her hentes den model der er blevet lavet i vores bruger.js
const userModel = require("./../models/bruger");

// her hentes db filen, for at kunne ændre i ens JSON fil, gennem DB funktionerne
const db = require("./../helpers/db");

// man bruger post, da man skal lave noget, som så vil køre indholdet i funktionen
// fra html siden skal man have sendt email og password, ind til bruger-controller.js
// for at være sikker på at få body'en ind som en bruger (som er defineret i models)
// her bruges req.body.email og .password, til at tilgå dataen i JSON filen, gennem modellen (bruger.js)
// hver eneste gang /create køres, så gemmer den brugeren i JSON filen
// herfter gives der svar (res - respond) tilbage til brugeren, gennem en statuskode 200 (true), for at sige det lykkedes
router.post("/create", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.saveUser(user);
  res.status(200).send(true);
});

router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.deleteUser(user);
  res.status(200).send(true);
});


// man bruger post, da man vil have body'en med, som bruges til at overføre informationer
// her laver en user objekt, fra requesten, på samme måde som i create
// man definere 'found', funktionen fra sin 'db.js' fil "findUser" for at registrere inputtet fra brugeren
// der lave herefter en if else, til at vise, at hvis brugerens input er lig inputtet fra databasen sendes status koden 200. 
// ellers så send 401, hvis clientens request ikke er blevet lavet færdig, grundet manglende godkendelses grundlag på siden (returner false)
// til sidst, hvis der ikke er nogen bruger registreret i systemet, så sendes der statuskoden 404 - at brugeren ikke eksisterer (returner false)
router.post("/login", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  const found = db.findUser(user);
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


// module.exports bruges til at exportere funktioner og funktionaliteter fra en fil
module.exports = router;

