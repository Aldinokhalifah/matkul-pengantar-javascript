class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }

    sewaKendaraan(_nama, _nomorTelepon, _kendaraanDisewa) {
        this.nama = _nama;
        this.nomorTelepon = _nomorTelepon;
        this.kendaraanDisewa = _kendaraanDisewa;
        console.log(`Pelanggan ${_nama} berhasil menyewa ${_kendaraanDisewa}`);
    }

    getInfo() {
        console.log ( 
            `Nama: ${this.nama}`,
            `Nomor Telepon: ${this.nomorTelepon}`,
            `Kendaraan Disewa: ${this.kendaraanDisewa}`
        )
    }
}

const pelanggan = new Pelanggan();

pelanggan.sewaKendaraan("Aldino", 908122193, "Mobil");
pelanggan.getInfo();

pelanggan.sewaKendaraan("Putra", 28391121, "Motor");
pelanggan.getInfo();
