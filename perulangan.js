const output = document.getElementById('output');

        output.innerHTML += '<h2>Perulangan for:</h2>';
        for (let i = 1; i <= 5; i++) {
            output.innerHTML += `Nomor: ${i} <br>`;
        }

        output.innerHTML += '<h2>Perulangan while:</h2>';
        let j = 1;
        while (j <= 5) {
            output.innerHTML += `Nomor: ${j} <br>`;
            j++;
        }

        output.innerHTML += '<h2>Perulangan do...while:</h2>';
        let k = 1;
        do {
            output.innerHTML += `Nomor: ${k} <br>`;
            k++;
        } while (k <= 5);
