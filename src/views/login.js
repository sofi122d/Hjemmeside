// Login funktion
document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user");
    if (user) {
      location.href = "/index.html";
    }
  
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const user = {
        email: email,
        password: password,
      };
  
      fetch("http://localhost:1300/brugere/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            localStorage.setItem("user", JSON.stringify(user));
            location.href = "/index.html";
          } else {
            window.alert("Et af flere af inputtene er forkerte");
          }
        })
        .catch(() => {
          window.alert("Der skete en fejl");
        });
    });
  });