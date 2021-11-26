const express = require("express");
const app = express();
app.use(express.json());

// installering af PORT
const PORT= 1300
app.listen(PORT, () => {
    console.log('Server is listening on PORT ' + PORT)
});
