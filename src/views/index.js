//opdater bruger funktion/

const opdaterform = document.querySelector("formOpdater");
opdaterform,addEventListener("submit", async(e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("newPassword").value;

    var opdater = {
        email: email,
        password: password
    }


    await fetch("http://localhost:1300/brugere/update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(opdater),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        window.location.href = "/index.html";
        window.alert("Brugeren er nu opdateret");
    })
});