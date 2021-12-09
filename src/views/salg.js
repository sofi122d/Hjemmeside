// Opret vare funktion
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("formCreate").addEventListener("submit", (event) => {
      event.preventDefault();

      const id = document.getElementById("id").value;
      const titel = document.getElementById("titel").value;
      const price = document.getElementById("price").value;
      const categori = document.getElementById("categori").value;
      const billede = document.getElementById("billede").value;
    

      const product = {
        id: id,
        titel: titel,
        price: price,
        categori: categori,
        billede: billede,
      };

        fetch("http://localhost:1300/vare/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(product),
        })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/salg.html";
          }
        })

        .catch(() => {
          window.alert("Fejl");
        });
    });
});