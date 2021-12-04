const table = document.getElementById('table');
const list = document.getElementById('list'); 

    table.addEventListener('click', async (e) => {
        e.preventDefault();

        await fetch (
            'http://localhost:1300/vare/items', {
                method: 'GET'
            
            })

            .then(res => res.json())
            .then(data => {
                list.innerHTML =`
                <tr>
                    <th>Titel og Beskrivelse  </th>
                    <th>Pris  </th>
                    <th>Kategori</th>
                    <th>Billede</th>
                </tr>
                `;

                data.forEach((e) => {
                    list.innerHTML +=
                    `
                    <tr>
                        <td>${e.titel}</td>
                        <td>${e.price}</td>
                        <td>${e.categori}</td>
                        <td><img scr="${e.billede}" style="height:50px;width:50px;"</td>
                    </tr>
                    `;
                })
            })
            .catch(err =>{
                window.alert('noget gik galt', err);
            });
        }); 