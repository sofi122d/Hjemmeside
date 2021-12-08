const opdaterform = document.querySelector("formSletVare");
opdaterform,addEventListener("submit", async(e) => {
    e.preventDefault();

    let id = document.getElementById("id").value;

    var deleteProduct = {
        id: id,
    }


    await fetch("http://localhost:1300/vare/deleteProduct", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(deleteProduct),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        window.location.href = "/sletvare.html";
        window.alert("Varen er nu slettet");
    })
});





