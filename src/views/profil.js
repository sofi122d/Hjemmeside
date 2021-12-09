// Log ud funktion
const logud = () => {
    window.localStorage.clear();
    window.location.reload(true);
  };


// Slet bruger funktion
document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user");
    if (!user) {
      location.href = "/login.html";
    }
  
    document.getElementById("delete").addEventListener("submit", (event) => {
      event.preventDefault();

      const user = JSON.parse(localStorage.getItem("user"));

      fetch("http://localhost:1300/brugere/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })

        .then((response) => response.json())
        .then((response) => {
          if (response) {
            localStorage.removeItem("user");
            location.href = "/login.html";
          }
        })

        .catch(() => {
          window.alert("Fejl opstået");
        });
    });
  });