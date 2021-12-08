// Man har et biblotek som hedder fs, der gør at man kan gemme en fil eller tekst til computeren (fx brugere-JSON fil)
var fs = require("fs");

// hvor ligger filen henne, altså man definere en PATH som viser, hvor filen ligger på computeren
// her defineres de to strenge 1. ABSOLUTE_PATH og 2. USER_FILE
// i ABSOLUTE_PATH går man to filer ud: først til src (source) gennem to prikker - og derefter til hjemmeside gennem to prikker. HErefter går vi ind i mappen data
const ABSOLUTE_PATH = __dirname + "/../../data";
const USER_FILE = "/brugere.json";



// når man laver en funktion i en class, behøves man ikke at skrive function foran, da js ved at det er functioner i en class

class DB {
    constructor() {
        // man tilføljer en variablel (users), og tilføjer indholdet af filen (USER_FILE = brugere.json)
        // så hver gang man laver et DB objekt, så laver man variable USER indeni, som er indholdet af brugere.json
        this.users = this.openFile(USER_FILE);
    }

     /* CORE */
    // function i database (savefile - gem fil med brugere)  - Her er den synkron, altså man venter på funktionen er færdig uanset tiden
    // her gemmer vi filen gennem writeFile, og gemmer den i vores ABSOLUTE_PATH (data), (hvad skal der stå inde i filen, som her er vores bruger objekt??)
    saveFile(fileName, contentString) {
        fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
    }
    
      // function i database (Open file - åbne fil)
      // Gennem return JSON.parse(file), får man sin fil omdannet (parset) fra streng til JSON i javascript
    openFile(fileName) {
        const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
        return JSON.parse(file);
    }
    

      // LOGIN DB
      // her bruger man user til at henvise til de oprettede brugere

      // function i database (saveuser - gem en bruger til den her fil)
      // i saveuser pusher man (tilføjes) brugere til ens array i brugere.json
      // herefter køres saveFile, som sørger for at det users er blevet opdateret med, bliver lagt i brugere.JSON
    saveUser(user) {
        this.users.push(user);
        this.saveFile(USER_FILE, JSON.stringify(this.users));
    }
    
    deleteUser(user) {
        this.users = this.users.filter((x) => x.email != user.email);
        this.saveFile(USER_FILE, JSON.stringify(this.users));
    }
};

// Det her er en singleton -- laaangt over pensum, men et ret fedt term at fyre af
module.exports = new DB();