var fs = require("fs");

const PATH = __dirname + "/../../data";
const BRUGER_FILE = "/brugere.json";

class DB {
    constructor() {
        this.brugere = this.openFile(BRUGER_FILE);
    }

    saveFile(fileName, contentString) {
        fs.writeFileSync(PATH + fileName, contentString);
    }
    
    openFile(fileName) {
        const file = fs.readFileSync(PATH + fileName);
        return JSON.parse(file);
    }
    
    saveUser(bruger) {
        this.brugere.push(bruger);
        this.saveFile(BRUGER_FILE, JSON.stringify(this.brugere));
    }
    
    deleteUser(bruger) {
        this.brugere = this.brugere.filter((x) => x.email != bruger.email);
        this.saveFile(BRUGER_FILE, JSON.stringify(this.brugere));
    }
    
    findUser(bruger) {
        return this.brugere.find((x) => bruger.email == x.email);
    }
};

module.exports = new DB();