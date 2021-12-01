// Man har et biblotek som hedder fs, der gør at man kan gemme en fil eller tekst til computeren (fx brugere-JSON fil)
var fs = require("fs");

// hvor ligger filen henne, altså man definere en PATH som viser, hvor filen ligger på computeren
// her defineres de to strenge 1. ABSOLUTE_PATH og 2. USER_FILE
// i ABSOLUTE_PATH går man to filer ud: først til src (source) gennem to prikker - og derefter til hjemmeside gennem to prikker. HErefter går vi ind i mappen data
const ABSOLUTE_PRODUCT_PATH = __dirname + "/../../data";
const PRODUCT_FILE = "/vare.json";



// når man laver en funktion i en class, behøves man ikke at skrive function foran, da js ved at det er functioner i en class

class DBvare {
    constructor() {
        this.products = this.openFile(PRODUCT_FILE);
    }

    // CORE 
    saveFile(fileName, contentString) {
        fs.writeFileSync(ABSOLUTE_PRODUCT_PATH + fileName, contentString);
    }
    
      // function i database (Open file - åbne fil)
      // Gennem return JSON.parse(file), får man sin fil omdannet (parset) fra streng til JSON i javascript
    openFile(fileName) {
        const file = fs.readFileSync(ABSOLUTE_PRODUCT_PATH + fileName);
        return JSON.parse(file);
    }
    

      // LOGIN DB
      // her bruger man user til at henvise til de oprettede brugere

      // function i database (saveuser - gem en bruger til den her fil)
      // i saveuser pusher man (tilføjes) brugere til ens array i brugere.json
      // herefter køres saveFile, som sørger for at det users er blevet opdateret med, bliver lagt i brugere.JSON
    saveProduct(product) {
        this.products.push(product);
        this.saveFile(PRODUCT_FILE, JSON.stringify(this.products));
    }
    
    deleteProduct(product) {
        this.products = this.products.filter((x) => x.titel != product.titel);
        this.saveFile(PRODUCT_FILE, JSON.stringify(this.products));
    }
    
    findProduct(product) {
        return this.products.find((x) => product.titel == x.titel);
    }
};


// Det her er en singleton -- laaangt over pensum, men et ret fedt term at fyre af
module.exports = new DBvare();

