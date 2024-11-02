exports.getInventaris = (req, res) => {
    const inventaris = [
        { id: 1, nama: 'Laptop', jumlah: 10 },
        { id: 2, nama: 'Projector', jumlah: 5 }
    ];
    res.render('data/inventaris', { inventaris });
};

exports.getPersonel = (req, res) => {
    const personel = [
        { id: 1, nama: 'John Doe', jabatan: 'Manager' },
        { id: 2, nama: 'Jane Doe', jabatan: 'Staff' }
    ];
    res.render('data/personel', { personel });
};

exports.getTransaksi = (req, res) => {
    const transaksi = [
        { id: 1, deskripsi: 'Pembelian barang', nominal: 100000 },
        { id: 2, deskripsi: 'Penjualan barang', nominal: 150000 }
    ];
    res.render('data/transaksi', { transaksi });
};

exports.getSurat = (req, res) => {
    const surat = [
        { id: 1, nomor: '001/SM/2023', pengirim: 'Kantor Pusat' },
        { id: 2, nomor: '002/SM/2023', pengirim: 'Cabang A' }
    ];
    res.render('data/surat', { surat });
};
