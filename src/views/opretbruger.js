// addEventListener bruges til at sige 'nå det her kører, så sker det her'
// gennem getElementById henter man formen "'id ='form'" fra opretbruger.html
// preventDefault bruges til at stoppe siden for ikke at reloade siden
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();

      // En variabel der hedder email, gennem 'document.getElementById', hvor vi heri skriver 'email' - 'value' for at hente email inputtet som brugeren har skrevet i vores opretbruger form
      // En variabel der hedder password, gennem 'document.getElementById', hvor vi heri skriver 'password' - 'value' for at hente email inputtet som brugeren har skrevet i vores opretbruger form
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // variabel der hedder user, '{}' bruges til at forklare til js, at man laver JSON objekter - heri email og password
      const user = {
        email: email,
        password: password,
      };

      // efter brugeren har trykket submit, skal man kunne kalde endpointed, og herfra hentebrugen gennem fetch funktionen
      // POST metoden skal bruges, da der skal laves en bruger i JSON filen
      // Herefter skrives der, at body'en er i form af JSON
        fetch("http://localhost:1300/brugere/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // Hvis man 'sender' ting over nettet, sakl man lave sit JSON objekt til en stregf - gemnnem 'stringyfy' - så serveren forstår objektet
        // Herefter kalder man sit endpoint, gennem et promise 'then' ('lige nu har man ikke en værdi, men man "lover" at der kommer en værdi tilbage') 
        // Når man får sin værdi tilbage (response fra serveren), så vil man igen lave det om til JSON (så det kan komme ind i databasen)
        // Nu er response blevet defineret til et JSON objekt, og nu agere man på det, gennem at sende brugeren tilbage til vinduet 'login.html'-side
        body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/login.html";
          }
        })

        // Her kan if else måske bruges
        // Catch bruges til at definere hvad der skal ske, hvis der sker en fejl mellem client og server
        // Heri skrives der, at der skla printes en alert til brugen hvis der skete en fejl
        .catch(() => {
          window.alert("Fejl");
        });
    });
  });
  