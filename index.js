const express = require("express");
const app = express();

app.use(express.json());

// installering af PORT
const PORT= 1300
app.listen(PORT, () => {
    console.log('Server is listening on PORT ' + PORT)
});


// Middleware 
app.use(express.static("./src/views"));

// Brugere
// Controllers - Hent den her fil, og læg den ind i variablen i controllerfilen
const brugerController= require("./src/controllers/bruger-controller");

// Routes -- 
app.use("/brugere", brugerController);


// Vare
// Controllers - Hent den her fil, og læg den ind i variablen i controllerfilen
const vareController= require("./src/controllers/vare-controller");

// Routes
app.use("/vare", vareController);

module.exports = app;