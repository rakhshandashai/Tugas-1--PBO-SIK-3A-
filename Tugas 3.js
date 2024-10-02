class Kapal {  
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} x ${this.lebar} m.`;
    }
} 

class KapalPenumpang extends Kapal { 
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar); 
        this.kapasitasPenumpang = kapasitasPenumpang;  
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }

    layaniPenumpang() {
        return `${this.nama} sedang melayani penumpang.`;
    }
}

class KapalKargo extends Kapal { 
    constructor(nama, jenis, panjang, lebar, kapasitasKargo) {
        super(nama, jenis, panjang, lebar); 
        this.kapasitasKargo = kapasitasKargo;  
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas kargo ${this.kapasitasKargo} ton.`;
    }

    muatKargo(jumlah) {
        return `Kargo seberat ${jumlah} ton telah dimuat ke dalam ${this.nama}.`;
    }

    bongkarKargo(jumlah) {
        return `Kargo seberat ${jumlah} ton telah dibongkar dari ${this.nama}.`;
    }
}

class KapalMiliter extends Kapal { 
    constructor(nama, jenis, panjang, lebar, jenisSenjata) {
        super(nama, jenis, panjang, lebar); 
        this.jenisSenjata = jenisSenjata;  
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dilengkapi dengan senjata jenis ${this.jenisSenjata}.`;
    }

    siaga() {
        return `${this.nama} dalam posisi siaga.`;
    }

    berlayar() {
        return `${this.nama} sedang berlayar untuk misi.`;
    }
}

const kapalFerry = new KapalPenumpang("Queen of Cowichan", "Ferry", 160, 24, 1600);
console.log(kapalFerry.infoKapal());
console.log(kapalFerry.layaniPenumpang());

const kapalKargo = new KapalKargo("Large Crude Carriers", "Kargo", 300, 50, 1000);
console.log(kapalKargo.infoKapal());
console.log(kapalKargo.muatKargo(200));
console.log(kapalKargo.bongkarKargo(150));

const kapalMiliter = new KapalMiliter("KRI I Gusti Ngurah Rai (332)", "Kapal Perusak (Destroyer)", 150, 20, "Rudal Exocet, meriam 76 mm, dan torpedo.");
console.log(kapalMiliter.infoKapal());
console.log(kapalMiliter.siaga());
console.log(kapalMiliter.berlayar());
