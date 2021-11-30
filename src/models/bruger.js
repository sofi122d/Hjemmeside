// HEr defineres hvad der bruges til at lave en bruger (altså hvad en bruger består af - her email og password)
// herefter gemmes det til vores User (bruger)
class User {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  }
  
  module.exports = User;
  