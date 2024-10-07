class Pesawat {
    constructor(nama, jenis, kecepatan) {
        this.nama = nama;
        this.jenis = jenis;
        this.kecepatan = kecepatan;
    }

    info() {
        return `${this.nama} adalah pesawat jenis ${this.jenis} dengan kecepatan maksimum ${this.kecepatan} km/jam.`;
    }

    aksi() {
        return `${this.nama} sedang terbang.`;
    }
}

class PesawatPenumpang extends Pesawat {
    constructor(nama, jenis, kecepatan, kapasitas) {
        super(nama, jenis, kecepatan);
        this.kapasitas = kapasitas;
    }

    info() {
        return `${super.info()} Pesawat ini memiliki kapasitas ${this.kapasitas} penumpang.`;
    }

    aksi() {
        return `${this.nama} sedang boarding penumpang.`;
    }
}

class PesawatKargo extends Pesawat {
    constructor(nama, jenis, kecepatan, kapasitasKargo) {
        super(nama, jenis, kecepatan);
        this.kapasitasKargo = kapasitasKargo;
    }

    info() {
        return `${super.info()} Pesawat ini memiliki kapasitas kargo ${this.kapasitasKargo} ton.`;
    }

    aksi() {
        return `${this.nama} sedang memuat kargo.`;
    }
}

const armada = [
    new PesawatPenumpang('Boeing 747', 'Pesawat Penumpang', 900, 416),
    new PesawatKargo('Cessna 208', 'Pesawat Kargo', 300, 2)
];

armada.forEach(pesawat => {
    console.log(pesawat.info());
    console.log(pesawat.aksi());
});
