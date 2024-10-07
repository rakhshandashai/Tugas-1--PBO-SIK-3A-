class Kereta {
    constructor(nama, jenis, kecepatan) {
        this.nama = nama;
        this.jenis = jenis;
        this.kecepatan = kecepatan;
    }

    info() {
        return `${this.nama} adalah kereta jenis ${this.jenis} dengan kecepatan maksimum ${this.kecepatan} km/jam.`;
    }

    aksi() {
        return `${this.nama} sedang berjalan.`;
    }
}

class KeretaPenumpang extends Kereta {
    constructor(nama, jenis, kecepatan, kapasitas) {
        super(nama, jenis, kecepatan);
        this.kapasitas = kapasitas;
    }

    info() {
        return `${super.info()} Kereta ini memiliki kapasitas ${this.kapasitas} penumpang.`;
    }

    aksi() {
        return `${this.nama} sedang mengangkut penumpang.`;
    }
}

class KeretaBarang extends Kereta {
    constructor(nama, jenis, kecepatan, kapasitasKargo) {
        super(nama, jenis, kecepatan);
        this.kapasitasKargo = kapasitasKargo;
    }

    info() {
        return `${super.info()} Kereta ini memiliki kapasitas kargo ${this.kapasitasKargo} ton.`;
    }

    aksi() {
        return `${this.nama} sedang mengangkut barang.`;
    }
}

const armada = [
    new KeretaPenumpang('Kereta Ekspres', 'Kereta Penumpang', 120, 300),
    new KeretaBarang('Kereta Kargo', 'Kereta Barang', 80, 500)
];

armada.forEach(kereta => {
    console.log(kereta.info());
    console.log(kereta.aksi());
});
