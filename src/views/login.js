document.addEventListener("DOMContentLoaded", (event) => {

    // hvis der findes en user i localstorage, så skal brugeren blive smidt direkte over på hjemmesdien 'home'
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
            // hvis response er forkert, skal vinduet returnere 'En af flere af inputtene er forkerte'
          if (response) {
              // der er en funktion i js er hedder localstorage, og heri en funktion der hedder setItem - som gør at der laves en ny række, med login oplysningerne
              // derfor forbliver den logget ind
              // heri definere key og value i login ("user" - som gemmer værdien 'user') 
              // herefter bruges stringyfy til JSON til at sende data over internettet
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
  