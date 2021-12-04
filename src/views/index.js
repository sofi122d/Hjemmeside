/*//opdater bruger funktion/
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("formOpdater").addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = document.getElementById("newEmail").value;
      const password = document.getElementById("newPassword").value;
  
      const update = {
        email: email,
        password: password,
      };

        await fetch("http://localhost:1300/brugere/opdater", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),


        })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/profil.html";
            window.alert('Bruger er opdateret')
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
  */