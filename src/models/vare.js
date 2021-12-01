// Her defineres hvad der bruges til at lave en vare (altså hvad en bruger består af - her kategori og billde og pris)
// herefter gemmes det til vores product (vare)
class Product {
    constructor(titel, price, categori, billede) {
      this.titel = titel;
      this.price = price;
      this.categori = categori;
      this.billede = billede;
    }
  }
  
  module.exports = Product;