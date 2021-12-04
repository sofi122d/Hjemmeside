
/*
function updateUser(){

    var oldEmail = localStorage.getItem("user");
    oldEmail = JSON.parse(oldEmail);

    var email = document.getElementById("newEmail").value;
    var password = document.getElementById("newPassword").value;

    const updateUser = {
        email: email, 
        password: password, 
        oldEmail: oldEmail.email};

    const Update = {
        email: email, 
        password: password};

    fetch("http://localhost:1300/brugere/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateUser),
    })

    .then((response) => response.json())
    .then((response) => {
      if (response) {
        localStorage.setItem("user", JSON.stringify(Update));
        location.href = "/index.html";
      }
    })

    .catch(() => {
        window.alert("Fejl er opstået");
  });
};


document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("formUpdate").addEventListener("submit", (event) => {
      event.preventDefault();

    var oldEmail = localStorage.getItem("user");
    oldEmail = JSON.parse(oldEmail);

    var email = document.getElementById("newEmail").value;
    var password = document.getElementById("newPassword").value;

    const updateUser = {
        email: email, 
        password: password, 
        oldEmail: oldEmail.email};

    const Update = {
        email: email, 
        password: password};

    fetch("http://localhost:1300/brugere/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateUser),
    })

    .then((response) => response.json())
    .then((response) => {
      if (response) {
        localStorage.setItem("user", JSON.stringify(Update));
        location.href = "/index.html";
      }
    })

    .catch(() => {
        window.alert("Fejl er opstået");
  });
});
});
*/


// logud funktion
const logud = () => {
    window.localStorage.clear();
    window.location.reload(true);
    window.location.replace('/login.html');
  };


// slet bruger funktion
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

//  module.exports = {loggedInUserEmail}

