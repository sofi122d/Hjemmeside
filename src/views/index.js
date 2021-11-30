document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user");
    if (!user) {
      location.href = "/login.html";
    }
  
    document.getElementById("delete").addEventListener("submit", (event) => {
      event.preventDefault();

      // man parser bruger inputtet i loclastorage til JSON
      const user = JSON.parse(localStorage.getItem("user"));

      // her kalder man endpointet, gennem metoden delete
      fetch("http://localhost:1300/brugere/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })

      // responset bliver lavet til html igen
      // hvis der er response, så skal brugeren blive slettet fra localstorage
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            localStorage.removeItem("user");
            location.href = "/login.html";
          }
        })

        // hvis funktionen ikke går igennem, bruges catch til at definere, hvis der så skal ske - her "Fejl opstået"
        .catch(() => {
          window.alert("Fejl opstået");
        });
    });
  });