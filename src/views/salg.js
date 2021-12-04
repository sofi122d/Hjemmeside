
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("formCreate").addEventListener("submit", (event) => {
      event.preventDefault();

      const titel = document.getElementById("titel").value;
      const price = document.getElementById("price").value;
      const categori = document.getElementById("categori").value;
      const billede = document.getElementById("billede").value;
    

      const product = {
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




/*
  document.addEventListener("DOMContentLoaded", (event) => {
  
    document.getElementById("deleteProduct").addEventListener("submit", (event) => {
      event.preventDefault();

      const product = localStorage.getItem("product");
        if (!product) {
        location.href = "/salg.html";
        }

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

  */