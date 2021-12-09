var fs = require("fs");

const ABSOLUTE_PRODUCT_PATH = __dirname + "/../../data";
const PRODUCT_FILE = "/vare.json";

class DBvare {
    constructor() {
        this.products = this.openFile(PRODUCT_FILE);
    }

    saveFile(fileName, contentString) {
        fs.writeFileSync(ABSOLUTE_PRODUCT_PATH + fileName, contentString);
    }
    
    openFile(fileName) {
        const file = fs.readFileSync(ABSOLUTE_PRODUCT_PATH + fileName);
        return JSON.parse(file);
    }
    

    saveProduct(product) {
        this.products.push(product);
        this.saveFile(PRODUCT_FILE, JSON.stringify(this.products));
    }
    
    deleteProduct(product) {
        this.products = this.products.filter((x) => x.id != product.id);
        this.saveFile(PRODUCT_FILE, JSON.stringify(this.products));
    }
};

module.exports = new DBvare();



  
