const output = document.getElementById('output');

        let angka = [1, 2, 3, 4, 5];
        output.innerHTML += `<h2>Array Awal:</h2><p>${angka.join(', ')}</p>`;

        angka[2] = 10; 
        output.innerHTML += `<h2>Array Setelah Perubahan:</h2><p>${angka.join(', ')}</p>`;

        let jumlahElemen = angka.length;
        output.innerHTML += `<h2>Jumlah Elemen Array:</h2><p>${jumlahElemen}</p>`;

        let elemenKetiga = angka[2]; 
        output.innerHTML += `<h2>Elemen Ketiga:</h2><p>${elemenKetiga}</p>`;

        let arrayToString = angka.join(', ');
        output.innerHTML += `<h2>Array Menjadi String:</h2><p>${arrayToString}</p>`;

        angka.pop();
        output.innerHTML += `<h2>Array Setelah pop:</h2><p>${angka.join(', ')}</p>`;

        angka.push(6);
        output.innerHTML += `<h2>Array Setelah push:</h2><p>${angka.join(', ')}</p>`;

        let angka2 = [7, 8, 9];
        let gabunganDua = angka.concat(angka2);
        output.innerHTML += `<h2>Gabungan Dua Array:</h2><p>${gabunganDua.join(', ')}</p>`;

        let angka3 = [10, 11, 12];
        let gabunganTiga = angka.concat(angka2, angka3);
        output.innerHTML += `<h2>Gabungan Tiga Array:</h2><p>${gabunganTiga.join(', ')}</p>`;

        output.innerHTML += `<h2>Iterasi dengan forEach:</h2>`;
        angka.forEach((item, index) => {
            output.innerHTML += `Index ${index}: ${item} <br>`;
        });

        let hasilMap = angka.map((item, index) => `Index ${index}: ${item}`);
        output.innerHTML += `<h2>Iterasi dengan map:</h2><p>${hasilMap.join('<br>')}</p>`;
 
