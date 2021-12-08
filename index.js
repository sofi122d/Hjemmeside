const express = require("express");
const app = express();

// hver eneste gang man skriver noget i bodyen, så ksal det laves om fra en tekststreng til et JSON objekt
app.use(express.json());

// installering af PORT
const PORT= 1300
app.listen(PORT, () => {
    console.log('Server is listening on PORT ' + PORT)
});



// Middleware - Det man definere der sker før hver eneste forespørgsel - Views ligger som endpoints
app.use(express.static("./src/views"));


// Controllers - Hent den fil jeg har her, og læg den ind i variablen i controllerfilen
const brugerController= require("./src/controllers/bruger-controller");

// Routes -- 
app.use("/brugere", brugerController);



// vare
// Controllers - Hent den fil jeg har her, og læg den ind i variablen i controllerfilen
const vareController= require("./src/controllers/vare-controller");

// Routes -- 
app.use("/vare", vareController);



/*
// form data
app.use(express.urlencoded({ extended: false }));

const formData = require('express-form-data');



// Routes -- 
app.use("/", express.static("views"));
app.use("/Users/sofianielsen/Desktop/Hjemmeside/data/varebilleder", express.static("varebilleder"));

const options = {
    uploadDir: '/Users/sofianielsen/Desktop/Hjemmeside/data/varebilleder'
}

app.use(formData.parse(options));
*/

module.exports = app;
