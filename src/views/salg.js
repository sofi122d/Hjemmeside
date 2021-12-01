
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();

      // En variabel der hedder email, gennem 'document.getElementById', hvor vi heri skriver 'email' - 'value' for at hente email inputtet som brugeren har skrevet i vores opretbruger form
      // En variabel der hedder password, gennem 'document.getElementById', hvor vi heri skriver 'password' - 'value' for at hente email inputtet som brugeren har skrevet i vores opretbruger form
      const titel = document.getElementById("titel").value;
      const price = document.getElementById("price").value;
      const categori = document.getElementById("categori").value;
  
      // variabel der hedder user, '{}' bruges til at forklare til js, at man laver JSON objekter - heri email og password
      const product = {
        titel: titel,
        price: price,
        categori: categori,
      };

      // efter brugeren har trykket submit, skal man kunne kalde endpointed, og herfra hentebrugen gennem fetch funktionen
      // DET HER ER FEJLEN HVIS DER ER EN FELJ (link)
      // POST metoden skal bruges, da der skal laves en bruger i JSON filen
      // Herefter skrives der, at body'en er i form af JSON
        fetch("http://localhost:1300/vare/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // Hvis man 'sender' ting over nettet, sakl man lave sit JSON objekt til en stregf - gemnnem 'stringyfy' - så serveren forstår objektet
        // Herefter kalder man sit endpoint, gennem et promise 'then' ('lige nu har man ikke en værdi, men man "lover" at der kommer en værdi tilbage') 
        // Når man får sin værdi tilbage (response fra serveren), så vil man igen lave det om til JSON (så det kan komme ind i databasen)
        // Nu er response blevet defineret til et JSON objekt, og nu agere man på det, gennem at sende brugeren tilbage til vinduet 'login.html'-side
        body: JSON.stringify(product),
        })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/salg.html";
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

/*
// slet vare funktion
document.addEventListener("DOMContentLoaded", (event) => {
    /*const product = localStorage.getItem("product");
    if (!product) {
      location.href = "/salg.html";
    }
  
    document.getElementById("slet").addEventListener("submit", (event) => {
      event.preventDefault();

      // man parser bruger inputtet i loclastorage til JSON
      const product = JSON.parse(localStorage.getItem("product"));

      // her kalder man endpointet, gennem metoden delete
      fetch("http://localhost:1300/vare/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })

      // responset bliver lavet til html igen
      // hvis der er response, så skal brugeren blive slettet fra localstorage
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            localStorage.removeItem("product");
            location.href = "/salg.html";
          }
        })

        // hvis funktionen ikke går igennem, bruges catch til at definere, hvis der så skal ske - her "Fejl opstået"
        .catch(() => {
          window.alert("Fejl opstået");
        });
    });
  });

/*
/task 6 
function changeTextTwo(){
    document.getElementById("textToSale").innerHTML = prompt("Beskrivelse af produkt");
};

document.getElementById('vareKnap').addEventListener('click', async () => {
    let table = document.getElementById('vareTabel');

    let result = await fetch('http://localhost:1300/vare', {method: 'GET'})
        .then(res => res.json())
        .catch(err => console.log(err))
    
    let tableHTML =
        <tr>
            <th>Kategori</th>
            <th>Amount</th>
        </tr>
    ;

    for(const vare in result){
        tableHTML +=
            <tr>
                <td>${vare}</td>
                <td>${result[vare]}</td>
            </tr>
        ;
    }

    table.innerHTML = tableHTML
});*/