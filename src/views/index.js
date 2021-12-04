//opdater bruger funktion/


const btn = document.getElementById('indsend');

btn.addEventListener('submit', async (e) => {
    e.preventDefault();


      let email = document.getElementById("newEmail").value;
      let password = document.getElementById("newPassword").value;
  
      var update = {
        email: email,
        password: password,
        }

        await fetch("http://localhost:1300/brugere/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),


        })
        .then((res) => res.json())
        .then(data => {
            window.location.href = "/index.html";
            window.alert('Bruger er opdateret');
        })

        .catch(err => {
          window.alert("Fejl", err);
        });
    });