class Kendaraan {
    constructor(nama, jenis, kecepatan) {
        this.nama = nama;
        this.jenis = jenis;
        this.kecepatan = kecepatan;
    }

    info() {
        return `${this.nama} adalah kendaraan jenis ${this.jenis} dengan kecepatan maksimum ${this.kecepatan} km/jam.`;
    }

    aksi() {
        return `${this.nama} sedang berjalan.`;
    }
}

class Mobil extends Kendaraan {
    constructor(nama, jenis, kecepatan, jumlahRoda) {
        super(nama, jenis, kecepatan);
        this.jumlahRoda = jumlahRoda;
    }

    info() {
        return `${super.info()} Mobil ini memiliki ${this.jumlahRoda} roda.`;
    }

    aksi() {
        return `${this.nama} sedang melaju di jalan raya.`;
    }
}

class Sepeda extends Kendaraan {
    constructor(nama, jenis, kecepatan, tipe) {
        super(nama, jenis, kecepatan);
        this.tipe = tipe;
    }

    info() {
        return `${super.info()} Sepeda ini adalah tipe ${this.tipe}.`;
    }

    aksi() {
        return `${this.nama} sedang dikayuh.`;
    }
}

const armada = [
    new Mobil('Toyota', 'Mobil Penumpang', 180, 4),
    new Sepeda('Polygon', 'Sepeda Gunung', 25, 'Gunung')
];

armada.forEach(item => {
    console.log(item.info());
    console.log(item.aksi());
});
