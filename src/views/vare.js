// Se alle produkter
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
                    <th>Id  </th>
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
                        <td>${e.id}</td>
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



// Knap til kategori Tøj
    const tableToej = document.getElementById('tableTøj');

    tableToej.addEventListener('click', async (e) => {
        e.preventDefault();

        await fetch (
            'http://localhost:1300/vare/items', {
                method: 'GET'
            
            })

            .then(res => res.json())
            .then(data => {
                list.innerHTML = `
                <tr>
                    <th>Id</th>
                    <th>Titel og Beskrivelse  </th>
                    <th>Pris  </th>
                    <th>Kategori</th>
                    <th>Billede</th>
                </tr>
                `;

                data.forEach((e) => {
                    if (e.categori != "Tøj"){
                        return;
                    }
                    list.innerHTML +=
                    `
                    <tr>
                        <td>${e.id}</td>
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



// Knap til kategori Sko
        const tableSko = document.getElementById('tableSko');

        tableSko.addEventListener('click', async (e) => {
            e.preventDefault();
    
            await fetch (
                'http://localhost:1300/vare/items', {
                    method: 'GET'
                
                })
    
                .then(res => res.json())
                .then(data => {
                    list.innerHTML = `
                    <tr>
                        <th>Id  </th>
                        <th>Titel og Beskrivelse  </th>
                        <th>Pris  </th>
                        <th>Kategori</th>
                        <th>Billede</th>
                    </tr>
                    `;
    
                    data.forEach((e) => {
                        if (e.categori != "Sko"){
                            return;
                        }
                        list.innerHTML +=
                        `
                        <tr>
                            <td>${e.id}</td>
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



// Knap til kategori Taske
const tableTasker = document.getElementById('tableTasker');

tableTasker.addEventListener('click', async (e) => {
    e.preventDefault();

    await fetch (
        'http://localhost:1300/vare/items', {
            method: 'GET'
        
        })

        .then(res => res.json())
        .then(data => {
            list.innerHTML = `
            <tr>
                <th>Id  </th>
                <th>Titel og Beskrivelse  </th>
                <th>Pris  </th>
                <th>Kategori</th>
                <th>Billede</th>
            </tr>
            `;

            data.forEach((e) => {
                if (e.categori != "Tasker"){
                    return;
                }
                list.innerHTML +=
                `
                <tr>
                    <td>${e.id}</td>
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