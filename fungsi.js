const output = document.getElementById('output');

function hitungJumlah(a, b) {
    let jumlah = a + b;
    return jumlah;
}

function tampilkanPesan() {
    let pesan = 'Hello, World!';
    output.innerHTML += `<p>${pesan}</p>`;
}

let hasil = hitungJumlah(5, 10);
output.innerHTML += `<p>Hasil penjumlahan: ${hasil}</p>`;

tampilkanPesan()
