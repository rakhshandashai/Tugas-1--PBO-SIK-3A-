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
    aksi() {
        return `${this.nama} sedang beroperasi.`;
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
    aksi() {
        return `${this.nama} sedang melakukan boarding penumpang.`;
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
    aksi() {
        return `${this.nama} sedang mengangkut kargo.`;
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
    aksi() {
        return `${this.nama} sedang bersiap untuk bertugas.`;
    }
}

class KapalPesiar extends Kapal { 
    constructor(nama, jenis, panjang, lebar, kapasitasKamar) {
        super(nama, jenis, panjang, lebar); 
        this.kapasitasKamar = kapasitasKamar;  
    }
    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasKamar} kamar.`;
    }
    nikmatiLiburan() {
        return `${this.nama} sedang menawarkan liburan mewah.`;
    }
    aksi() {
        return `${this.nama} sedang menghibur para tamu.`;
    }
}

class KapalPenyelamat extends Kapal { 
    constructor(nama, jenis, panjang, lebar, peralatan) {
        super(nama, jenis, panjang, lebar); 
        this.peralatan = peralatan;  
    }
    infoKapal() {
        return `${super.infoKapal()} Kapal ini dilengkapi dengan peralatan: ${this.peralatan}.`;
    }
    lakukanPenyelamatan() {
        return `${this.nama} sedang melakukan penyelamatan.`;
    }
    aksi() {
        return `${this.nama} sedang dalam misi penyelamatan.`;
    }
}

class KapalNelayan extends Kapal { 
    constructor(nama, jenis, panjang, lebar, alatTangkap) {
        super(nama, jenis, panjang, lebar); 
        this.alatTangkap = alatTangkap;  
    }
    infoKapal() {
        return `${super.infoKapal()} Kapal ini dilengkapi dengan alat tangkap: ${this.alatTangkap}.`;
    }
    lakukanPelayaran() {
        return `${this.nama} adalah kapal yang dilengkapi dengan garis panjang yang memiliki banyak kail untuk menangkap ikan.`;
    }
    aksi() {
        return `${this.nama} sedang berlayar untuk penangkapan ikan.`;
    }
}

class KapalRiset extends Kapal { 
    constructor(nama, jenis, panjang, lebar, peralatanRiset) {
        super(nama, jenis, panjang, lebar); 
        this.peralatanRiset = peralatanRiset;  
    }
    infoKapal() {
        return `${super.infoKapal()} Kapal ini dilengkapi dengan peralatan riset: ${this.peralatanRiset}.`;
    }
    lakukanRiset() {
        return `${this.nama} sedang melakukan penelitian ilmiah di laut.`;
    }
    aksi() {
        return `${this.nama} sedang berlayar untuk melakukan riset.`;
    }
}

class KapalBongkarMuatan extends Kapal { 
    constructor(nama, jenis, panjang, lebar, kapasitasBongkar) {
        super(nama, jenis, panjang, lebar); 
        this.kapasitasBongkar = kapasitasBongkar;  
    }
    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas bongkar ${this.kapasitasBongkar} ton.`;
    }
    bongkarMuatan() {
        return `${this.nama} sedang membongkar muatan.`;
    }
    aksi() {
        return `${this.nama} sedang melakukan proses bongkar muatan.`;
    }
}

class PerahuKecil extends Kapal { 
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar); 
        this.kapasitasPenumpang = kapasitasPenumpang;  
    }
    infoKapal() {
        return `${super.infoKapal()} Perahu ini dapat menampung ${this.kapasitasPenumpang} penumpang.`;
    }
    berlayar() {
        return `${this.nama} sedang berlayar di perairan dangkal.`;
    }
    aksi() {
        return `${this.nama} sedang memancing bersama penumpang.`;
    }
}

const kapalFerry = new KapalPenumpang("Queen of Cowichan", "Ferry", 160, 24, 1600);
const kapalKargo = new KapalKargo("Large Crude Carriers", "Kargo", 300, 50, 1000);
const kapalMiliter = new KapalMiliter("KRI I Gusti Ngurah Rai (332)", "Kapal Perusak (Destroyer)", 150, 20, "Rudal Exocet, meriam 76 mm, dan torpedo.");
const kapalPesiar = new KapalPesiar("Titanic II", "Pesiar", 250, 30, 500);
const kapalPenyelamat = new KapalPenyelamat("Fireboat", "kapal pemadam kebakaran laut", 120, 20, "sistem pemadam kebakaran yang kuat");
const kapalNelayan = new KapalNelayan("Longliner", "Nelayan", 180, 25, "Branch Lines (Snoods), Hooks, dan Catch Bags");
const kapalRiset = new KapalRiset("Ocean Explorer", "Kapal Riset", 200, 30, "Alat sonar dan sampling");
const kapalBongkarMuatan = new KapalBongkarMuatan("Cargo Unloader", "Kapal Bongkar", 250, 35, 1200);
const perahuKecil = new PerahuKecil("Speedy", "Perahu", 10, 3, 4);

const armada = [kapalFerry, kapalKargo, kapalMiliter, kapalPesiar, kapalPenyelamat, kapalNelayan, kapalRiset, kapalBongkarMuatan, perahuKecil];

armada.forEach(kapal => {
    console.log(kapal.infoKapal());
    console.log(kapal.aksi());
});
