const output = document.getElementById('output');

        let nilai = 75;
        output.innerHTML += '<h2>Contoh if, else if, dan else:</h2>';
        if (nilai >= 80) {
            output.innerHTML += 'Grade: A <br>';
        } else if (nilai >= 60) {
            output.innerHTML += 'Grade: B <br>';
        } else if (nilai >= 40) {
            output.innerHTML += 'Grade: C <br>';
        } else {
            output.innerHTML += 'Grade: D <br>';
        }

        let hari = 3; 
        output.innerHTML += '<h2>Contoh switch:</h2>';
        switch (hari) {
            case 1:
                output.innerHTML += 'Hari: Senin <br>';
                break;
            case 2:
                output.innerHTML += 'Hari: Selasa <br>';
                break;
            case 3:
                output.innerHTML += 'Hari: Rabu <br>';
                break;
            case 4:
                output.innerHTML += 'Hari: Kamis <br>';
                break;
            case 5:
                output.innerHTML += 'Hari: Jumat <br>';
                break;
            case 6:
                output.innerHTML += 'Hari: Sabtu <br>';
                break;
            case 7:
                output.innerHTML += 'Hari: Minggu <br>';
                break;
            default:
                output.innerHTML += 'Hari tidak valid <br>';
        }
