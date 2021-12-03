
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();

      const titel = document.getElementById("titel").value;
      const price = document.getElementById("price").value;
      const categori = document.getElementById("categori").value;
      const billede = document.getElementById("billede").value;
    

      const product = {
        titel: titel,
        price: price,
        categori: categori,
        billede: billede,
      };

        fetch("http://localhost:1300/vare/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(product),
        })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/salg.html";
          }
        })

        .catch(() => {
          window.alert("Fejl");
        });
    });


    document.getElementById("produkter").addEventListener("click", async() => {
        const table = document.getElementById("vareTabel");

        table.innerHTML = `
        <tr>
            <th>Titel og Beskrivelse  </th>
            <th>Pris  </th>
            <th>Kategori</th>
            <th>Billede</th>
        </tr>
        `;

        await fetch(
            "http://localhost:1300/vare/Products", {
                method: "GET",
            })

        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            // virker hertil

            Array.from("../../data/vare.json").forEach((products) => {
                table.innerHTML +=
                `
            <tr> 
                <td>${products.titel}</td>
                <td>${products.price}</td>
                <td>${products.categori}</td>
                <td><img scr="${products.billede}" style="height:50px;width:50px;"</td>
            `;
            })
        })

        .catch(err => console.log(err));
    })

  });



/*
  document.addEventListener("DOMContentLoaded", (event) => {
  
    document.getElementById("deleteProduct").addEventListener("submit", (event) => {
      event.preventDefault();

      const product = localStorage.getItem("product");
        if (!product) {
        location.href = "/salg.html";
        }

      // man parser bruger inputtet i loclastorage til JSON
      const product = JSON.parse(localStorage.getItem("product"));

      // her kalder man endpointet, gennem metoden delete
      fetch("http://localhost:1300/vare/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })

      // responset bliver lavet til html igen
      // hvis der er response, så skal brugeren blive slettet fra localstorage
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            localStorage.removeItem("product");
            location.href = "/salg.html";
          }
        })

        // hvis funktionen ikke går igennem, bruges catch til at definere, hvis der så skal ske - her "Fejl opstået"
        .catch(() => {
          window.alert("Fejl opstået");
        });
    });
  });

  */

/*
// vare post
function getAllProductsWithCategory() {
    const category = document.getElementById('categori').value;
    console.log(category)


    const titel = document.getElementById("titel").value;
    const price = document.getElementById("price").value;
    const categori = document.getElementById("categori").value;
  

    const product = {
      titel: titel,
      price: price,
      categori: categori,
    };

    

    fetch("http://localhost:1300/vare/getAllProducts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.parse(product),
        })

        .then((response) => response.json())
        .then((response) => {
        if (response) {
            console.log(response)

            var str = '<ul>'

            response.forEach(function() {
                if(category === "all") {
                    str += '<li>' + " " + titel + " " + categori + " " + price + '</li>';
                } else if(categori === category) {
                    str += '<li>' + " " + titel + " " + categori + " " + price + '</li>';
                }
            });

            str += '</ul>'

            document.getElementById("productContainer").innerHTML = str;
        }
    })

    .catch(() => {
        window.alert("Fejl");
    })
};

/*
document.getElementById("billede").addEventListener("change", function() {
    console.log(this.files);
});
;*/

