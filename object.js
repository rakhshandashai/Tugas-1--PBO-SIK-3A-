const output = document.getElementById('output');

        let mobil = {
            merek: 'Toyota',
            model: 'Corolla',
            tahun: 2020,
            warna: 'Merah'
        };

        output.innerHTML += `<h2>Objek Mobil:</h2><p>${JSON.stringify(mobil)}</p>`;

        let merekMobil = mobil.merek;
        let modelMobil = mobil['model']; 
        output.innerHTML += `<h2>Merek Mobil:</h2><p>${merekMobil}</p>`;
        output.innerHTML += `<h2>Model Mobil:</h2><p>${modelMobil}</p>`;

        mobil.warna = 'Biru';
        mobil['tahun'] = 2021;
        output.innerHTML += `<h2>Objek Mobil Setelah Perubahan:</h2><p>${JSON.stringify(mobil)}</p>`;

        mobil.harga = 300000000;
        output.innerHTML += `<h2>Objek Mobil Setelah Penambahan Properti:</h2><p>${JSON.stringify(mobil)}</p>`;

        delete mobil.harga;
        output.innerHTML += `<h2>Objek Mobil Setelah Penghapusan Properti:</h2><p>${JSON.stringify(mobil)}</p>`;
    
