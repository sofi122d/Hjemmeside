const opdaterform = document.querySelector("formOpdaterVare");
opdaterform,addEventListener("submit", async(e) => {
    e.preventDefault();

    let id = document.getElementById("id").value;
    let titel = document.getElementById("newTitel").value;
    let price = document.getElementById("newPrice").value;
    let categori = document.getElementById("newCategori").value;
    let billede = document.getElementById("newBillede").value;

    var opdater = {
        id: id,
        titel: titel,
        price: price,
        categori: categori,
        billede: billede
    }


    await fetch("http://localhost:1300/vare/updates", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(opdater),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        window.location.href = "/opdatervare.html";
        window.alert("Varen er nu opdateret");
    })
});






